const FE_URL = "http://localhost:3000";

const notification = {
  general: ({
    title,
    body,
    link,
    image,
  }: {
    title: string;
    body: string;
    link?: string;
    image?: string;
  }) => {
    return {
      id: 4,
      data: {
        title,
        body,
        link,
        image,
      },
    };
  },
};

const authentication = {
  verifyEmail: ({
    otp,
    name,
    email,
  }: {
    otp: string;
    name: string;
    email: string;
  }) => {
    return {
      id: 1,
      data: {
        otp,
        name,
        email,
        link: `${FE_URL}/verify-email?email=${email}&otp=${otp}`,
      },
    };
  },

  forgotPassword: ({
    otp,
    name,
    email,
  }: {
    otp: string;
    name: string;
    email: string;
  }) => {
    return {
      id: 2,
      data: {
        otp,
        name,
        email,
        link: `${FE_URL}/reset-password?email=${email}&otp=${otp}`,
      },
    };
  },

  inviteUser: ({
    name,
    email,
    number,
    companyName,
    investorType,
    companyAum,
    captcha,
  }: {
    name: string;
    email: string;
    number: string;
    companyName: string;
    investorType: string;
    companyAum: string;
    captcha: string;
  }) => {
    return {
      id: 1,
      data: {
        name,
        email,
        number,
        companyName,
        investorType,
        companyAum,
        captcha,
      },
    };
  },
};

const sibTemplates = {
  notification,
  authentication,
};

export default sibTemplates;
