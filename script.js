function cleanPrevious() {
  const generatedLetter = document.querySelector('#carta-gerada');
  generatedLetter.innerHTML = '';
}

function getLetterInput() {
  let letter = document.querySelector('#carta-texto').value;
  letter = letter.split(' ');
  return letter;
}

function generateLetter() {
  cleanPrevious();
  const letter = getLetterInput();
  const generatedLetter = document.querySelector('#carta-gerada');
  for (let words = 0; words < letter.length; words += 1) {
    const span = document.createElement('span');
    span.innerText = `${letter[words]}`;
    generatedLetter.appendChild(span);
  }
}

function btnGenerateLetter() {
  const btnGenerate = document.querySelector('#criar-carta');
  btnGenerate.addEventListener('click', generateLetter);
}

btnGenerateLetter();
