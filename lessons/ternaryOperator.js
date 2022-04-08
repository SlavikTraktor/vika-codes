const money = 100;
const cost = 50;
money >=cost ? console.log('you can buy it.') : console.log('you can not buy it')
const canYouBuyIt = money >=cost ? 'you can buy it.': 'you can not buy it';
console.log(canYouBuyIt)

console.log(`you can${money >=cost? ' ' : 'not'}buy it.`)