const express = require('express');
const app = express();
//const port = 8080;
const port = process.env.PORT || 5000;

const data = require("./data");

//console.log(data);

//app.get('/', (req, res) => res.send('Hello World!'))
app.get("/", function(req,res){
    //console.log(req.query.message);
    const letter =  req.query.letter;
     
     //res.send(data);
    // console.log(letter);
     //contains(data,letter)
     test(letter,data);

function test(letter,dicti){
    if(dicti[letter]){
        res.send(letter + " is here");
        console.log(letter,"is here")
    }else{
        res.send(letter+" is not here");
        console.log(letter," is not here")
    }
}

    
    
    

    
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
