import * as SibApiV3Sdk from "@sendinblue/client";
import { NextResponse } from "next/server";
import sibTemplates from "../../../../utils/mail.templates";

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
