var billAmount = parseInt(Math.random()*100);

function totalWithGratuity(percent){
  console.log(billAmount)
  var tip = billAmount * (percent / 100)
  console.log(tip)
  return billAmount + tip
}

console.log(totalWithGratuity(20));
