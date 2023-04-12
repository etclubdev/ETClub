DROP DATABASE IF EXISTS etclub_website_db;
CREATE DATABASE etclub_website_db;
USE etclub_website_db;
-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th4 01, 2023 lúc 04:08 PM
-- Phiên bản máy phục vụ: 10.4.22-MariaDB
-- Phiên bản PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `etclub_website_db`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `banner`
--

CREATE TABLE `banner` (
  `stt` int(11) NOT NULL,
  `description` text NOT NULL,
  `img` longtext NOT NULL,
  `link` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `basic_info`
--

CREATE TABLE `basic_info` (
  `operating_year` int(11) NOT NULL,
  `media_channel` int(11) NOT NULL,
  `workshop_talkshow` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `competition`
--

CREATE TABLE `competition` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `landscape_poster` text DEFAULT NULL,
  `portrait_poster` text DEFAULT NULL,
  `lookback_script` text DEFAULT NULL,
  `lookback_img` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `competition_result`
--

CREATE TABLE `competition_result` (
  `id` int(11) NOT NULL,
  `competition_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `major` varchar(255) NOT NULL,
  `academic_year` varchar(255) NOT NULL,
  `team` varchar(255) DEFAULT NULL,
  `rank` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `et_news`
--

CREATE TABLE `et_news` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `tiny_desc` text NOT NULL,
  `full_news` text NOT NULL,
  `image` text NOT NULL,
  `view` int(11) NOT NULL,
  `create_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `feeling`
--

CREATE TABLE `feeling` (
  `id` int(11) NOT NULL,
  `quote` text NOT NULL,
  `author` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `milestone`
--

CREATE TABLE `milestone` (
  `id` int(11) NOT NULL,
  `competition_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sponsor`
--

CREATE TABLE `sponsor` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `logo` text NOT NULL,
  `kind` varchar(255) NOT NULL,
  `competition_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `competition`
--
ALTER TABLE `competition`
  ADD PRIMARY KEY (`id`);
  
ALTER TABLE `banner`
  ADD PRIMARY KEY (`stt`);
--
-- Chỉ mục cho bảng `competition_result`
--
ALTER TABLE `competition_result`
  ADD PRIMARY KEY (`id`),
  ADD KEY `competition_id` (`competition_id`);

--
-- Chỉ mục cho bảng `et_news`
--
ALTER TABLE `et_news`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `feeling`
--
ALTER TABLE `feeling`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `milestone`
--
ALTER TABLE `milestone`
  ADD PRIMARY KEY (`id`),
  ADD KEY `competition_id` (`competition_id`);

--
-- Chỉ mục cho bảng `sponsor`
--
ALTER TABLE `sponsor`
  ADD PRIMARY KEY (`id`),
  ADD KEY `competition_id` (`competition_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `competition`
--
ALTER TABLE `competition`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `competition_result`
--
ALTER TABLE `competition_result`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `et_news`
--
ALTER TABLE `et_news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `feeling`
--
ALTER TABLE `feeling`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `milestone`
--
ALTER TABLE `milestone`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `sponsor`
--
ALTER TABLE `sponsor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `banner`
  MODIFY `stt` int(11) NOT NULL AUTO_INCREMENT;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `competition_result`
--
ALTER TABLE `competition_result`
  ADD CONSTRAINT `competition_result_ibfk_1` FOREIGN KEY (`competition_id`) REFERENCES `competition` (`id`);

--
-- Các ràng buộc cho bảng `milestone`
--
ALTER TABLE `milestone`
  ADD CONSTRAINT `milestone_ibfk_1` FOREIGN KEY (`competition_id`) REFERENCES `competition` (`id`);

--
-- Các ràng buộc cho bảng `sponsor`
--
ALTER TABLE `sponsor`
  ADD CONSTRAINT `sponsor_ibfk_1` FOREIGN KEY (`competition_id`) REFERENCES `competition` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
