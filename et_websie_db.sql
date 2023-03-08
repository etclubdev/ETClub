DROP DATABASE IF EXISTS etclub_website_db;
CREATE DATABASE etclub_website_db;
USE etclub_website_db;
CREATE TABLE feeling (
  id INT NOT NULL AUTO_INCREMENT,
  quote TEXT NOT NULL,
  author VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE basic_info (
  operating_year INT NOT NULL,
  media_channel INT NOT NULL,
  workshop_talkshow INT NOT NULL
);

CREATE TABLE et_news (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  tiny_dest TEXT NOT NULL,
  full_news TEXT NOT NULL,
  view INT NOT NULL,
  create_time DATETIME NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE competition (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  status VARCHAR(255) NOT NULL,
  landscape_poster TEXT,
  portrait_poster TEXT,
  lookback_script TEXT,
  lookback_img TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE milestone (
  id INT NOT NULL AUTO_INCREMENT,
  competition_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (competition_id) REFERENCES competition(id)
);

CREATE TABLE competition_result (
  id INT NOT NULL AUTO_INCREMENT,
  competition_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  major VARCHAR(255) NOT NULL,
  academic_year VARCHAR(255) NOT NULL,
  team VARCHAR(255),
  rank INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (competition_id) REFERENCES competition(id)
);

CREATE TABLE sponsor (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  logo TEXT NOT NULL,
  kind VARCHAR(255) NOT NULL,
  competition_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (competition_id) REFERENCES competition(id)
);
CREATE TABLE banner (
stt INT NOT NULL AUTO_INCREMENT,
description TEXT NOT NULL,
img TEXT NOT NULL,
link TEXT NOT NULL,
PRIMARY KEY (stt)
)
