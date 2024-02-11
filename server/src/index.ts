import express, {Request, Response} from 'express';
import cors from 'cors';
import simpleGit from 'simple-git';
import { generate } from './utils';
import path from 'path';
import { getFilePaths } from './getFilePaths';

const app = express();

// Define a port for the server to listen on
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(cors())
app.use(express.json());

app.post('/deploy', async (req: Request, res: Response) => {
    const url = req.body.repourl;
    // Process the data
    // console.log(url);
    const id = generate();
    // cloning the repo
    await simpleGit().clone(url, path.join(__dirname, `./output/${id}`));

    const files = getFilePaths(path.join(__dirname, `./output/${id}`));

    

    res.status(200).json({ message: 'URL received successfully', id: id });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});