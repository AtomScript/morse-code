Object.prototype.reverse = function(){
  let newObj = {};
  
  for(let key in this){
   newObj[key] = Object.keys(this).find(key2 => this[key2] === this[key]);
  }
  
  return newObj;
};

String.prototype.seatRemove = function(){
  try{
  	    let string = this;
        string = string.toLowerCase();
        if(/[áàãâäâ]/g.test(string))
        string = string.replace(/[áàãâäâ]/g, 'a');
        
        if(/[éèêëê]/g.test(string))
        string = string.replace(/[éèêëê]/g, 'e');
        
        if(/[íìîïî]/g.test(string))
        string = string.replace(/[íìîïî]/g, 'i');
        
        if(/[óòõôöô]/g.test(string))
        string = string.replace(/[óòõôöô]/g, 'o');
        
        if(/[úùûüû]/g.test(string))
        string = string.replace(/[úùûüû]/g, 'u');
        
        if(/[ç]/g.test(string))
        string = string.replace(/[ç]/g, 'c');


        if(/[áàãâäâ]/g.test(string) || /[éèêëê]/g.test(string) || /[íìîïî]/g.test(string) || /[óòõôöô]/g.test(string) || /[úùûüû]/g.test(string) || /[ç]/g.test(string))
        reform(string);
        else
        return string;

  }catch(err){return this}
};



module.exports.encode = (text) => {
  text = text.toLowerCase();
  text = text.seatRemove();
  let decoded = [];
   
   let words = {
     "•-":"a",
     "-•••":"b",
     "-•-•":"c",
     "-••":"d",
     "•": "e",
     "••-•":"f",
     "--•":"g",
     "••••":"h",
     "••":"i",
     "•---": "j",
     "-•-":"k",
     "•-••":"l",
     "--":"m",
     "-•":"n",
     "---":"o",
     "•--•":"p",
     "--•-":"q",
     "•-•":"r",
     "•••":"s",
     "-":"t",
     "••-":"u",
     "•••-":"v",
     "•--":"w",
     "--•--":"x",
     "-•--":"y",
     "--••":"z",
     "•----":"1",
     "••---":"2",
     "•••--":"3",
     "••••-":"4",
     "•••••":"5",
     "-••••":"6",
     "--•••":"7",
     "---••":"8",
     "----•":"9",
     "-----":"0",
     "/": " "
   };
   
   
   for(let char of text.split(""))
   for(let key in words){
     
     let repl = new RegExp(words[key],"gim");
     if(char === words[key]){
     let newChar = char.replace(repl, key);
     decoded.push(newChar);
     }
   }
   
   return decoded.join(" ");
};



module.exports.decode = (text) =>{
  text = text.replace(/\./gim, "•");
  text = text.replace(/_/gim, "-");
  text = text.seatRemove();
   let texts = text.split(/ +/g);
   
   const words = {
     "•-":"a",
     "-•••":"b",
     "-•-•":"c",
     "-••":"d",
     "•": "e",
     "••-•":"f",
     "--•":"g",
     "••••":"h",
     "••":"i",
     "•---": "j",
     "-•-":"k",
     "•-••":"l",
     "--":"m",
     "-•":"n",
     "---":"o",
     "•--•":"p",
     "--•-":"q",
     "•-•":"r",
     "•••":"s",
     "-":"t",
     "••-":"u",
     "•••-":"v",
     "•--":"w",
     "--•--":"x",
     "-•--":"y",
     "--••":"z",
     "•----":"1",
     "••---":"2",
     "•••--":"3",
     "••••-":"4",
     "•••••":"5",
     "-••••":"6",
     "--•••":"7",
     "---••":"8",
     "----•":"9",
     "-----":"0"
   };
   
   for(let word in texts)
   for(let key in words){
     let repl = new RegExp(key,"gim");
     if(texts[word] === key)
     texts[word] = texts[word].replace(repl, words[key]);
   }
   
   return texts.join("").replace(/\//g, " ");
};
