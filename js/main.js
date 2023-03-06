"use strict";

//FUNCTIONS

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function MyCreateRandom(arrayLenght, min, max){
    const numList = [];

    while (numList.length < arrayLenght) {
        const listNumber = getRndInteger(min, max);

        if (!numList.includes(listNumber)) {
            numList.push(listNumber);
        }
    }
    return numList;

}



//MAIN

const nLength = 5;
const nMax = 100;
const timeToSee = 5;

const RandomNumList = MyCreateRandom(nLength, 1, nMax);

const printList = document.getElementById('random-numbers');

printList.innerHTML = RandomNumList;

setTimeout(function(){
    printList.innerHTML = '';
}, timeToSee * 1000);