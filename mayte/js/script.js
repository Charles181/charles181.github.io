import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const imageDisplay = document.getElementById('imageDisplay');
const valentineQuestion = document.getElementById('valentineQuestion');
const responseButtons = document.getElementById('responseButtons');
const link = document.getElementById('link');

let noClickCount = 0;
const imagePaths = [
    'images/image1.gif',
    'images/image2.gif',
    'images/image3.gif',
    'images/image4.gif',
    'images/image5.gif',
    'images/question.png',
    'images/image7.gif'
];
const noButtonTexts = [
    'No',
    'Segura?',
    'Porfavoor',
    "No me hagas esto :(",
    "Mi corazón :(",
    "Y si te convenzo?"
];

noButton.addEventListener('click', () => {
    if (noClickCount < noButtonTexts.length - 1) {
        noClickCount++;
        imageDisplay.src = imagePaths[noClickCount];
        const scaleFactor = 1 + noClickCount * 0.1;
        yesButton.style.transform = `scale(${scaleFactor})`;
        noButton.textContent = noButtonTexts[noClickCount];
    }
});

yesButton.addEventListener('click', () => {
    imageDisplay.src = imagePaths[imagePaths.length - 1];
    valentineQuestion.innerHTML = 'Yayyy!! :3 <br> Te Amo!!!';
    responseButtons.style.display = 'none';
    link.innerHTML = 'Ahora haz <a href="feliz_dia.html">click aquí para una sorpresa</a>'
    confetti();
});
