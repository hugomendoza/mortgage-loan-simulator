import z from 'zod';

export const registerDataSchema = z.object({
  monthlyIncome: z.string().min(4, { message: 'Enter the monthly income' }),
  monthlyDebts: z.string().min(4, { message: 'Enter the monthly debts' }),
  loanAmount: z.string().min(4, { message: 'Enter the loan amount' }),
  propertyValue: z.string().min(4, { message: 'Enter the property value' }),
  creditScore: z.string().min(3, { message: 'Enter the credit score' }),
  occupancyType: z.string().min(1, { message: 'Enter the occupation' }),
});

export type RegisterData = z.infer<typeof registerDataSchema>;
