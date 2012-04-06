-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 16, 2012 at 06:51 PM
-- Server version: 5.5.9
-- PHP Version: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `karn0010`
--

-- --------------------------------------------------------

--
-- Table structure for table `usertable`
--

CREATE TABLE `usertable` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `username` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=11 ;

--
-- Dumping data for table `usertable`
--

INSERT INTO `usertable` VALUES(1, 'tracykarnabi@hotmail.com', 'tracy');
INSERT INTO `usertable` VALUES(2, 'amallera-804@gmail.com', 'amallera');
INSERT INTO `usertable` VALUES(3, 'cakelove@me.com', 'cakelove');
INSERT INTO `usertable` VALUES(4, 'youandus@yahoo.ca', 'yoyo');
INSERT INTO `usertable` VALUES(5, 'wowmamp@hotmail.com', 'mamplove');
INSERT INTO `usertable` VALUES(6, 'powerpuffgirls@me.com', 'bubble-puff');
INSERT INTO `usertable` VALUES(7, 'masseffect@random.com', 'mass');
INSERT INTO `usertable` VALUES(8, 'finalfantasy@gmail.com', 'cloud');
INSERT INTO `usertable` VALUES(9, 'support@gmail.com', 'Support');
INSERT INTO `usertable` VALUES(10, 'unicornlove@cake.com', 'Unicorn-love');
