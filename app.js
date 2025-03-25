'use strict';

// Pseudo code:

// Create a basic can you guess the game minigame using mostly Javascript, while relying on chatGPT as less as possible. This project will be akin to the guess the number game therefore it shouldn't be too demanding...

// Steps:

// 1. Connect the HTML and Javascript. Particularly the container and the result and the accessible button and select that the user would be able to choose of which we will inject javascript into therefore making them dynamic.

// 2. Set it up where as when the user clicks the button the choice appears and then the user would be able to select it. Set the select as display none initially and then make display block once the user has clicked the button.

// 3. Create a phrase generating function, using an array of phrases similar to how we've done the previous project however this time we will use an array.

// 4. Create a function that is determining if the player has gotten it correctly or not and display the appropriate, witty remark.

// (Optional) 5. Customize this entire project with CSS to your heart's content. This shall be the easiest and most enjoyable part of this exercise. 


const container = document.querySelector('.phrase-container');
const resultDisplay = document.querySelector('.result');
const choiceButton = document.querySelector('button');
const selectedChoice = document.querySelector('Select');


const generatePhrase = () => {
    const phrases = [
        'Fortune Favors The Bold',
        `Humans Are Nature's Playthings`,
        'Old Habits Die Hard',
        'Two Birds One Stone',
        'No Guts No Glory'
    ];
    const phraseIndex = Math.floor(Math.random() * phrases.length);
    return phrases[phraseIndex];
};

let currentPhrase = generatePhrase();

function activateChoice() {
    selectedChoice.style.display = 'none';
    choiceButton.addEventListener('click', () => {
        selectedChoice.style.display = 'block';
    });
    container.textContent = currentPhrase;
    console.log(container.textContent);
}

activateChoice();


const isPlayerCorrect = (currentPhrase) => {
    const playerChoice = selectedChoice.value;
    if (playerChoice === currentPhrase) {
        resultDisplay.textContent = `You are correct, congratulations! How lucky!`;
        resetPhrase();
    } else {
        resultDisplay.textContent = `You are unfortunately dead wrong! Try again!`;
    }
};

selectedChoice.addEventListener('change', () => {
    const displayPhrase = container.textContent;
    isPlayerCorrect(displayPhrase);
});

function resetPhrase() {
    setTimeout(() => {
        selectedChoice.style.display = 'none';
        resultDisplay.textContent = '';
        currentPhrase = generatePhrase();
        container.textContent = currentPhrase;
        selectedChoice.value = '';
        console.log(currentPhrase);
    }, 2000);
}