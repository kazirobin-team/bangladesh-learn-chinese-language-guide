/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `name` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `langLevel` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `occupation` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `whyLearn` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wpNumber` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Occupation" AS ENUM ('Student', 'JobHolder', 'Business', 'Interpreter', 'Freelancer', 'Housewife', 'UnEmployed', 'Other');

-- CreateEnum
CREATE TYPE "WhyLearn" AS ENUM ('ForStudies', 'ForJob', 'ToGoToChina', 'ForChineseCulture', 'ForBusiness', 'AsAHobby', 'Other');

-- CreateEnum
CREATE TYPE "LangLevel" AS ENUM ('HskOne', 'HskTwo', 'HskThree', 'HskFour', 'HskFive', 'HskSix', 'Nothing');

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ADD COLUMN     "address" VARCHAR(255) NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "langLevel" "LangLevel" NOT NULL,
ADD COLUMN     "occupation" "Occupation" NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "whyLearn" "WhyLearn" NOT NULL,
ADD COLUMN     "wpNumber" VARCHAR(255) NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(255),
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
