
function encode() {
  try{
    let encodeText = document.getElementById("texter");
let decodeText = document.getElementById("resultText");

     $.ajax({
  url: '/encode',
  method: 'POST',
  data: {text: encodeText.value},
   success: function(data){
     decodeText.innerHTML = data.text;
     const table = document.getElementById("tableText");
       
       table.innerHTML = `<tr>
          <th>Character</th>
          <th>Code</th>
        </tr>`;
       
     for(let res of data.arr){
       table.innerHTML += "<tr><td>"+res.letter+"</td><td>"+res.code+"</td></tr>"
     }
},
error: function(xhr, status, error) {
  var err = eval("(" + xhr.responseText + ")");
  alert(err.Message);
}
});
}catch(err){console.log(err)};
}


function decode() {
  try{
    let encodeText = document.getElementById("resultMorse");
let decodeText = document.getElementById("morseText");

     $.ajax({
  url: '/decode',
  method: 'POST',
  data: {text: decodeText.value},
   success: function(data){
     encodeText.innerHTML = data.text;
     const table = document.getElementById("tableMorse");
       
       table.innerHTML = `<tr>
          <th>Code</th>
          <th>Character</th>
        </tr>`;
       
     for(let res of data.arr){
       table.innerHTML += "<tr><td>"+res.letter+"</td><td>"+res.code+"</td></tr>"
     }
},
error: function(xhr, status, error) {
  var err = eval("(" + xhr.responseText + ")");
  alert(err.Message);
}
});
}catch(err){console.log(err)};
}

function changeToMorse() {
  document.getElementById("morseDiv").style.display = "block";
  document.getElementById("textDiv").style.display = "none";
}

function changeToText() {
  document.getElementById("textDiv").style.display = "block";
  document.getElementById("morseDiv").style.display = "none";
}

function showModalText() {
  document.getElementById("gt").style.display = "block";
  document.getElementById("gm").style.display = "none";
}

function showModalMorse() {
  document.getElementById("gt").style.display = "none";
  document.getElementById("gm").style.display = "block";
}

function hidegt(){
  document.getElementById("gt").style.display = "none";
}

function hidegm(){
  document.getElementById("gm").style.display = "none";
}
function encode() {
  try{
    let encodeText = document.getElementById("texter");
let decodeText = document.getElementById("resultText");

     $.ajax({
  url: '/encode',
  method: 'POST',
  data: {text: encodeText.value},
   success: function(data){
     decodeText.innerHTML = data.text;
     const table = document.getElementById("tableText");
       
       table.innerHTML = `<tr>
          <th>Character</th>
          <th>Code</th>
        </tr>`;
       
     for(let res of data.arr){
       table.innerHTML += "<tr><td>"+res.letter+"</td><td>"+res.code+"</td></tr>"
     }
},
error: function(xhr, status, error) {
  var err = eval("(" + xhr.responseText + ")");
  alert(err.Message);
}
});
}catch(err){console.log(err)};
}


function decode() {
  try{
    let encodeText = document.getElementById("resultMorse");
let decodeText = document.getElementById("morseText");

     $.ajax({
  url: '/decode',
  method: 'POST',
  data: {text: decodeText.value},
   success: function(data){
     encodeText.innerHTML = data.text;
     const table = document.getElementById("tableMorse");
       
       table.innerHTML = `<tr>
          <th>Code</th>
          <th>Character</th>
        </tr>`;
       
     for(let res of data.arr){
       table.innerHTML += "<tr><td>"+res.letter+"</td><td>"+res.code+"</td></tr>"
     }
},
error: function(xhr, status, error) {
  var err = eval("(" + xhr.responseText + ")");
  alert(err.Message);
}
});
}catch(err){console.log(err)};
}

function changeToMorse() {
  document.getElementById("morseDiv").style.display = "block";
  document.getElementById("textDiv").style.display = "none";
}

function changeToText() {
  document.getElementById("textDiv").style.display = "block";
  document.getElementById("morseDiv").style.display = "none";
}

function showModalText() {
  document.getElementById("gt").style.display = "block";
  document.getElementById("gm").style.display = "none";
}

function showModalMorse() {
  document.getElementById("gt").style.display = "none";
  document.getElementById("gm").style.display = "block";
}

function hidegt(){
  document.getElementById("gt").style.display = "none";
}

function hidegm(){
  document.getElementById("gm").style.display = "none";
}
