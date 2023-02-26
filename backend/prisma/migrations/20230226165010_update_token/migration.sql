/*
  Warnings:

  - Added the required column `userId` to the `token` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_token" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "hash" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "userId" INTEGER NOT NULL
);
INSERT INTO "new_token" ("hash", "id", "username") SELECT "hash", "id", "username" FROM "token";
DROP TABLE "token";
ALTER TABLE "new_token" RENAME TO "token";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
