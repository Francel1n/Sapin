const prompt = require("prompt-sync")();
Yop = prompt("Donne un chiffre !");

function sapin(n){
  let espace2;
  let espace = [" "];
  for (s=0;s<Yop;s++){
    espace[s]=[" "];
    espace2 = space.join("");

}
console.log(espace2+" +");
console.log(espace2+"/*\\");
  let tabStar = [];
  for (i=0;i<Yop;i++){
    espace2 = espace2.substring(0, espace2.length - 1);
    tabStar[i]="**"
    let stars = tabStar.join("");
    console.log(espace2+"/*"+stars+"\\");
  }

}
sapin(Yop);
