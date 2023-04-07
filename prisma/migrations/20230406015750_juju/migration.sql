/*
  Warnings:

  - You are about to drop the column `servicioId` on the `reservacionservicio` table. All the data in the column will be lost.
  - Added the required column `priceRoomPerHour` to the `Reservacion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `reservacion` ADD COLUMN `priceRoomPerHour` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `reservacionservicio` DROP COLUMN `servicioId`;
