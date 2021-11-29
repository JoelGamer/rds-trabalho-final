import express from 'express';
import cors from 'cors';
import login from './controllers/login';

const PORT = '8888';
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_, res) => res.send('<h1>Server is running normally!</h1>'));
app.post(login.PATH, login.post);

app.listen(PORT, () => {
  console.log(`[SERVER] Express.js initialized on http://localhost:${PORT}`);
});