const keyInput = document.querySelector('.keyInput');
const buttonSubm = document.querySelector('.buttonSubm');

buttonSubm.addEventListener('click', () => {
    // Add keyInput.value to localStorage as array of strings each time update is clicked
    let keyInputValue = keyInput.value;
    let keyInputValueArray = keyInputValue.split(',');
    localStorage.setItem('keyInputValueArray', JSON.stringify(keyInputValueArray));
  localStorage.setItem('Name', keyInput.value);
});
