import express from 'express'
import connectDB from './config/db.js';
import routes from './routes/routes.js';
import cors from 'cors'


connectDB();


const app = express()
const port = 3000

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', routes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})