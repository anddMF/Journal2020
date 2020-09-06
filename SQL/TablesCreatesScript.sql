CREATE TABLE SHARED_COUNTRY 
(	
	ID int IDENTITY(1,1) PRIMARY KEY,
	NAME_COUNTRY varchar(40) NOT NULL
);

CREATE TABLE JJ2020_TB_THEME 
(
	ID int IDENTITY(1,1) PRIMARY KEY,
	NAME_THEME varchar(20),
	COLOR_1 varchar(10) NOT NULL,
	COLOR_2 varchar(10) NOT NULL,
	COLOR_3 varchar(10),
	COLOR_4 varchar(10),
	COLOR_5 varchar(10)
);

CREATE TABLE JJ2020_TB_USER 
(
	ID int IDENTITY(1,1) PRIMARY KEY,
	ID_THEME int,
	ID_COUNTRY int,
	EMAIL varchar(250) NOT NULL,
	U_PASSWORD varchar(20) NOT NULL,
	NAME_USER varchar(60) NOT NULL,
	AGE date,
	ACTIVE bit NOT NULL,
	DT_CREATION datetime NOT NULL,
	URL_PHOTO varchar(250),
	FOREIGN KEY (ID_THEME) REFERENCES JJ2020_TB_THEME(ID),
	FOREIGN KEY (ID_COUNTRY) REFERENCES SHARED_COUNTRY(ID)
);

CREATE TABLE JJ2020_TB_NOTE 
(
	ID int IDENTITY(1,1) PRIMARY KEY,
	ID_USER int NOT NULL,
	ID_USER_SHARED int,
	TITLE varchar(60) NOT NULL,
	NOTE_TEXT varchar(MAX),
	ACTIVE bit NOT NULL,
	FAVORITE bit NOT NULL,
	TAG varchar(40),
	DT_CREATION datetime NOT NULL,
	DT_EDIT datetime NOT NULL,
	FOREIGN KEY (ID_USER) REFERENCES JJ2020_TB_USER(ID),
	FOREIGN KEY (ID_USER_SHARED) REFERENCES JJ2020_TB_USER(ID)
);