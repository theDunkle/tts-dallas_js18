//Map the array and return the values doubled.
var numbers = [1,2,3];
var doubleNumbers = numbers.map(function(number){
  return number*2;
});
console.log(doubleNumbers)
// Using map, create a new array that contains the 'height' property of each object.
//Assign this new array to the variable 'heights'.
//Don't forget to use the 'return' keyword in the function!
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];
var heights = images.map(function(image){
  return image.height;
})
console.log(heights);
// Using map, create a new array that contains the distance / time value from each trip.  In other words, the new array should contain the (distance / time) value.  Assign the result to the variable 'speeds'.
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];
var speeds = trips.map(function(trip){
  return trip.distance/trip.time +" mph";
})
console.log(speeds);
