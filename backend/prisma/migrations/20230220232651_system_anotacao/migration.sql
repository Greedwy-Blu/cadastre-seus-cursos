/*
  Warnings:

  - You are about to drop the `curriculum` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "curriculum";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Curriculum" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "materias" TEXT NOT NULL,
    "studyId" INTEGER NOT NULL,
    CONSTRAINT "Curriculum_studyId_fkey" FOREIGN KEY ("studyId") REFERENCES "Study" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "anotacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "curriculumId" INTEGER NOT NULL,
    CONSTRAINT "anotacao_curriculumId_fkey" FOREIGN KEY ("curriculumId") REFERENCES "Curriculum" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
