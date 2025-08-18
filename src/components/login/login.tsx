"use client";

import { useForm, FormProvider } from "react-hook-form";
import { FormField, FormItem, FormControl, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "../ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";

const formSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("Form submitted:", data);
  }

  return (
    <div className="border flex justify-center items-center p-8 rounded-lg shadow-lg bg-background">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center gap-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="João Silva" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input placeholder="***********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className=" w-full mt-4">
            Login
          </Button>
          <p className="text-sm text-muted-foreground mt-2">
            Esqueceu a senha? <a href="#" className="text-primary underline">Registrar</a>
          </p>
        </form>
      </FormProvider>
    </div>
  )
};

export default Login;
