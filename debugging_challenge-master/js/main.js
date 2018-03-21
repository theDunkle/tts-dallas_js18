var woolOwners = [
  {
      "master": 1
  },
  {
    "dame": 1
  },
  {
    "little boy": 1,
    "location": "down the lane"
  }
];

var haveYouAnyWool = function() {
    var totalBags = 0;
    for (var i = 0; i < woolOwners.length; i++) {
    totalBags = totalBags + i;
    }
    return (totalBags);
};

var bags = haveYouAnyWool();

function baabaaBlackSheep(totalBags) {
    console.log("BaaBaa BlackSheep have you any wool?");
    if (totalBags > 0) {
        console.log("yes sir, yes sir " + totalBags + " bags full");
  }
}

function oneForMy() {
    for (var i = 0; i < 2; i++) {
        people = Object.keys(woolOwners[i]);
        var person = people.toString();
        console.log("one for my " + person);
    }
}

baabaaBlackSheep(bags);
oneForMy();

var boy = Object.keys(woolOwners[2]);
var littleBoy = boy[0];
var whereHeLives = woolOwners[2][boy[1]];

console.log("one for the " + littleBoy + " that lives " + whereHeLives);
