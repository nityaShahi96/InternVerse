/*
  Warnings:

  - You are about to drop the column `city` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `employer` ADD COLUMN `description` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `post` DROP COLUMN `city`,
    DROP COLUMN `location`;
