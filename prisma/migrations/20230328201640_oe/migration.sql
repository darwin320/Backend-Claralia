-- CreateTable
CREATE TABLE `Servicio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nameService` VARCHAR(50) NOT NULL,
    `typeService` ENUM('type1', 'type2', 'type3') NOT NULL,
    `nameSupplier` VARCHAR(50) NOT NULL,
    `company` VARCHAR(50) NOT NULL,
    `phoneNumber` VARCHAR(200) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Servicio_nameService_key`(`nameService`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
