/*
  Warnings:

  - You are about to drop the column `primeiroGiro` on the `primeiroGiro` table. All the data in the column will be lost.
  - You are about to drop the column `segundoGiro` on the `segundoGiro` table. All the data in the column will be lost.
  - Added the required column `pGiro` to the `primeiroGiro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sGiro` to the `segundoGiro` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "primeiroGiro" DROP COLUMN "primeiroGiro",
ADD COLUMN     "pGiro" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "segundoGiro" DROP COLUMN "segundoGiro",
ADD COLUMN     "sGiro" TEXT NOT NULL;
