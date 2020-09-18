-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: lab1
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clients` (
  `Code` int NOT NULL,
  `Lastname` varchar(45) NOT NULL,
  `Firstname` varchar(45) NOT NULL,
  `Middle name` varchar(45) NOT NULL,
  `Date of birth` date NOT NULL,
  `Gender` tinyint NOT NULL,
  `PassportSerial` varchar(2) NOT NULL,
  `Passport NUM` int NOT NULL,
  `Issued By` varchar(90) NOT NULL,
  `Date Of Issue` date NOT NULL,
  `Identification No` varchar(14) NOT NULL,
  `Place Of Birth` varchar(45) NOT NULL,
  `The City Of Living` varchar(45) NOT NULL,
  `The Adress Of Living` varchar(45) NOT NULL,
  `Home Phone` varchar(12) DEFAULT NULL,
  `Mobile Phone` varchar(12) DEFAULT NULL,
  `E-mail` varchar(45) DEFAULT NULL,
  `Marial Status` int NOT NULL,
  `Citizenship` int NOT NULL,
  `Disability` int NOT NULL,
  `Retiree` int NOT NULL,
  `Salary` int DEFAULT NULL,
  `Militarian` int NOT NULL,
  PRIMARY KEY (`Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES (1,'Холодцов','Игорь','Александрович','2001-03-28',1,'MP',1351264,'','2024-07-20','53ASS795PB8','Донбасс','Минск','Леси Украинки',NULL,NULL,NULL,0,1,0,0,NULL,0),(2,'Исаеня','Владилен','Евгеньевич','2000-07-03',1,'MP',3151531,'','2024-03-02','35NX138SPB8','Лоев','Минск','Притыцкого',NULL,NULL,NULL,0,1,0,0,NULL,0),(3,'Шпудейко','Андрей','Валерьевич','2000-01-06',1,'MP',1351354,'','2024-12-31','785SN157PB7','Пинск','Минск','Голубева',NULL,NULL,NULL,0,1,0,0,NULL,0);
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-16 22:21:12
