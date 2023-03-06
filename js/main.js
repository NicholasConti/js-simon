"use strict";

//FUNCTIONS

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function MyCreateRandom(arrayLength, min, max){
    const numList = [];

    while (numList.length < arrayLength) {
        const listNumber = getRndInteger(min, max);

        if (!numList.includes(listNumber)) {
            numList.push(listNumber);
        }
    }
    return numList;
}

function showPrompt(arrayPromptLength, min, max){
    let inputsUser = [];
    while (inputsUser.length < arrayPromptLength){
        const inputNumber = Number(prompt(`Inserisci un numero da ${min} a ${max}`));
        if ((!inputsUser.includes(inputNumber)) && (inputNumber <= max)){
            inputsUser.push(inputNumber);
        }
    }
    return inputsUser;
}

function checkLists(arrayUser, arrayRandom, arrayLength, htmlElement){
    let sameNum = [];
    for (let i = 0; i < arrayLength; i++){
        if(arrayRandom.includes(arrayUser[i])){
            sameNum.push(arrayUser[i]);
        }
    }
    htmlElement.innerHTML = `Hai indovinato ${sameNum.length} numeri. I numeri che hai indovinato sono: ${sameNum}`
}
//MAIN

const nLength = 5;
const nMax = 100;
const timeToSee = 5;
const timeToSee2 = timeToSee + 1;

const RandomNumList = MyCreateRandom(nLength, 1, nMax);

const printList = document.getElementById('random-numbers');

printList.innerHTML = RandomNumList;

setTimeout(function(){
    printList.innerHTML = '';
}, timeToSee * 1000);

setTimeout(function(){
    const userList = showPrompt(nLength, 1, nMax);
    checkLists(userList, RandomNumList, nLength, printList);
}, timeToSee2 * 1000);


