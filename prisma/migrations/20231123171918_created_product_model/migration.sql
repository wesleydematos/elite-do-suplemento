-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "imageURL" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "flavor" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "whenToTake" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
