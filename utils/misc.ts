type GenericObject = Record<string, any>;
export const getIp = (req: GenericObject) => {
  const ip =
    req.clientIp ||
    req.ip ||
    req.headers["x-forwarded-for"]?.split(",").pop() ||
    req.socket?.remoteAddress;

  const prefix = "::ffff:";
  if (ip?.startsWith(prefix)) return ip.slice(prefix.length);
};
