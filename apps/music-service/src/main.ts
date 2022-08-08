import * as express from 'express';
import mongoose from 'mongoose';
import router from './app/routes';
import * as cors from 'cors';

// `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@$cluster1.esmluzr.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
console.log(
  `mongodb+srv://apolo:4p0l0_pl4y@$cluster0.esmluzr.mongodb.net/music-local?retryWrites=true&w=majority`
);

mongoose.connect(
  `mongodb+srv://apolo:4p0l0_pl4y@$cluster0.esmluzr.mongodb.net/music-local?retryWrites=true&w=majority`
);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/songs`);
});
server.on('error', console.error);
