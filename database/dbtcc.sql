-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Tempo de geração: 22-Jun-2020 às 15:49
-- Versão do servidor: 8.0.18
-- versão do PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `dbtcc`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_anuncio`
--

DROP TABLE IF EXISTS `tb_anuncio`;
CREATE TABLE IF NOT EXISTS `tb_anuncio` (
  `cd_anuncio` int(20) NOT NULL AUTO_INCREMENT,
  `cd_anunciante` int(20) NOT NULL,
  `cd_categoria` int(20) NOT NULL,
  `nm_anuncio` varchar(255) NOT NULL,
  `ds_anuncio` varchar(255) DEFAULT NULL,
  `vl_anuncio` int(20) NOT NULL,
  `nm_img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`cd_anuncio`),
  KEY `cd_anunciante` (`cd_anunciante`),
  KEY `cd_categoria` (`cd_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_categoria`
--

DROP TABLE IF EXISTS `tb_categoria`;
CREATE TABLE IF NOT EXISTS `tb_categoria` (
  `cd_categoria` int(20) NOT NULL AUTO_INCREMENT,
  `nm_categoria` varchar(255) NOT NULL,
  PRIMARY KEY (`cd_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='tabela categorias';

--
-- Extraindo dados da tabela `tb_categoria`
--

INSERT INTO `tb_categoria` (`cd_categoria`, `nm_categoria`) VALUES
(1, 'Saúde');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_chat`
--

DROP TABLE IF EXISTS `tb_chat`;
CREATE TABLE IF NOT EXISTS `tb_chat` (
  `cd_chat` int(11) NOT NULL,
  `cd_id_fromuser` int(11) NOT NULL,
  `cd_id_touser` int(11) NOT NULL,
  PRIMARY KEY (`cd_chat`),
  KEY `cd_id_fromuser_fk` (`cd_id_fromuser`),
  KEY `cd_id_touser` (`cd_id_touser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='tabela chat';

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_endereco`
--

DROP TABLE IF EXISTS `tb_endereco`;
CREATE TABLE IF NOT EXISTS `tb_endereco` (
  `cd_usuario` int(11) NOT NULL,
  `cd_cep` int(20) NOT NULL,
  `sg_estado` varchar(100) NOT NULL,
  `nm_cidade` varchar(100) NOT NULL,
  `nm_rua` varchar(100) NOT NULL,
  `nr_casa` int(10) NOT NULL,
  `ds_complemento` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`cd_usuario`),
  KEY `cd_usuario` (`cd_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_mensagem`
--

DROP TABLE IF EXISTS `tb_mensagem`;
CREATE TABLE IF NOT EXISTS `tb_mensagem` (
  `cd_msg` int(11) NOT NULL AUTO_INCREMENT,
  `cd_chat_msg` int(11) NOT NULL,
  `ds_msg` varchar(300) NOT NULL,
  `dt_msg` date NOT NULL,
  `hr_msg` time(6) NOT NULL,
  PRIMARY KEY (`cd_msg`,`cd_chat_msg`),
  KEY `cd_chat_msg` (`cd_chat_msg`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='tabela mensagem';

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_telefone`
--

DROP TABLE IF EXISTS `tb_telefone`;
CREATE TABLE IF NOT EXISTS `tb_telefone` (
  `cd_usuario` int(20) NOT NULL,
  `nr_telefone1` varchar(30) NOT NULL,
  `nr_telefone2` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`cd_usuario`),
  KEY `cd_usuario` (`cd_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_tipo_usuario`
--

DROP TABLE IF EXISTS `tb_tipo_usuario`;
CREATE TABLE IF NOT EXISTS `tb_tipo_usuario` (
  `cd_tipo` int(11) NOT NULL,
  `nm_tipo` varchar(100) NOT NULL,
  PRIMARY KEY (`cd_tipo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_usuario`
--

DROP TABLE IF EXISTS `tb_usuario`;
CREATE TABLE IF NOT EXISTS `tb_usuario` (
  `cd_usuario` int(20) NOT NULL AUTO_INCREMENT,
  `nm_usuario` varchar(255) NOT NULL,
  `nm_email` varchar(255) NOT NULL,
  `nm_senha` varchar(255) NOT NULL,
  `dt_nascimento` date NOT NULL,
  `cd_tipo_usuario` int(11) NOT NULL,
  `nm_img` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`cd_usuario`),
  UNIQUE KEY `nm_email` (`nm_email`),
  KEY `cd_tipo_usuario` (`cd_tipo_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=117 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='tabela usuário';

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_vendedor`
--

DROP TABLE IF EXISTS `tb_vendedor`;
CREATE TABLE IF NOT EXISTS `tb_vendedor` (
  `cd_vendedor` int(20) NOT NULL AUTO_INCREMENT,
  `cpf_vendedor` varchar(14) NOT NULL,
  `cd_usuario` int(11) NOT NULL,
  `ds_perfil` varchar(255) DEFAULT NULL,
  `nm_img_negocio` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`cd_vendedor`),
  KEY `cd_usuario` (`cd_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Criação da Tabela Vendedor';

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `tb_anuncio`
--
ALTER TABLE `tb_anuncio`
  ADD CONSTRAINT `cd_anunciante_fk` FOREIGN KEY (`cd_anunciante`) REFERENCES `tb_vendedor` (`cd_vendedor`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cd_categoria_fk` FOREIGN KEY (`cd_categoria`) REFERENCES `tb_categoria` (`cd_categoria`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `tb_chat`
--
ALTER TABLE `tb_chat`
  ADD CONSTRAINT `cd_id_touser_fk` FOREIGN KEY (`cd_id_touser`) REFERENCES `tb_usuario` (`cd_usuario`);

--
-- Limitadores para a tabela `tb_endereco`
--
ALTER TABLE `tb_endereco`
  ADD CONSTRAINT `cd_usuario_endereco_fk` FOREIGN KEY (`cd_usuario`) REFERENCES `tb_usuario` (`cd_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `tb_mensagem`
--
ALTER TABLE `tb_mensagem`
  ADD CONSTRAINT `cd_chat_msg_fk` FOREIGN KEY (`cd_chat_msg`) REFERENCES `tb_chat` (`cd_chat`);

--
-- Limitadores para a tabela `tb_telefone`
--
ALTER TABLE `tb_telefone`
  ADD CONSTRAINT `cd_usuario_telefone_fk` FOREIGN KEY (`cd_usuario`) REFERENCES `tb_usuario` (`cd_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `tb_usuario`
--
ALTER TABLE `tb_usuario`
  ADD CONSTRAINT `cd_tipo_usuario_fk` FOREIGN KEY (`cd_tipo_usuario`) REFERENCES `tb_tipo_usuario` (`cd_tipo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `tb_vendedor`
--
ALTER TABLE `tb_vendedor`
  ADD CONSTRAINT `cd_usuario_fk` FOREIGN KEY (`cd_usuario`) REFERENCES `tb_usuario` (`cd_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
