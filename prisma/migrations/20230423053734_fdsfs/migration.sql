/*
  Warnings:

  - You are about to drop the column `reservacionId` on the `inventory` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[inventarioId]` on the table `Reservacion` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `inventarioId` to the `Reservacion` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `inventory` DROP FOREIGN KEY `Inventory_reservacionId_fkey`;

-- AlterTable
ALTER TABLE `inventory` DROP COLUMN `reservacionId`;

-- AlterTable
ALTER TABLE `reservacion` ADD COLUMN `inventarioId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Reservacion_inventarioId_key` ON `Reservacion`(`inventarioId`);

-- AddForeignKey
ALTER TABLE `Reservacion` ADD CONSTRAINT `Reservacion_inventarioId_fkey` FOREIGN KEY (`inventarioId`) REFERENCES `Inventory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
