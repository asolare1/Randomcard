/* eslint-disable */
import "bootstrap";
import "./style.css";


window.onload = () => {
  document.querySelector('.card').innerHTML = generaterandomsuit();
  document.querySelector('.numbers').innerHTML = generaterandomnumber();

};
  let generaterandomsuit = () => {
  let suit = ["♦","♥","♠","♣"];
  let indexsuits = Math.floor(Math.random() * suit.length);
  
  return suit[indexsuits];

};
let generaterandomnumber = () => {
  let numbers = ["A","2","3","4","6","7","8","9","J","Q","K"];
  let indexnumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexnumbers];
};

