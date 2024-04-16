-- AlterTable
ALTER TABLE `education` MODIFY `universityStartDate` VARCHAR(191) NULL,
    MODIFY `universityEndDate` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `experience` MODIFY `experienceStartDate` VARCHAR(191) NULL,
    MODIFY `experienceEndDate` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `training` MODIFY `trainingCompletionDate` VARCHAR(191) NULL;
