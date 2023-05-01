/*
  Warnings:

  - You are about to drop the column `description` on the `inventory` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `inventory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `inventory` DROP COLUMN `description`,
    DROP COLUMN `price`;
