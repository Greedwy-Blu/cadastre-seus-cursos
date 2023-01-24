-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT,
    "password" TEXT,
    "name" TEXT,
    "age" INTEGER
);

-- CreateTable
CREATE TABLE "Study" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "instuicao" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Study_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
