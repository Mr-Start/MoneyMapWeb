"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { outcomeSchema } from "@/schemas/outcomeSchema";
import { PlusCircle } from "lucide-react";

export function AddOutcome() {
  const form = useForm<z.infer<typeof outcomeSchema>>({
    resolver: zodResolver(outcomeSchema),
    defaultValues: {
      amount: undefined,
      name: undefined,
    },
  });

  function onSubmit(data: z.infer<typeof outcomeSchema>) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-4"
      >
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-[#daa95a]">Custo</FormLabel>
                <FormControl>
                  <Input placeholder="Nome do gasto" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-[#daa95a]">Valor</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Valor do gasto"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          variant={"outline"}
          type="submit"
          className="w-fit self-end items-center"
        >
          <PlusCircle className="mr-2" />
          Adicionar
        </Button>
      </form>
    </Form>
  );
}
