import * as SibApiV3Sdk from "@sendinblue/client";
import { NextResponse } from "next/server";
import sibTemplates from "../../../../utils/mail.templates";
import { verify } from "hcaptcha";
import { getIp } from "../../../../utils/misc";

let _apiInstance: null | SibApiV3Sdk.TransactionalEmailsApi = null;

const apiInstance = () => {
  if (!_apiInstance) {
    _apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    (_apiInstance as SibApiV3Sdk.TransactionalEmailsApi).setApiKey(
      SibApiV3Sdk.TransactionalSMSApiApiKeys
        .apiKey as unknown as SibApiV3Sdk.TransactionalEmailsApiApiKeys,
      process.env.BREVO_API_KEY!
    );
  }
  return _apiInstance;
};
const send = async ({
  to,
  toName,
  from = "Contact@navisinvestmentgroup.com",
  fromName = "Navis Investment Group",
  subject,
  template,
  text,
  html = text,
  cc = [],
}: {
  to: string;
  toName?: string;
  from?: string;
  fromName?: string;
  subject?: string;
  template?: {
    id: number;
    data: Record<string, string>;
    tags?: string[];
  };
  text?: string;
  html?: string;
  cc?: SibApiV3Sdk.SendSmtpEmailCc[];
}) => {
  const smtpEmail = new SibApiV3Sdk.SendSmtpEmail();
  smtpEmail.sender = new SibApiV3Sdk.SendSmtpEmailSender();
  smtpEmail.sender.name = fromName;
  smtpEmail.sender.email = from;

  const toObj = new SibApiV3Sdk.SendSmtpEmailTo();
  toObj.email = to;
  if (toName) toObj.name = toName;
  smtpEmail.to = [toObj];

  smtpEmail.subject = subject;

  if (cc.length) smtpEmail.cc = cc;
  if (html) smtpEmail.htmlContent = html;
  if (text) smtpEmail.textContent = text;

  if (template) {
    const { id, data, tags } = template;
    smtpEmail.templateId = id;
    smtpEmail.params = data;
    if (Array.isArray(tags)) smtpEmail.tags = tags;
  }

  await apiInstance().sendTransacEmail(smtpEmail);
};

export async function POST(req: Request) {
  const rawBody = await req.json();
  delete rawBody.agree;
  console.log("req: ", rawBody);

  const verified = await verify(
    process.env.HCAPTCHA_SECRET!,
    rawBody.captcha,
    getIp(req),
    process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!
  );
  console.log("verified", verified);
  if (verified.success) {
    console.log("success: ", verified);
  } else {
    console.log("success: ", verified);
    return false;
  }

  await fetch(process.env.NEXT_PUBLIC_APP_SCRIPT_URL!, {
    redirect: "follow",
    method: "POST",
    body: JSON.stringify([
      rawBody.name,
      rawBody.email,
      rawBody.number,
      rawBody.companyName,
      rawBody.investorType,
      rawBody.companyAum,
    ]),
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
  });

  await send({
    to: "zafirkhan824@gmail.com",
    template: sibTemplates.authentication.inviteUser(rawBody),
  });
  return NextResponse.json(
    { message: "Email SEnd" },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
