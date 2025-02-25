// import express, { Request, Response } from 'express';

// const app = express();
// const port = 3000;

// app.get('/', (req: Request, res: Response) => {
//     res.send('Hello Universe!');
// });

// app.get('/test', (req: Request, res: Response) => {
//     res.send('test this shit');
// });

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });

exports.handler = async (event: any, context: any) => {
    console.log(`JSON.stringify(event)=${JSON.stringify(event)}`)
    console.log(`JSON.stringify(context)=${JSON.stringify(context)}`)
    if (event.httpMethod === 'GET') {
        try {
            return {
                statusCode: 200,
                body: 'test',
            };
        } catch (error) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'Failed to process GET request' }),
            };
        }
    }
};