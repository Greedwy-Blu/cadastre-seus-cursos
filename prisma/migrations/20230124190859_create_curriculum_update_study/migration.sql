/*
  Warnings:

  - Added the required column `professores` to the `Study` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "curriculum" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "studyId" INTEGER NOT NULL,
    CONSTRAINT "curriculum_studyId_fkey" FOREIGN KEY ("studyId") REFERENCES "Study" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Study" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "instuicao" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "professores" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Study_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Study" ("curso", "id", "instuicao", "userId") SELECT "curso", "id", "instuicao", "userId" FROM "Study";
DROP TABLE "Study";
ALTER TABLE "new_Study" RENAME TO "Study";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
