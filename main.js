let mevalar = ["olma","banan","gilos","shoftoli"]
console.log(mevalar);

let soz = prompt("Soz kirit");
let tanlov = +prompt("1) Arryning boshidan qoshish (unshift) \n 2) Arryning oxiridan qoshish (push) \n 3) Arryning boshidan jopish (shift) \n 4) Arryning oxiridan jopish (pop)");

if(tanlov == 1){
    mevalar.unshift(soz);
    console.log(mevalar);
}else if(tanlov == 2){
    mevalar.push(soz);
    console.log(mevalar);
}else if(tanlov == 3){
    mevalar.shift(soz);
    console.log(mevalar);
}else if(tanlov == 4){
    mevalar.pop(soz);
    console.log(mevalar);
}