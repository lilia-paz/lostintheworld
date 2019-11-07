-- database setup instructions --

--create user table --> collecting first name and last name on registration
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (50) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "first_name" VARCHAR (80) NOT NULL,
    "last_name" VARCHAR (80) NOT NULL
);


--create favorites table --> holds each starred location with a reference to the user
CREATE TABLE "places" (
	"id" SERIAL PRIMARY KEY,
	"artwork_name" VARCHAR (80) NOT NULL,
	"artist_name" VARCHAR (80) NOT NULL
);

CREATE TABLE "favorite" (
    "places_id" INT NOT NULL REFERENCES 
	"user_id" INT NOT NULL REFERENCES "user" ON DELETE CASCADE
);
-- journal table?

-- end database setup instructions --