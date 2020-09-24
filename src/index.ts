import express, { Express, Request, Response } from 'express';

export const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.json({ success: true }).send();
});

app.listen(3000, () => console.log('server is live!!!'));
