/*
  Warnings:

  - You are about to drop the `_reservacionserviciotoservice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reservacionservicio` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `fechaFin` to the `Reservacion` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_reservacionserviciotoservice` DROP FOREIGN KEY `_ReservacionServicioToService_A_fkey`;

-- DropForeignKey
ALTER TABLE `_reservacionserviciotoservice` DROP FOREIGN KEY `_ReservacionServicioToService_B_fkey`;

-- DropForeignKey
ALTER TABLE `reservacionservicio` DROP FOREIGN KEY `ReservacionServicio_reservacionId_fkey`;

-- AlterTable
ALTER TABLE `reservacion` ADD COLUMN `fechaFin` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_reservacionserviciotoservice`;

-- DropTable
DROP TABLE `reservacionservicio`;

-- CreateTable
CREATE TABLE `Inventario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `price` DOUBLE NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `reservacionId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_InventarioToService` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_InventarioToService_AB_unique`(`A`, `B`),
    INDEX `_InventarioToService_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Inventario` ADD CONSTRAINT `Inventario_reservacionId_fkey` FOREIGN KEY (`reservacionId`) REFERENCES `Reservacion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_InventarioToService` ADD CONSTRAINT `_InventarioToService_A_fkey` FOREIGN KEY (`A`) REFERENCES `Inventario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_InventarioToService` ADD CONSTRAINT `_InventarioToService_B_fkey` FOREIGN KEY (`B`) REFERENCES `Service`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
