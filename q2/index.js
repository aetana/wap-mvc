const express = require('express');
const path = require('path');


const app = express();
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended:true }))


app.get("/", (req, res) => {
        res.render('form', {
            name:req.query.name,
            age:req.query.age,
        });
});

app.post("/result", (req, res) => {
    res.render('result', {
        name:req.body.name,
        age:req.body.age,
    });
});


app.listen(3000);

