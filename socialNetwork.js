var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

//List everyone and for each of them, list the names of who they follow and who follows them
var friendList = function (data){
  output = {}

  //the below code creates objects for each person in the social network
  for (friend in data){
    var name = (data[friend]['name'])
    output[name] = {}

    //below code adds followers
    var friendIdArray = data[friend]['follows']
    var followersNames = []

    var theyFollow = []
    output[name]['followedBy'] = []

    for (i = 0; i < friendIdArray.length; i++){

      //follows
      var userId = friendIdArray[i]
      var nameOfFollower = data[userId]['name']
      followersNames.push(nameOfFollower)
      //follows



    }
    output[name]['follows'] = followersNames
  }
  console.log(output)
}

friendList(data)

//