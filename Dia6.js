let fs = require('fs');
fs.readFile('input.txt', 'utf-8', (err, txt) => {
  if(err)
    console.log("Error: ", err);
  else {
    var texto = txt.split('\r\n\r\n').map(function(ans){
        return ans.replace("\r\n", "").replace("\r\n", "").replace("\r\n", "").replace("\r\n", "");
    });
    console.log("Solucion 1: " + CountQuestions(texto));
  }
});
function CountQuestions(grupos){
    let sum = 0;
    for (let k = 0; k < grupos.length; k++){
        let aRgrupo = grupos[k].split('');
        let temp = new Array();
        let j = 0;
        for (let i = 0; i < grupos[k].length; i++)
            if(temp.find(elemento => elemento == aRgrupo[i]) == null)
                temp[j++] = aRgrupo[i];
        sum +=  temp.length;
    }
    return sum;
}