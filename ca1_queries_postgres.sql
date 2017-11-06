-- 1. Getting Started --
CREATE DATABASE bigdata_ca1_sean_brennan;
-- 2. Insert Data --
create table movies(id SERIAL PRIMARY KEY, title varchar, writer varchar, year int, frachise varchar, synopsis text);
insert into movies(title, writer, year) VALUES ('Fight Club', 'Chuck Palahnuk', 1999);
insert into movies(title, writer, year) VALUES ('Pulp Fiction', 'Quentin Tarantion', 1994);
insert into movies(title, writer, year) VALUES ('Inglorious Basterds ', 'Quentin Tarantino ', 2009);
insert into movies(title, writer, year, franchise) VALUES ('The Hobbit: An Unexpected Journey', 'J.R.R. Tolkein', 2012, 'The Hobbit');
insert into movies(title, writer, year, franchise) VALUES ('The Hobbit: The Desolation of Smaug ', 'J.R.R. Tolkein', 2013, 'The Hobbit');
insert into movies(title, writer, year, franchise, synopsis) VALUES ('The Hobbit: The Battle of the Five Armies', 'J.R.R. Tolkein', 2012, 'The Hobbit', 'Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.');
insert into movies(title) values ('Pee Wee Herman''s Big Adventure');
insert into movies(title) values ('Avatar'); 

create table actors(id SERIAL PRIMARY KEY, name varchar);
insert into actors(name) values ('Brad Pitt');
insert into actors(name) values ('Edward Norton');
insert into actors(name) values ('John Travolta');
insert into actors(name) values ('Uma Thurman');
insert into actors(name) values ('Diane Kruger');
insert into actors(name) values ('Eli Roth');

create table movies_actors(movie_id int, actor_id int);
insert into movies_actors(movie_id, actor_id) values (1, 1);
insert into movies_actors(movie_id, actor_id) values (1, 2);
insert into movies_actors(movie_id, actor_id) values (2, 3);
insert into movies_actors(movie_id, actor_id) values (2, 4);
insert into movies_actors(movie_id, actor_id) values (3, 1);
insert into movies_actors(movie_id, actor_id) values (3, 5);
insert into movies_actors(movie_id, actor_id) values (3, 6);

-- select * FROM actors a,movies m, movies_actors ma WHERE m.id = ma.movie_id AND a.id = ma.actor_id;--

-- 3. Query / Find Documents --
-- Get all documents --
select a.name, m.title, m.writer,m.year,m.franchise, m.synopsis from movies m left outer join movies_actors ma on m.id = ma.movie_id left outer join actors a on a.id = ma.actor_id;
-- Get all documents with `writer` set to "Quentin Tarantino" --
select * from movies where writer = 'Quentin Tarantino';
-- Get all documents where `actors` include "Brad Pitt" --
select a.name, m.title, m.writer,m.year,m.franchise, m.synopsis from movies m left outer join movies_actors ma on m.id = ma.movie_id left outer join actors a on a.id = ma.actor_id where a.name = 'Brad Pitt';
-- Get all documents with `franchise` set to "The Hobbit" --
select * from movies where franchise = 'The Hobbit';
-- Get all movies released in the 90s  --
select * from movies where year > 1990 and year < 2000;
-- Get all movies released before the year 2000 or after 2010 --
select * from movies where year < 2000 or year > 2010;
-- 4.Update documents --
-- 1 --
update movies set synopsis = 'A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug.' where id = 4;
-- 2 --
update movies set synopsis = 'The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.' where id = 5;
-- 3 --
insert into actors(name) values ('Samuel L. Jackson');
insert into movies_actors(movie_id, actor_id) values (2, 7);
-- 5. Text Search --
-- Find all movies that have a synopsis that contains the word "Bilbo"  --
select * from movies where synopsis like '%Bilbo%'; 
-- Find all movies that have a synopsis that contains the word "Gandalf"  --
select * from movies where synopsis like '%Gandalf%'; 
-- Find all movies that have a synopsis that contains the word "Bilbo" and not the word "Gandalf" --
select * from movies where synopsis ilike '%Bilbao%' not ilike '%Gandalf%'; 
-- Find all movies that have a synopsis that contains the word "dwarves" or "hobbit" --

-- Find all movies that have a synopsis that contains the word "gold" and "dragon" --


-- 6. Delete Documents --
-- Delete the movie "Pee Wee Herman's Big Adventure" --
delete from movies where title = 'Pee Wee Herman''s Big Adventure';
-- Delete the movie "Avatar" --
delete from movies where title = 'Avatar';

-- 7. Relationships --
create table posts(id SERIAL PRIMARY KEY, username text, title text, body text);
insert into posts(username, title, body) VALUES ('GoodGuyGreg', 'Passes out at party', 'Wakes up early and cleans house');
insert into posts(username, title, body) VALUES ('GoodGuyGreg', 'Steals your identity', 'Raises your credit score');
insert into posts(username, title, body) VALUES ('GoodGuyGreg', 'Reports a bug in your code', 'Sends you a Pull Request');
insert into posts(username, title, body) VALUES ('ScumbagSteve', 'Borrows something', 'Sells it');
insert into posts(username, title, body) VALUES ('ScumbagSteve', 'Borrows everything', 'The end');
insert into posts(username, title, body) VALUES ('ScumbagSteve', 'Forks your repo on github', 'Sets to private');

create table comments(id SERIAL PRIMARY KEY, username text, comment text, post int);
insert into comments(username, comment, post) VALUES ('GoodGuyGreg', 'Hope you got a good deal!', );
insert into comments(username, comment, post) VALUES ('GoodGuyGreg', 'What''s mine is yours!', );
insert into comments(username, comment, post) VALUES ('GoodGuyGreg', 'Don''t violate the licensing agreement!', );
insert into comments(username, comment, post) VALUES ('ScumbagSteve', 'It still isn''t clean', );
insert into comments(username, comment, post) VALUES ('ScumbagSteve', 'Denied your PR cause I found a hack', );

-- 8. Querying related collections --
-- Find all users --

-- Find all posts --

-- Find all posts that was authored by "GoodGuyGreg" --

-- Find all posts that was authored by "ScumbagSteve" --

-- Find all comments --

-- Find all comments that was authored by "GoodGuyGreg" --









 


 
--select a.name,m.title,m.writer,m.year,m.franchise from movies m left outer join movies_actors ma on m.id = ma.movie_id left outer join actors a on a.id ma.actor_id;--