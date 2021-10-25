import express from 'express';
import path from 'path';
import cors from 'cors';
import colors from 'colors';
import dotenv from 'dotenv';

import topSalesPerson from './routes/topSalesPerson.js';
import salesPersons from './routes/salesPersons.js';

const __dirname = path.resolve(path.dirname(''));
// const __dirname = new URL(import.meta.url).pathname;

dotenv.config({ path: `${__dirname}/src/config/config.env` });

const app = express();

// Cors middleware
app.use(cors());

// Body parser middleware
app.use(express.json());

// Root Route
app.get('/', (req, res) => {
	res.status(200).send('Server is running...!');
});

app.use('/api/v1/topSalesPerson', topSalesPerson);
app.use('/api/v1/salesPersons', salesPersons);

app.listen(process.env.PORT, () => {
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on ${process.env.HOST}:${process.env.PORT}`
			.blue.inverse.bold
	);
});
