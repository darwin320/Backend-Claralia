/*
  Warnings:

  - You are about to drop the column `inventarioId` on the `reservacion` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[reservacionId]` on the table `Inventory` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `reservacionId` to the `Inventory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `reservacion` DROP FOREIGN KEY `Reservacion_inventarioId_fkey`;

-- AlterTable
ALTER TABLE `inventory` ADD COLUMN `reservacionId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `reservacion` DROP COLUMN `inventarioId`;

-- CreateIndex
CREATE UNIQUE INDEX `Inventory_reservacionId_key` ON `Inventory`(`reservacionId`);

-- AddForeignKey
ALTER TABLE `Inventory` ADD CONSTRAINT `Inventory_reservacionId_fkey` FOREIGN KEY (`reservacionId`) REFERENCES `Reservacion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
