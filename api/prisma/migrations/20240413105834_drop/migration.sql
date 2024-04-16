/*
  Warnings:

  - You are about to drop the column `content` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `openings` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `addressId` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `educationId` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `experienceId` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `trainingId` on the `student` table. All the data in the column will be lost.
  - You are about to drop the `address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `education` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `experience` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `training` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `city` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sector` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `student` DROP FOREIGN KEY `Student_addressId_fkey`;

-- DropForeignKey
ALTER TABLE `student` DROP FOREIGN KEY `Student_educationId_fkey`;

-- DropForeignKey
ALTER TABLE `student` DROP FOREIGN KEY `Student_experienceId_fkey`;

-- DropForeignKey
ALTER TABLE `student` DROP FOREIGN KEY `Student_trainingId_fkey`;

-- AlterTable
ALTER TABLE `post` DROP COLUMN `content`,
    DROP COLUMN `openings`,
    DROP COLUMN `published`,
    ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `sector` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `student` DROP COLUMN `addressId`,
    DROP COLUMN `educationId`,
    DROP COLUMN `experienceId`,
    DROP COLUMN `trainingId`,
    ADD COLUMN `address` VARCHAR(191) NULL,
    ADD COLUMN `degree` VARCHAR(191) NULL,
    ADD COLUMN `educationStatus` VARCHAR(191) NULL,
    ADD COLUMN `phoneNumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `university` VARCHAR(191) NULL,
    MODIFY `dob` VARCHAR(191) NULL,
    ALTER COLUMN `gender` DROP DEFAULT;

-- DropTable
DROP TABLE `address`;

-- DropTable
DROP TABLE `education`;

-- DropTable
DROP TABLE `experience`;

-- DropTable
DROP TABLE `training`;
