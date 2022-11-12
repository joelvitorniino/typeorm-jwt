import express from 'express';
import cors from 'cors';
import router from './routes';
import { AppDataSource } from './db/data-source';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

app.listen(3000, () => {
    console.log("Running on http://localhost:3000");
})

AppDataSource.initialize()
    .then(() => console.log("Database connected!"))
    .catch((e) => console.log("Error on connection of database!", e));