/*
  Warnings:

  - You are about to drop the column `members` on the `Group` table. All the data in the column will be lost.
  - You are about to drop the column `groups` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Group" DROP COLUMN "members",
ADD COLUMN     "memberIds" TEXT[];

-- AlterTable
ALTER TABLE "User" DROP COLUMN "groups",
ADD COLUMN     "groupIds" TEXT[];

-- CreateTable
CREATE TABLE "_GroupToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_GroupToUser_AB_unique" ON "_GroupToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_GroupToUser_B_index" ON "_GroupToUser"("B");

-- AddForeignKey
ALTER TABLE "_GroupToUser" ADD CONSTRAINT "_GroupToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GroupToUser" ADD CONSTRAINT "_GroupToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
