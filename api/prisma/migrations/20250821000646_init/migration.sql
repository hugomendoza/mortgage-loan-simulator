-- CreateEnum
CREATE TYPE "public"."MortgageStatus" AS ENUM ('APPROVED', 'REFER', 'DECLINE');

-- CreateTable
CREATE TABLE "public"."Mortgage" (
    "id" TEXT NOT NULL,
    "monthly_income" DECIMAL(65,30) NOT NULL,
    "monthly_debts" DECIMAL(65,30) NOT NULL,
    "loan_amount" DECIMAL(65,30) NOT NULL,
    "property_value" DECIMAL(65,30) NOT NULL,
    "credit_score" INTEGER NOT NULL,
    "debt_to_income" DECIMAL(65,30) NOT NULL,
    "loan_to_value" DECIMAL(65,30) NOT NULL,
    "status" "public"."MortgageStatus" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Mortgage_pkey" PRIMARY KEY ("id")
);
