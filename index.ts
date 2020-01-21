// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

const isPalindrome = input => {
  const len =  (input || '').length;
  const isNotPalindrome = (input || '')
    .toLowerCase()
    .split('')
    .some((val, index, array) => {
      if((index +1) > len/2) {
        return false;
      }
      if(val === array[len-index]){
        return false;
      } else {
        return true;
      }
    })

    return !isNotPalindrome;
}

console.log(isPalindrome('ono'));

appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;