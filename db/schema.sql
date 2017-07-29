CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE `burgers` (

  -- TABLE CODE TO GO HERE
  id INTEGER(10) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN NOT NULL DEFAULT 0,
  date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);