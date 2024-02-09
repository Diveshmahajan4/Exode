import express, {Request, Response} from 'express';

const app = express();

// Define a port for the server to listen on
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.post('/deploy', (req: Request, res: Response) => {
    const url = req.body;
    // Process the data

    res.status(200).json({ message: 'Data received successfully' });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});