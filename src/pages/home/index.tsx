import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent, useEffect, useState } from "react";

import { useReward } from "react-rewards";
import { toast } from "react-toastify";
import {
  getSubscribersNumber,
  subscribeEmail,
} from "@/services/integrations/api";
import { Logo } from "@/components/logo";
import { Body } from "@/layouts/body";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const { reward, isAnimating } = useReward("rewardId", "confetti");

  useEffect(() => {
    async function getQuantity() {
      const data: number = await getSubscribersNumber();
      if (Number(data)) {
        setCount(data as number);
      }
    }
    getQuantity();
  });

  const handleSubscriber = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await subscribeEmail(email);

      reward();
      reward();
      reward();
      setEmail("");
      toast.success("Bem-vindo(a) ao The News Tech!");
    } catch (error: any) {
      if (error.response.status === 409) {
        toast.warning("E-mail já cadastrado!");
      } else if (error.response.status === 400) {
        toast.warning("E-mail inválido");
      } else {
        toast.error("Erro interno!");
      }
    }
  };

  return (
    <Body>
      <div className="h-[100%] flex-grow flex flex-col justify-center items-center">
        <div className="text-center mb-8 max-w-[420px]">
          <Logo />
          <p className="text-gray-600 text-lg">
            Fique por dentro das principais notícias sobre tecnologia. Todo dia
            às 8h da manhã na sua caixa de e-mail.
          </p>
        </div>

        <p className="mb-4 text-gray-600 text-md">
          Junte-se à nossa comunidade de{" "}
          <span className="text-gray-900 font-semibold">{count} leitores</span>
        </p>

        <form
          onSubmit={handleSubscriber}
          className="flex flex-col space-y-4 max-w-[320px] w-full"
        >
          <Input
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-700 placeholder-gray-400"
            required
          />
          <Button
            disabled={isAnimating}
            variant="default"
            id="rewardId"
            type="submit"
            className="text-white font-semibold py-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
            Inscrever-se (Grátis)
          </Button>
        </form>
      </div>
    </Body>
  );
};

export { Home };
