/*
  Warnings:

  - Added the required column `imageUrl` to the `Prompt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Prompt" ADD COLUMN     "imageUrl" TEXT NOT NULL;
