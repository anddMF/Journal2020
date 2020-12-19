CREATE DATABASE  IF NOT EXISTS `develop2020` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `develop2020`;
-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: develop2020
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `jj2020_tb_note`
--

DROP TABLE IF EXISTS `jj2020_tb_note`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jj2020_tb_note` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `ID_USER` int NOT NULL,
  `ID_USER_SHARED` int DEFAULT NULL,
  `TITLE` varchar(60) NOT NULL,
  `NOTE_TEXT` varchar(16000) DEFAULT NULL,
  `ACTIVE` bit(1) NOT NULL,
  `FAVORITE` bit(1) NOT NULL,
  `TAG` varchar(40) DEFAULT NULL,
  `DT_CREATION` datetime NOT NULL,
  `DT_EDIT` datetime NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `ID_USER` (`ID_USER`),
  KEY `ID_USER_SHARED` (`ID_USER_SHARED`),
  CONSTRAINT `jj2020_tb_note_ibfk_1` FOREIGN KEY (`ID_USER`) REFERENCES `jj2020_tb_user` (`ID`),
  CONSTRAINT `jj2020_tb_note_ibfk_2` FOREIGN KEY (`ID_USER_SHARED`) REFERENCES `jj2020_tb_user` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jj2020_tb_note`
--

LOCK TABLES `jj2020_tb_note` WRITE;
/*!40000 ALTER TABLE `jj2020_tb_note` DISABLE KEYS */;
INSERT INTO `jj2020_tb_note` VALUES (1,3,NULL,'Titulo de teste 2','<b>TESTETESTE mais um</b>',_binary '',_binary '\0','','2020-09-06 14:40:01','2020-09-13 08:59:24'),(2,3,NULL,'Anotação teste','TESTE 23434',_binary '',_binary '','teste; daily;','2020-09-06 14:41:28','2020-12-06 09:02:39'),(3,4,3,'Anotação teste','<b>TESTE 1</b>',_binary '',_binary '','work;','2020-09-06 14:45:35','2020-09-06 14:45:35'),(5,4,3,'POST API',NULL,_binary '',_binary '\0',NULL,'2020-09-07 16:05:37','2020-09-07 16:05:37'),(6,4,NULL,'string','',_binary '\0',_binary '\0','string; tag;','2020-09-07 16:22:56','2020-09-07 13:38:16'),(7,3,4,'Lorem','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem molestiae nobis, aspernatur velit asperiores quibusdam perspiciatis facilis obcaecati placeat ducimus dolore commodi sapiente voluptate blanditiis illo harum, ea voluptas ullam!',_binary '',_binary '\0','daily;','2020-09-13 11:35:20','2020-09-13 11:35:20'),(8,3,NULL,'545asd as','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem molestiae nobis, aspernatur velit asperiores quibusdam perspiciatis facilis obcaecati placeat ducimus dolore commodi sapiente voluptate blanditiis illo harum, ea voluptas ullam!',_binary '',_binary '','daily;','2020-09-13 11:36:34','2020-09-13 11:36:34'),(9,3,NULL,'545asd as','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem molestiae nobis, aspernatur velit asperiores quibusdam perspiciatis facilis obcaecati placeat ducimus dolore commodi sapiente voluptate blanditiis illo harum, ea voluptas ullam! harum, ea voluptas ullam! harum, ea voluptas ullam! harum, ea voluptas ullam!',_binary '',_binary '','daily;','2020-09-13 11:37:06','2020-09-13 11:37:06'),(10,3,NULL,'Titulo de teste 2','',_binary '',_binary '\0','','2020-09-13 12:17:30','2020-09-13 12:17:30'),(11,3,NULL,'Teste vindo do angular','hoje o dia começou...',_binary '',_binary '',NULL,'2020-09-13 13:41:08','2020-09-13 13:41:08'),(12,3,NULL,'Nova angular','testestes',_binary '',_binary '\0',NULL,'2020-09-13 13:42:53','2020-09-13 13:42:53'),(13,3,NULL,'Nota modal','hoje o dia começou... adsdasdasd',_binary '',_binary '\0',NULL,'2020-09-22 19:51:02','2020-09-22 19:51:02'),(14,3,NULL,'Modal fav','favfavfav',_binary '',_binary '',NULL,'2020-09-22 20:05:12','2020-09-22 20:05:12');
/*!40000 ALTER TABLE `jj2020_tb_note` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jj2020_tb_theme`
--

DROP TABLE IF EXISTS `jj2020_tb_theme`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jj2020_tb_theme` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `NAME_THEME` varchar(20) DEFAULT NULL,
  `COLOR_1` varchar(10) NOT NULL,
  `COLOR_2` varchar(10) NOT NULL,
  `COLOR_3` varchar(10) DEFAULT NULL,
  `COLOR_4` varchar(10) DEFAULT NULL,
  `COLOR_5` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jj2020_tb_theme`
--

LOCK TABLES `jj2020_tb_theme` WRITE;
/*!40000 ALTER TABLE `jj2020_tb_theme` DISABLE KEYS */;
/*!40000 ALTER TABLE `jj2020_tb_theme` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jj2020_tb_user`
--

DROP TABLE IF EXISTS `jj2020_tb_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jj2020_tb_user` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `ID_THEME` int DEFAULT NULL,
  `ID_COUNTRY` int DEFAULT NULL,
  `EMAIL` varchar(250) NOT NULL,
  `U_PASSWORD` varchar(20) NOT NULL,
  `NAME_USER` varchar(60) NOT NULL,
  `AGE` date DEFAULT NULL,
  `ACTIVE` bit(1) NOT NULL,
  `DT_CREATION` datetime NOT NULL,
  `URL_PHOTO` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `ID_THEME` (`ID_THEME`),
  KEY `ID_COUNTRY` (`ID_COUNTRY`),
  CONSTRAINT `jj2020_tb_user_ibfk_1` FOREIGN KEY (`ID_THEME`) REFERENCES `jj2020_tb_theme` (`ID`),
  CONSTRAINT `jj2020_tb_user_ibfk_2` FOREIGN KEY (`ID_COUNTRY`) REFERENCES `shared_country` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jj2020_tb_user`
--

LOCK TABLES `jj2020_tb_user` WRITE;
/*!40000 ALTER TABLE `jj2020_tb_user` DISABLE KEYS */;
INSERT INTO `jj2020_tb_user` VALUES (3,NULL,NULL,'testes@gmail.com','teste','User Teste','2020-09-05',_binary '','2020-09-05 12:54:19',NULL),(4,NULL,1,'testes2@gmail.com','teste','User Teste 2','1997-02-22',_binary '','2020-09-05 12:58:41',NULL),(7,NULL,1,'PUTtest@hotmail.com','testepost','Firmino PUT','2000-09-11',_binary '\0','2020-09-07 13:11:56','');
/*!40000 ALTER TABLE `jj2020_tb_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shared_country`
--

DROP TABLE IF EXISTS `shared_country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shared_country` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `NAME_COUNTRY` varchar(40) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shared_country`
--

LOCK TABLES `shared_country` WRITE;
/*!40000 ALTER TABLE `shared_country` DISABLE KEYS */;
INSERT INTO `shared_country` VALUES (1,'Brasil');
/*!40000 ALTER TABLE `shared_country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'develop2020'
--
/*!50003 DROP PROCEDURE IF EXISTS `STP_JJ2020_NOTE_GET` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `STP_JJ2020_NOTE_GET`(pid_user integer, pid integer)
BEGIN
		IF pid = 0 THEN
			select nt.ID, nt.ID_USER, nt.ID_USER_SHARED, nt.TITLE, nt.NOTE_TEXT, nt.ACTIVE, nt.FAVORITE, nt.TAG, nt.DT_CREATION, nt.DT_EDIT
			from jj2020_tb_note nt
			where nt.ID_USER = pid_user;
		END IF;

		IF pid != 0 THEN
			select nt.ID, nt.ID_USER, nt.ID_USER_SHARED, nt.TITLE, nt.NOTE_TEXT, nt.ACTIVE, nt.FAVORITE, nt.TAG, nt.DT_CREATION, nt.DT_EDIT
			from jj2020_tb_note nt
			where nt.ID = @id and nt.ID_USER = pid_user;
		END IF;
	END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `STP_JJ2020_NOTE_INSERT` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `STP_JJ2020_NOTE_INSERT`(Pid integer, Pid_user integer, Pid_user_shared varchar(60), Ptitle varchar(60), Pnote_text varchar(16000), Pactive bit, Pfavorite bit, Ptag varchar(40), Pdt_creation datetime, Pdt_edit datetime)
BEGIN
		if Pid = 0 THEN
			INSERT INTO jj2020_tb_note (ID_USER, ID_USER_SHARED, TITLE, NOTE_TEXT, ACTIVE, FAVORITE, TAG,DT_CREATION, DT_EDIT)
		VALUES
           (Pid_user, Pid_user_shared , Ptitle, Pnote_text, Pactive, Pfavorite, Ptag, Pdt_creation, Pdt_edit);
		END IF;

		if Pid > 0 THEN
			UPDATE JJ2020_TB_NOTE 
			SET ID_USER = Pid_user, ID_USER_SHARED = Pid_user_shared, TITLE = Ptitle, NOTE_TEXT = Pnote_text, ACTIVE = Pactive, FAVORITE = Pfavorite, TAG = Ptag, DT_CREATION = Pdt_creation, DT_EDIT = Pdt_edit
			WHERE ID = Pid;
		END IF;
	END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `STP_JJ2020_USER_GET` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `STP_JJ2020_USER_GET`(INOUT pEmail varchar(250), INOUT pPass varchar(20))
BEGIN
		IF (pEmail != '') THEN
			select us.ID, us.ID_THEME, us.ID_COUNTRY, us.EMAIL, us.U_PASSWORD, us.NAME_USER, us.AGE, us.DT_CREATION, us.URL_PHOTO, co.NAME_COUNTRY
			from jj2020_tb_user us 
			left join shared_country co on us.ID_COUNTRY = co.ID
			where us.EMAIL = pEmail AND us.U_PASSWORD = pPass;
		END IF;
	END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `STP_JJ2020_USER_INSERT` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `STP_JJ2020_USER_INSERT`(pId integer, pId_theme integer, pId_country integer, pEmail varchar(250), u_password varchar(20), pName_user varchar(60), age date, pActive bit, pDt_creation datetime, pUrl_photo varchar(250))
BEGIN
		if pId = 0 THEN
			INSERT INTO jj2020_tb_user
           (ID_THEME,ID_COUNTRY,EMAIL,U_PASSWORD,NAME_USER,AGE,ACTIVE,DT_CREATION,URL_PHOTO)
			VALUES
           (pId_theme, pId_country, pEmail, u_password, pName_user, age, pActive, pDt_creation, pUrl_photo);
		END IF;

		if pId > 0 THEN
			UPDATE jj2020_tb_user 
			SET ID_THEME = pId_theme, ID_COUNTRY = pId_country, EMAIL = pEmail, U_PASSWORD = u_password, NAME_USER = pName_user, AGE = age, ACTIVE = pActive, DT_CREATION = pDt_creation, URL_PHOTO = pUrl_photo
			WHERE ID = pId;
		END IF;
	END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-12 19:27:41
