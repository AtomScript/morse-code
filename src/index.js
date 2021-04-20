const express = require("express");
const bodyparser = require("body-parser");
const morse = require("./morse.js");

let app = express();

app.use(express.static(__dirname+"/client_side"))

app.use(bodyparser.json());

app.use(bodyparser({
  extends: false
}));

app.get("/", (req, res) =>{
  res.sendFile(__dirname + "/client_side/index.html");
});

app.post("/decode", (req, res) =>{
  if(req.body["text"]){
    if(/[a-zA-Z0-9]/g.test(req.body["text"])){
      res.send("Please type a valid morse code.")
      return;
    }
    
    
  const text = morse.decode(req.body.text);
  let arr = [];
  for(let letter of req.body.text.split(" "))
  arr.push({
    letter: letter,
    code: morse.decode(letter)
  })
  
  res.send({arr, text: text});
  }else{
    res.send("Failed request. Missing text")
  }
});

app.post("/encode", (req, res) =>{
  
  if(req.body["text"]){
    if(!/[a-zA-Z0-9]/g.test(req.body["text"])){
      res.send("Please type a valid text.")
      return;
    }
    
  const text = morse.encode(req.body.text);
  let arr = [];
  for(let letter of req.body.text.split(""))
  arr.push({
    letter: letter,
    code: morse.encode(letter)
  })
  
  res.send({arr, text: text});
  }else{
    res.send("Failed request. Missing text")
  }
});


app.listen();
