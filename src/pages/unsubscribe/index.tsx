import { Button } from "@/components/ui/button";

import { unsubscribeEmail } from "@/services/integrations/api";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { Body } from "@/layouts/body";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/logo";

const Unsubscribe = () => {
  const [email, setEmail] = useState<string>("");

  const handleUnsubscribe = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await unsubscribeEmail(email);
      setEmail("");
      toast.success("Inscrição cancelada!");
    } catch (error: any) {
      console.log(error.response.data);
      if (error.response.status === 404) {
        toast.warning("E-mail não encontrado!");
      } else {
        toast.warning("E-mail inválido");
      }
    }
  };

  return (
    <Body>
      <div className="h-[100%] flex-grow flex flex-col justify-center items-center">
        <div className="text-center mb-8">
          <Logo />
          <p className="text-gray-600 text-lg">
            Por favor, informe o e-mail que deseja remover <br /> da nossa lista
            de distribuição de notícias.
          </p>
        </div>

        <form
          onSubmit={handleUnsubscribe}
          className="flex flex-col space-y-4 w-[300px]  max-w-sm"
        >
          <Input
            type="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-700 placeholder-gray-400"
            required
          />
          <Button
            variant="destructive"
            type="submit"
            className="text-white font-semibold py-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
            Cancelar inscrição
          </Button>
        </form>
      </div>
    </Body>
  );
};

export { Unsubscribe };
