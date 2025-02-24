import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Universe!');
});

app.get('/test', (req: Request, res: Response) => {
    res.send('test this shit');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});