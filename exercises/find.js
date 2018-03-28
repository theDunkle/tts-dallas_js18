//Find the user in the users's array who is an admin.  Assign this user to the variable 'admin'.
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function(user){
  return user.admin
})
console.log(admin)

//Find the account with a balance of 12 and assign it to the variable 'account'.
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(function(account){
  return account.balance === 12;
})
console.log(account);

//Your goal: Write a 'findWhere' function returns the found object.
// findWhere(ladders, { height: 25 }); // result: { id:3, height: 25 }
//Hint: the hard part of this is figuring out the name of the proeprty on the criteria.
//You can use Object.keys(criteria)[0] to figure out the name of the property on the object.  For example, Object.keys({ height: '20 feet' }) would return 'height'.  You could then check to see if a given element in the array had a property equal to the criteria's value with something like element[property] === criteria[property].
var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

function findWhere(array, criteria){

}
console.log(findWhere(ladders, { height: 25 });)
