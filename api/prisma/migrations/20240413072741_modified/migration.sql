/*
  Warnings:

  - You are about to drop the column `address` on the `address` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `address` DROP COLUMN `address`;

-- AlterTable
ALTER TABLE `student` ADD COLUMN `dob` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `gender` VARCHAR(191) NULL DEFAULT 'Not specified';
