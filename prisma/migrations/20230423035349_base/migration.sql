/*
  Warnings:

  - You are about to drop the `_inventariotoservice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `inventario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_inventariotoservice` DROP FOREIGN KEY `_InventarioToService_A_fkey`;

-- DropForeignKey
ALTER TABLE `_inventariotoservice` DROP FOREIGN KEY `_InventarioToService_B_fkey`;

-- DropForeignKey
ALTER TABLE `inventario` DROP FOREIGN KEY `Inventario_reservacionId_fkey`;

-- DropTable
DROP TABLE `_inventariotoservice`;

-- DropTable
DROP TABLE `inventario`;

-- CreateTable
CREATE TABLE `Inventory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `price` DOUBLE NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `reservacionId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_InventoryToService` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_InventoryToService_AB_unique`(`A`, `B`),
    INDEX `_InventoryToService_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Inventory` ADD CONSTRAINT `Inventory_reservacionId_fkey` FOREIGN KEY (`reservacionId`) REFERENCES `Reservacion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_InventoryToService` ADD CONSTRAINT `_InventoryToService_A_fkey` FOREIGN KEY (`A`) REFERENCES `Inventory`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_InventoryToService` ADD CONSTRAINT `_InventoryToService_B_fkey` FOREIGN KEY (`B`) REFERENCES `Service`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
