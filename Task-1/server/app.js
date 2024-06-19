const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./Routes/routes');



app.use(cors());
app.use(express.json());


app.use('/api', router);


app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});
