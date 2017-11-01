//1. Getting Started
use bigdata_ca1_sean_brennan;
//2. Insert Data
db.movies.insert({title:"Fight Club", writer:"Chuck Palahniuk", year:1999, actors:["Brad Pitt", "Edward Norton"]});
db.movies.insert({title:"Pulp Fiction", writer:"Quentin Tarantino", year:1994, actors:["John Travolta", "Uma Thurman"]});
db.movies.insert({title:"Inglorious Bastards", writer:"Quentin Tarantino", year:2009, actors:["Brad Pitt", "Diane Kruger", "Eli Roth"]});
db.movies.insert({title:"The Hobbit: An Unexpected Journey", writer:"J.R.R. Tolkein", year:2012,  franchise:"The Hobbit"});
db.movies.insert({title:"The Hobbit: The Desolation of Smaug", writer:"J.R.R. Tolkein", year:2013,  franchise:"The Hobbit"});
db.movies.insert({title:"The Hobbit: The Battle of the Five Armies", writer:"J.R.R. Tolkein", year:2012, franchise:"The Hobbit", synopsis:"Bilbo and Company are forced to engage in a war against an array of cambatants and keep the Lonely Moutain from falling into the hands of a rising darkness."});
db.movies.insert({title:"Pee Wee Herman's Big Adventure"});
db.movies.insert({title:"Avatar"});
//3. Query / Find Documents
//Get all documents
db.movies.find().pretty();
//Get all documents with `writer` set to "Quentin Tarantino" 
db.movies.find({writer: "Quentin Tarantino"}).pretty();
//Get all documents where `actors` include "Brad Pitt"
db.movies.find({actors: "Brad Pitt"}).pretty();
//Get all documents with `franchise` set to "The Hobbit" 
db.movies.find({franchise: "The Hobbit"}).pretty();
//Get all movies released in the 90s 
db.movies.find({$and: [{year:{$lt: 2000}},{year: {$gt: 1989}}]}).pretty();
//Get all movies released before the year 2000 or after 2010
db.movies.find({$or: [{year:{$lt: 2000}},{year: {$gt: 2009}}]}).pretty();
//4.Update documents
//1
db.movies.update({title:"The Hobbit: An Unexpected Journey"}, {$set:{synopsis:"A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."}});
//2
db.movies.update({title:"The Hobbit: The Desolation of Smaug"}, {$set:{synopsis:"The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring." }});
//3
db.movies.update({title:"Pulp Fiction"}, {$push:{actors:"Samuel L. Jackson"}});
//5. Text Search
//Find all movies that have a synopsis that contains the word "Bilbo" 
db.movies.find({synopsis: /Bilbo/}).pretty();
//Find all movies that have a synopsis that contains the word "Gandalf" 
db.movies.find({synopsis: /Gandalf/}).pretty();
//Find all movies that have a synopsis that contains the word "Bilbo" and not the word "Gandalf" 
db.movies.find({$and:[{synopsis: /Bilbo/}, {synopsis: {$not: /Gandalf/}}]}).pretty();
//Find all movies that have a synopsis that contains the word "dwarves" or "hobbit" 
db.movies.find({$or:[{synopsis: /dwarves/}, {synopsis: /Gandalf/}]}).pretty();
//Find all movies that have a synopsis that contains the word "gold" and "dragon"
db.movies.find({$and:[{synopsis: /gold/}, {synopsis: /dragon/}]}).pretty();
//6. Delete Documents
//Delete the movie "Pee Wee Herman's Big Adventure"
db.movies.remove({title: "Pee Wee Herman's Big Adventure"});
//Delete the movie "Avatar"
db.movies.remove({title: "Avatar"});
//7. Relationships
db.users.insert({username: "GoodGuyGreg", first_name: "Good Guy", last_name: "Greg"});
db.users.insert({username: "ScumbagSteve", fullname: {first: "Scumbag", last: "Steve"}});
//Function wrote to run these an put them into a posts collection
newPost("GoodGuyGreg", "Passes out at party", "Wakes up early and cleans house");
newPost("GoodGuyGreg", "Steals your identity ", "Raises your credit score");
newPost("GoodGuyGreg", "Reports a bug in your code", "Sends you a Pull Request");

newPost("ScumbagSteve", "Borrows something", "Sells it");
newPost("ScumbagSteve", "Borrows everything", "The end");
newPost("ScumbagSteve", "Forks your repo on github ", "Sets to private");
//Function wrote to run these an put them into a comments collection
newComment("GoodGuyGreg", "Hope you had a good deal", "59f9ab2c26139d2dbc60186c");
newComment("GoodGuyGreg", "What's mine is yours!" , "59f9ab3e26139d2dbc60186d");
newComment("GoodGuyGreg", "Don't violate the licensing agreement!"  , "59f9ab4526139d2dbc60186e");

newComment("ScumbagSteve", "It still isn't clean"  , "59f9aaea26139d2dbc601869");
newComment("ScumbagSteve", "Denied your PR cause I found a hack"  , "59f9ab0326139d2dbc60186b");
//8. Querying related collections
//Find all users
db.users.find().pretty();
//Find all posts
db.posts.find().pretty();
//Find all posts that was authored by "GoodGuyGreg"
db.posts.find({username: "GoodGuyGreg"}).pretty();
//Find all posts that was authored by "ScumbagSteve"
db.posts.find({username: "ScumbagSteve"}).pretty();
//Find all comments
db.comments.find().pretty();
//Find all comments that was authored by "GoodGuyGreg"
db.comments.find({username: "GoodGuyGreg"}).pretty();
//Find all comments that was authored by "ScumbagSteve"
db.comments.find({username: "ScumbagSteve"}).pretty();
//Find all comments belonging to the post "Reports a bug in your code"
db.comments.find({post: "59f9ab0326139d2dbc60186b"}).pretty();