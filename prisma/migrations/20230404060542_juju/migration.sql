-- CreateTable
CREATE TABLE `Reservacion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idUser` INTEGER NOT NULL,
    `nameClient` VARCHAR(200) NOT NULL,
    `salon` ENUM('interior', 'exterior') NOT NULL,
    `cantidadAdultos` INTEGER NOT NULL,
    `cantidadNinos` INTEGER NOT NULL,
    `fecha` DATETIME(3) NOT NULL,
    `horaInicio` DATETIME(3) NOT NULL,
    `horaFin` DATETIME(3) NOT NULL,
    `tipoEvento` ENUM('boda', 'quinceanera', 'cumpleanos', 'graduacion', 'otro') NOT NULL,
    `downPayment` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReservacionServicio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cantidad` INTEGER NOT NULL,
    `reservacionId` INTEGER NOT NULL,
    `servicioId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ReservacionServicioToService` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ReservacionServicioToService_AB_unique`(`A`, `B`),
    INDEX `_ReservacionServicioToService_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ReservacionServicio` ADD CONSTRAINT `ReservacionServicio_reservacionId_fkey` FOREIGN KEY (`reservacionId`) REFERENCES `Reservacion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ReservacionServicioToService` ADD CONSTRAINT `_ReservacionServicioToService_A_fkey` FOREIGN KEY (`A`) REFERENCES `ReservacionServicio`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ReservacionServicioToService` ADD CONSTRAINT `_ReservacionServicioToService_B_fkey` FOREIGN KEY (`B`) REFERENCES `Service`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
