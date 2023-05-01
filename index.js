const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');
app.use(cors());
const chef = require('./Chef.json');

app.get('/all-chef', (req, res) => {
  res.send(chef);
})
app.get('/all-chef/:id',(req, res)=>{
    const id = req.params.id;
    const selectedChef = chef.find(cf=> cf.id== id);
    res.send(selectedChef)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})