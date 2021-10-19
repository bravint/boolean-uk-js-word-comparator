/*ORIGINAL EXERCISE

const word1 = prompt("enter the first word for comaprison");
const word2 = prompt("enter the second word for comaprison");

const w1l = word1.length;
const w2l = word2.length;

if (w1l > w2l) {
    alert(word1 ` is longer`)
} else {
    alert(word2 ` is longer`)
}


/*FIRST CHALLENGE - display words compared in alert

if (w1l > w2l) {
    alert(word1+ ` is longer than ` +word2)
} else {
    alert(word2+ ` is longer than ` +word1)
}

*/

/*SECOND CHALLENGE - count non space characters and display sentences compared in alert*/

const sentence1 = prompt("enter the first sentence for comaprison");
const sentence2 = prompt("enter the second sentence for comaprison");

const ws1 = (sentence1.split(' ').length -1);
const ws2 = (sentence2.split(' ').length -1);

/*next line for debug/check only*/
console.log(ws1);

let cc1 = sentence1.length - ws1;
let cc2 = sentence2.length - ws2;

if (cc1 > cc2) {
    alert(`Sentence 1 has ` +cc1+ ` characters making it longer than sentence 2 which has ` + cc2 + ` characters.`)
} else if (cc2 > cc1) {
    alert(`Sentence 2 has ` +cc2+ ` characters making it longer than sentence 1 which has ` + cc1 + ` characters.`)
} else {
    alert(`Both sentences have ` +cc1+ ` characters.`)
}