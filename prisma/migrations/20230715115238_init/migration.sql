/*
  Warnings:

  - You are about to drop the column `createdAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `key` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `telegramaccount` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `key` DROP FOREIGN KEY `Key_userId_fkey`;

-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `telegramaccount` DROP FOREIGN KEY `TelegramAccount_keyId_fkey`;

-- DropForeignKey
ALTER TABLE `telegramaccount` DROP FOREIGN KEY `TelegramAccount_userId_fkey`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `createdAt`,
    DROP COLUMN `password`,
    ADD COLUMN `emailVerified` DATETIME(3) NULL,
    ADD COLUMN `image` VARCHAR(191) NULL,
    MODIFY `email` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `key`;

-- DropTable
DROP TABLE `post`;

-- DropTable
DROP TABLE `telegramaccount`;
