/* eslint-disable */
import "bootstrap";
import "./style.css";


window.onload = () => {
  document.querySelector('.suits').innerHTML = generaterandomsuit();
  document.querySelector('.numbers').innerHTML = generaterandomnumber();
  document.querySelector('.suits2').innerHTML = document.querySelector('.suits').innerHTML = generaterandomsuit();
  
  


};
  let generaterandomsuit = () => {

  let suits = ["<p>♦️</p>","<p>♥</p>","♠","♣"];

  let indexsuits = Math.floor(Math.random() * suits.length);

  return suits[indexsuits];

  
  };



let generaterandomnumber = () => {
  let numbers = ["A","2","3","4","6","7","8","9","J","Q","K"];
  let indexnumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexnumbers];
};

