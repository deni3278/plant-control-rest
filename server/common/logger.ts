import pino from "pino";

const l = pino({
  name: process.env.APP_ID || "plant-control-rest",
  level: process.env.LOG_LEVEL || "debug",
});

export default l;
