const nameTag = document.getElementById('name');
const userInput = document.getElementById('text-input');
const userButton = document.getElementById('name-change');
const pinkButton = document.getElementById('pink');
const lightblueButton = document.getElementById('lightgreen');
const lightgreenButton = document.getElementById('lightblue');


userButton.addEventListener('click', () => {
    const myInput = userInput.value;
    console.log(myInput);
    nameTag.textContent = myInput;

} )
pinkButton.addEventListener('click', () => {
    document.getElementById('nametag-main').style.backgroundColor="pink";

} )
lightblueButton.addEventListener('click', () => {
    document.getElementById('nametag-main').style.backgroundColor="lightblue";

} )
lightgreenButton.addEventListener('click', () => {
    document.getElementById('nametag-main').style.backgroundColor="lightgreen";

} )
