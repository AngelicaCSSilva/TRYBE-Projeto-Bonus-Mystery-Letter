const generatedLetter = document.querySelector('#carta-gerada');
const styles = ['newspaper', 'magazine1', 'magazine2'];
const sizes = ['medium', 'big', 'reallybig'];
const rotation = ['rotateleft', 'rotateright'];
const inclination = ['skewleft', 'skewright'];

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
    return false;
  }
  return true;
}

function getStylesToUse() {
  const rndOne = Math.floor(Math.random() * 3);
  const rndTwo = Math.floor(Math.random() * 3);
  const rndThree = Math.floor(Math.random() * 2);
  const rndFour = Math.floor(Math.random() * 2);
  return `${styles[rndOne]} ${sizes[rndTwo]} ${rotation[rndThree]} ${inclination[rndFour]}`;
}

function alternateStyle(event) {
  const targetAlternate = event.target;
  targetAlternate.className = getStylesToUse();
}

function generateLetter() {
  const letter = getLetterInput();
  for (let words = 0; words < letter.length; words += 1) {
    const span = document.createElement('span');
    span.innerText = `${letter[words]}`;
    span.className = getStylesToUse();
    span.addEventListener('click', alternateStyle);
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
