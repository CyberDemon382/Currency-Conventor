#!/usr/bin/env node

import inquirer from "inquirer";

let conversion: ConversionRates = {
  PKR: {
    USD: 0.0036,
    GBP: 0.0028,
    PKR: 1
  },
  GBP: {
    USD: 1.27,
    GBP: 1,
    PKR: 353.19  
  },
  USD: {
    USD: 1,
    GBP: 0.79,
    PKR: 278.81,
  }
}

interface ConversionRates {
  [currency: string]: {
      [currency: string]: number;
  };
}
const takeCurrencyAnswers = await inquirer.prompt([{
  message: "Select The Base Currency",
  type: "list",
  name: "fromCurrency",
  choices: ["PKR", "GBP", "USD"]
},
{
  message: "Select The Target Currency",
  type: "list",
  name: "toCurrency",
  choices: ["PKR", "GBP", "USD"]
},
{
  message: "Enter Your Amount to be converted",
  type: "number",
  name: "amountToBeConverted"
}]);

const { fromCurrency, toCurrency, amountToBeConverted } = takeCurrencyAnswers;

const convertedAmount: number = amountToBeConverted * conversion[fromCurrency][toCurrency];

console.log(`\n${amountToBeConverted} ${fromCurrency} is equal to ${convertedAmount} ${toCurrency}\n`);
