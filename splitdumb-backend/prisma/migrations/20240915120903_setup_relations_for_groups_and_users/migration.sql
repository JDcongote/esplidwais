/*
  Warnings:

  - You are about to drop the column `memberIds` on the `Group` table. All the data in the column will be lost.
  - You are about to drop the column `groupIds` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `_GroupToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_GroupToUser" DROP CONSTRAINT "_GroupToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_GroupToUser" DROP CONSTRAINT "_GroupToUser_B_fkey";

-- AlterTable
ALTER TABLE "Group" DROP COLUMN "memberIds";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "groupIds";

-- DropTable
DROP TABLE "_GroupToUser";

-- CreateTable
CREATE TABLE "_UserGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserGroups_AB_unique" ON "_UserGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_UserGroups_B_index" ON "_UserGroups"("B");

-- AddForeignKey
ALTER TABLE "_UserGroups" ADD CONSTRAINT "_UserGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserGroups" ADD CONSTRAINT "_UserGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
