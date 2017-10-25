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
db.movies.find({$or: [{year:{$lt: 2000}},{year: {$gt: 1989}}]}).pretty(); //Not Working
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

//Find all movies that have a synopsis that contains the word "Gandalf" 

//Find all movies that have a synopsis that contains the word "Bilbo" and not the word "Gandalf" 

//Find all movies that have a synopsis that contains the word "dwarves" or "hobbit" 

//Find all movies that have a synopsis that contains the word "gold" and "dragon"

//6. Delete Documents
//Delete the movie "Pee Wee Herman's Big Adventure"

//Delete the movie "Avatar"

//7. Relationships

//8. Querying related collections
//Find all users

//Find all posts

//Find all posts that was authored by "GoodGuyGreg"

//Find all posts that was authored by "ScumbagSteve"

//Find all comments

//Find all comments that was authored by "GoodGuyGreg"

//Find all comments that was authored by "ScumbagSteve"

//Find all comments belonging to the post "Reports a bug in your code"
