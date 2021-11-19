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
    var suma = 0;
    for (var k = 0; k < grupos.length; k++){
        var aRgrupo = grupos[k].split('');
        var temp = new Array();
        var j = 0;
        for (var i = 0; i < grupos[k].length; i++)
            if(temp.find(elemento => elemento == aRgrupo[i]) == null)
                temp[j++] = aRgrupo[i];
        suma = suma + temp.length;
    }
    return suma;
}