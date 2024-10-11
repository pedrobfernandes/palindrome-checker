const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');
const outputParagraph = result.querySelector('p');

checkButton.addEventListener('click', () => {
    if (textInput.value.trim() === '') {
        alert('Please input a value');
        textInput.value = '';
        return;
    }

    const originalInput = textInput.value;
    const cleanInput = normalizeInput(textInput.value);
    result.classList.remove('hidden');

    if (cleanInput === cleanInput.split('').reverse().join('')) {
        outputParagraph.textContent = `${originalInput} is a palindrome.`;
    } else {
        outputParagraph.textContent = `${originalInput} is not a palindrome.`
    }

    textInput.value = '';
});

function normalizeInput(str) {
    return str.replace(/[^\w\s_-]+/g, '').replace(/[\s_-]+/g, '').trim().toLowerCase();
}
