const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const { username, password } = process.env;
mongoose
  .connect(
    // `mongodb://127.0.0.1:27017/`,
    // eslint-disable-next-line prettier/prettier
    `mongodb+srv://${username}:${password}@cluster0-rbshr.mongodb.net/natours?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  )
  .then(() => console.log('DB connections successful'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
