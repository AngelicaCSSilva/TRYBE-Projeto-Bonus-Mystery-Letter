const generatedLetter = document.querySelector('#carta-gerada');

function cleanPrevious() {
  generatedLetter.innerHTML = '';
}

function getLetterInput() {
  let letter = document.querySelector('#carta-texto').value;
  letter = letter.split(' ');
  return letter;
}

// ref.: https://stackoverflow.com/questions/10261986/how-to-detect-string-which-contains-only-spaces/50971250
function removeEmptySpaces() {
  const letter = document.querySelector('#carta-texto').value;
  if (!letter.replace(/\s/g, '').length) {
    console.log('false');
    return false;
  }
  console.log('rue');
  return true;
}

function generateLetter() {
  const letter = getLetterInput();
  for (let words = 0; words < letter.length; words += 1) {
    const span = document.createElement('span');
    span.innerText = `${letter[words]}`;
    generatedLetter.appendChild(span);
  }
}

function checkInput() {
  cleanPrevious();
  if (removeEmptySpaces()) {
    generateLetter();
  } else {
    generatedLetter.innerHTML = 'Por favor, digite o conteúdo da carta.';
  }
}

function btnGenerateLetter() {
  const btnGenerate = document.querySelector('#criar-carta');
  btnGenerate.addEventListener('click', checkInput);
}

btnGenerateLetter();
