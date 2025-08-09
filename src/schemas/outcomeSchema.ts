import z from "zod";

export const outcomeSchema = z.object({
  // category: z.string().min(1, {
  //   message: "Category is required.",
  // }),
  amount: z
    .number({
      error: "Valor é obrigatório.",
    })
    .nonnegative({
      message: "Valor não pode ser negativo.",
    }),
  name: z.string({ error: "Nome é obrigatório." }).min(1, {
    message: "Nome é obrigatório.",
  }),
});
