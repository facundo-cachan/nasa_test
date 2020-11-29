/* eslint-disable @typescript-eslint/no-var-requires */
import express, {Request, Response} from 'express';

const app = express(),
  PORT = 8000;

app
  .get('/', (_: any, res: Response) => res.send('Express + TypeScript Server'))
  .get('/:data', (req: Request, res: Response) => {
    const param = req.params.data,
      data = require(`./data/${param}.json`);
    res.status(200).json(data);
  })
  .listen(PORT, () => {
    console.clear();
    console.log(`⚡️ Server is running at http://localhost:${PORT}`);
  });
