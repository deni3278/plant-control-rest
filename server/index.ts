import "./common/env";
import Database from "./common/database";
import Server from "./common/server";
import routes from "./routes";
import {Plant} from "./api/models/plant";
import {Example} from "./api/models/example";

const port = parseInt(process.env.PORT || "3000");
const connectionString =
  process.env.NODE_ENV === "production"
    ? process.env.MONGODB_URI
    : process.env.NODE_ENV === "test"
    ? process.env.MONGODB_URI_TEST ||
      "mongodb://localhost:27017/plant-control"
    : process.env.MONGODB_URI_DEV ||
      "mongodb://localhost:27017/plant-control-test";

const db = new Database(connectionString);
export default new Server().database(db).router(routes).listen(port);

const plant = new Plant({name: "test", createdAt: new Date()});
plant.save().then(r => console.log(r));



