const express = require("express");
const app = express();
var cors = require('cors')
const PORT = process.env.PORT || 3030;
app.use(cors())
// your code
app.get('/', function (req, res) {
    res.send('Hello World')
  })
  const excelToJson = require('convert-excel-to-json');
 
const result = excelToJson({
    sourceFile: 'gym_paul.xlsx',
    columnToKey: {
        B: 'day',
        C: 'title',
        D: 'first_set',
        E: 'second_set',
        F: 'img'
    }
});

app.get('/data', function (req, res) {
    res.send(result)
  })

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});


