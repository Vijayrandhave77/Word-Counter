let inputtext = document.querySelector("#text");
let character = document.querySelector("#ch");
let word = document.querySelector("#wo");

inputtext.addEventListener("input", (input) => {

    // character count code.........

  let cha = inputtext.value.trim();
  character.innerHTML = cha.length;

    // word count code........

    let words = inputtext.value.trim();
    let arrword = words.split(" ");
    word.innerHTML = arrword.length;

});
