sentence = prompt("Give me a sentece : ")
let reversed_sentence = "";

for (let i = 1; i < sentence.length+1; i++) {
    reversed_sentence += sentence[sentence.length - i]
}
document.write(reversed_sentence);