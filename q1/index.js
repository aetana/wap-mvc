const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.use("/css",express.static(path.join(__dirname,'css')));

app.get('/', (req, res)=>{
    console.log("Server running ");
    const date = new Date();
    var type;
    if(date.getHours() > 6 && date.getHours() < 18){
        type = "day.css";
    }
    else{
        type = "night.css";
    }
    res.render('index', { 
        time: date.toTimeString(),
        style:type,
    });

    console.log("end of the get method")
});

app.listen(3000);
