import z from "zod";

export const incomeSchema = z.object({
  userId: z.string({
    error: "Invalid user ID",
  }),
  amount: z
    .number({
      error: "Valor inválido",
    })
    .min(0, {
      error: "O valor deve ser maior ou igual a 0",
    }),
  name: z.string({
    error: "Nome inválido",
  }),
  incomeDate: z.date({
    error: "Data inválida",
  }),
});

export type incomeReq = z.infer<typeof incomeSchema>;
export type incomeRes = incomeReq & {
  id: string;

  createdAt: Date;
  updatedAt: Date;
};
