CREATE SCHEMA db_social_network;

CREATE TABLE users(
    id int AUTO_INCREMENT,
    username VARCHAR(32),
    name VARCHAR(64),
	PRIMARY KEY(id)
);

CREATE TABLE auth(
    id int AUTO_INCREMENT,
    username VARCHAR(32),
    password VARCHAR(64),
    PRIMARY KEY(id)
);

CREATE TABLE users_follows(
	user_from int,
    user_to int,
    UNIQUE i_from_to(user_from, user_to)
);

CREATE TABLE posts(
	id int AUTO_INCREMENT,
    text VARCHAR(32),
    author_id int NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO posts(text, author_id) VALUES ('Soy Paolo', 1);
INSERT INTO posts(text, author_id) VALUES ('Soy Yanpieer', 2);

SELECT * FROM users;
SELECT * FROM auth;
SELECT * FROM users_follows;
SELECT * FROM posts;

DELETE FROM `db_social_network`.`users` WHERE (`id` = '1');
DELETE FROM `db_social_network`.`auth` WHERE (`id` = '1');

DROP TABLE users;
DROP TABLE auth;