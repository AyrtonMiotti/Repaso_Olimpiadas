DROP DATABASE if exists RepasOl;
CREATE DATABASE if not exists RepasOl;
USE RepasOl;

CREATE TABLE if not exists Users(
    id_user = INT AUTO_INCREMENT,
    nameUser = VARCHAR(30),
    passwor = VARCHAR(30),
    PRIMARY KEY (id_user);
)