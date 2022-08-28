-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3307
-- Tiempo de generación: 28-08-2022 a las 19:09:31
-- Versión del servidor: 5.6.35
-- Versión de PHP: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `unab_partidos_prueba`
--
CREATE DATABASE IF NOT EXISTS `unab_partidos_prueba` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `unab_partidos_prueba`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipos`
--

DROP TABLE IF EXISTS `equipos`;
CREATE TABLE IF NOT EXISTS `equipos` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(20) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Truncar tablas antes de insertar `equipos`
--

TRUNCATE TABLE `equipos`;
--
-- Volcado de datos para la tabla `equipos`
--

INSERT INTO `equipos` (`Id`, `Nombre`) VALUES
(1, 'UNAB'),
(2, 'U. ATLANTICO'),
(3, 'CUC'),
(4, 'SIMON BOLIVAR'),
(5, 'UFPSO'),
(6, 'CUA/AMERICANA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partidos`
--

DROP TABLE IF EXISTS `partidos`;
CREATE TABLE IF NOT EXISTS `partidos` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Usuario` int(11) NOT NULL,
  `Local` int(11) NOT NULL,
  `Visitante` int(11) NOT NULL,
  `Fecha` date NOT NULL,
  `Goles_Local` int(11) DEFAULT NULL,
  `Goles_Visitante` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Truncar tablas antes de insertar `partidos`
--

TRUNCATE TABLE `partidos`;
--
-- Volcado de datos para la tabla `partidos`
--

INSERT INTO `partidos` (`Id`, `Usuario`, `Local`, `Visitante`, `Fecha`, `Goles_Local`, `Goles_Visitante`) VALUES
(1, 1, 1, 2, '2022-08-01', 2, 2),
(2, 1, 4, 5, '2022-09-09', 3, 2),
(3, 1, 5, 2, '2022-09-09', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(100) NOT NULL,
  `Correo` varchar(50) NOT NULL,
  `UserName` varchar(10) NOT NULL,
  `Password` varchar(10) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Truncar tablas antes de insertar `usuarios`
--

TRUNCATE TABLE `usuarios`;
--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`Id`, `Nombre`, `Correo`, `UserName`, `Password`) VALUES
(1, 'Reyner', 'r@g.com', 'king', '123'),
(2, 'santy', 'san@g.com', 'santy', '456'),
(3, 'samu', 'sam@g.com', 'samu', '456');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
