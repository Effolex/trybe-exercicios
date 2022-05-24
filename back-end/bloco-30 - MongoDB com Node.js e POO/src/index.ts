import { json } from "express";
import App from "./app";
import routes from "./routes/index.routes";

const app = new App(routes).express;

const PORT  = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('🚀 [server]: Listening at PORT ', PORT)
});