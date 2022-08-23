-- Creator:       MySQL Workbench 6.3.8/ExportSQLite Plugin 0.1.0
-- Author:        Mohamed
-- Caption:       New Model
-- Project:       Name of the project
-- Changed:       2021-12-20 11:07
-- Created:       2021-12-06 15:04
PRAGMA foreign_keys = OFF;

-- Schema: mydb
ATTACH "mydb.sdb" AS "mydb";
BEGIN;
CREATE TABLE "PROJET"(
  "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  "title_projet" VARCHAR(250) NOT NULL,
  "content_projet" LONGTEXT NOT NULL
);
COMMIT;
