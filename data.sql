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

INSERT INTO users(id, username, name) VALUES ('123', 'miguelarmas', 'Miguel Armas Abt');
SELECT * FROM users;
SELECT * FROM auth;

DELETE FROM `db_social_network`.`users` WHERE (`id` = '125');

DROP TABLE users;
DROP TABLE auth;