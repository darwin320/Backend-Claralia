/*
  Warnings:

  - You are about to drop the column `cantidad` on the `reservacionservicio` table. All the data in the column will be lost.
  - Added the required column `description` to the `ReservacionServicio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `ReservacionServicio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `reservacionservicio` DROP COLUMN `cantidad`,
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `price` DOUBLE NOT NULL;
