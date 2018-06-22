USE ulysses_db;

DROP TABLE IF EXISTS guests;

CREATE TABLE guests (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL DEFAULT 'Guest',
	age TINYINT,
	PRIMARY KEY(id)
);