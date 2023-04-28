/*
  Warnings:

  - You are about to drop the `PrimeiroGiro` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SegundoGiro` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "PrimeiroGiro";

-- DropTable
DROP TABLE "SegundoGiro";

-- CreateTable
CREATE TABLE "primeiroGiro" (
    "id" SERIAL NOT NULL,
    "primeiroGiro" TEXT NOT NULL,

    CONSTRAINT "primeiroGiro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "segundoGiro" (
    "id" SERIAL NOT NULL,
    "segundoGiro" TEXT NOT NULL,

    CONSTRAINT "segundoGiro_pkey" PRIMARY KEY ("id")
);
