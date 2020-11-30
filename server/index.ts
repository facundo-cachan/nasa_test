/* eslint-disable @typescript-eslint/no-var-requires */
import express, {Request, Response} from 'express';

const app = express(),
  PORT = 8000;

app
  .get('/', (_: any, res: Response) => res.send('Express + TypeScript Server'))
  .get('/:rover/:camera', (req: Request, res: Response) => {
    const {rover, camera} = req.params;
    const rovers = require(`./data/${rover}.json`);
    res.status(200).json(rovers);
  })
  .listen(PORT, () => {
    console.clear();
    console.log(`⚡️ Server is running at http://localhost:${PORT}`);
  });

/**
 * https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=10&camera=rhaz&api_key=DEMO_KEY
 */
