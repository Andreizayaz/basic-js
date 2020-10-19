const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
	constructor(value){
		this.command=(value ||undefined)?true:false;
	}

	resultStr='';

  encrypt(message, key) {
	if(message===undefined || key===undefined) throw new Error();
	message = message.toLowerCase().split('');
  key = key.toLowerCase().split('');
  
  let resultStr = '';
  let indexLetter;
  
  for(let i=0, j=0; i<message.length;i++){
    if(97<=message[i].charCodeAt() && message[i].charCodeAt()<=122){
      indexLetter = (message[i].charCodeAt()-97) + (key[j].charCodeAt()-97);
      if(indexLetter>25){
        indexLetter -= 26;
        resultStr+=String.fromCharCode(indexLetter+97);
      }else{
        resultStr+=String.fromCharCode(indexLetter+97);
      }
      
      //j = (j===key.length)?0:j++;
      
      j++;
      if(j===key.length){
        j=0;
      }
      
    }else{
      resultStr+=message[i];
    }
    
    //return resultStr;
  }
	return ((this.value===false) ? resultStr.split('').reverse().join(''):resultStr).toUpperCase();
  }    

  decrypt(encryptedMessage, key) {
	if(encryptedMessage===undefined || key===undefined) throw new Error();
	encryptedMessage = encryptedMessage.toLowerCase().split('');
	key = key.toLowerCase().split('');
   
   let resultStr = '';
   let indexLetter;
   
   for(let i=0, j=0; i<encryptedMessage.length;i++){
	 if(97<=encryptedMessage[i].charCodeAt() && encryptedMessage[i].charCodeAt()<=122){
	   if((encryptedMessage[i].charCodeAt()-97) < (key[j].charCodeAt()-97)){
		 indexLetter = (encryptedMessage[i].charCodeAt()-97) + 26 - (key[j].charCodeAt()-97);
		 resultStr+=String.fromCharCode(indexLetter+97);
	   }else{
		 resultStr+=String.fromCharCode((encryptedMessage[i].charCodeAt()-97) - (key[j].charCodeAt()-97)+97);
	   }
	   
	   j++;
	   if(j===key.length){
		 j=0;
	   }
	   
	 }else{
	   resultStr+=encryptedMessage[i];
	 }
   }
	return ((this.value===false) ? resultStr.split('').reverse().join(''):resultStr).toUpperCase();
  }

  /*for(let letter of str.split('')){
  console.log(`${letter} : ${letter.charCodeAt()-97}`);
}*/

/*

Idea for solve task

let msg = 'program';
let key = 'dog';

function encrypt(msg, key){
  msg = msg.toLowerCase().split('');
  key = key.toLowerCase().split('');
  let result = '';
  let indexLetter;
  
  for(let i=0, j=0; i<msg.length;i++;){
    if(97<=msg[i]<=122){
      indexLetter = (msg[i].charCodeAt()-97) + (key[i].charCodeAt()-97);
      if(indexLetter>25){
        indexLetter -= 26;
        result+=String.fromCharCode(indexLetter);
      }else{
        result+=String.fromCharCode(indexLetter);
      }
      
    }else{
      continue;
    }
  }

  let str = String.fromCharCode(97, 105, 121);
alert(str);
}*/

}

module.exports = VigenereCipheringMachine;
