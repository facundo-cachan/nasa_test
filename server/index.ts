/* eslint-disable @typescript-eslint/no-var-requires */
import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import log from '../src/utils/_log';

const app = express(),
  PORT = 8000;

app
  .use(morgan('tiny'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  .get('/', (_: any, res: Response) => res.status(200).send('Local Server'))
  .get('/rovers', (_: any, res: Response) => {
    const rovers = require('./data/rovers.json');
    log('ROVERS', rovers);
    res.status(200).json(rovers);
  })
  .get('/cameras', (_: any, res: Response) => {
    const cameras = require('./data/cameras.json');
    log('CAMERAS', cameras);
    res.status(200).json(cameras);
  })
  .get('/:rover/photos', (req: Request, res: Response) => {
    log('BODY', req.body);
    log('PARAMS', req.params);
    /* 
    const { rover } = req.params;
    console.log('ROVER',rover);
     */
    //const rovers = require(`./data/${rover}.json`);
    res.status(200); //.json(rovers);
  })
  .listen(PORT, () => {
    console.clear();
    console.log(`⚡️ Server running http://localhost:${PORT}`);
  });

/**
 * https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=10&camera=rhaz&api_key=DEMO_KEY
 */
