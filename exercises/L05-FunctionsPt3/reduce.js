//Use the 'reduce' helper to find the sum of all the distances traveled.  Assign the result to the variable 'totalDistance'
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(sum, trip){
  return sum += trip.distance;
}, 0)
console.log(totalDistance);

/// Write a reduce function that pushes the name values into a new array -> names = ["Bob", "Eric"];
var people = [
    {name: "Bob", age: 31},
    {name: "Eric", age: 27}
]

var names = people.reduce(function(counter, person){
  counter.push(person.name)
  return counter
},[])
console.log(names);

//Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  The object returned should have the form '{ sitting: 3, standing: 2 }'.  The initial value has been provided to you.
//Hint: Don't forget to return the accumulator object (the first argument to the iterator function)
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];
var tally = desks.reduce(function(type, desk){
  if (desk.type === 'sitting') { type.sitting += 1; }
  if (desk.type === 'standing') { type.standing += 1; }
  return type
},{sitting:0,standing:0})
console.log(tally)
// Write a function called 'unique' that will remove all the duplicate values from an array.
var numbers = [1, 1, 2, 3, 4, 4];

var unique = function(number){
  number.reduce()
}
