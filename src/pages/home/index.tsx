import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent } from "react";
import { Linkedin } from "lucide-react";

import logo from "../../assets/logo.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useReward } from "react-rewards";
import { toast } from "react-toastify";

const Home = () => {
  const { reward, isAnimating } = useReward("rewardId", "confetti");
  const handleSubscriber = (e: FormEvent) => {
    e.preventDefault();

    try {
      reward();
      toast.success("Bem-vindo(a) ao The News Tech!");
    } catch (error) {}
  };

  return (
    <div className="w-full h-[100vh] flex flex-col justify-between items-center bg-[#f0f4f8]">
      <div className="px-6 flex flex-col justify-center items-center flex-grow">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 flex flex-row justify-center items-center gap-4">
            The News Tech
            <Avatar>
              <AvatarImage src={logo} className="w-full" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </h1>
          <p className="text-gray-600 text-lg">
            Fique por dentro das últimas novidades do mundo da tecnologia.{" "}
            <br /> Todo dia às 8h da manhã receba as principais informações no
            seu e-mail
          </p>
        </div>

        <form
          onSubmit={handleSubscriber}
          className="flex flex-col space-y-4 w-full max-w-sm"
        >
          <Input
            type="email"
            placeholder="Digite seu e-mail"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-700 placeholder-gray-400"
            required
          />
          <Button
            disabled={isAnimating}
            variant="default"
            type="submit"
            id="rewardId"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
            Inscrever-se
          </Button>
        </form>
      </div>

      <footer className="py-4 flex flex-row justify-center gap-2 bg-slate-200 w-full">
        <a
          href="https://www.linkedin.com/in/robson-carvalho-souza/"
          target="_blank"
          className="cursor-pointer flex flex-row justify-center items-start gap-2 hover:text-blue-500 transition duration-200"
        >
          <Linkedin size={20} />
          Developed by Robson Carvalho.
        </a>
      </footer>
    </div>
  );
};

export { Home };
