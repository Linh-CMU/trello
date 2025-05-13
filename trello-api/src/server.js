import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, host, () => {
  console.log(`Server is running at http://${host}:${PORT}`);
});