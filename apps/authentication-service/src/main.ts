import * as express from 'express';
import mongoose from 'mongoose';
import router from './app/routes';
console.log(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@$${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
);

mongoose.connect(
  `mongodb+srv://apolo:4p0l0_pl4y@$cluster0.esmluzr.mongodb.net/authentications-local?retryWrites=true&w=majority`
);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

const port = process.env.port || 3000;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/users`);
});
server.on('error', console.error);
