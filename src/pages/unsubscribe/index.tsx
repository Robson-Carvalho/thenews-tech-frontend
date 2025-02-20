import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useNavigate, useParams } from "react-router";

import logo from "../../assets/logo.svg";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import { API } from "@/services/integrations/api";
import { FormEvent } from "react";
import { toast } from "react-toastify";

const Unsubscribe = () => {
  const { email } = useParams();

  const handleUnsubscribe = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await API.delete(`/subscriber/${email}`);
      console.log(response.data);
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
          <p className=" text-gray-600 text-lg">
            Sentiremos sua falta! 😢 <br />
            Mas queremos que saiba que as portas estarão sempre abertas para
            você. <br /> Quando quiser voltar a receber as últimas novidades do
            mundo da tecnologia, <br />
            estaremos aqui, prontos para te enviar as principais informações
            diretamente <br /> no seu e-mail, todo dia às 8h da manhã.
          </p>
        </div>

        <form
          onSubmit={handleUnsubscribe}
          className="flex flex-col space-y-4 w-full max-w-sm"
        >
          <Button
            variant="destructive"
            type="submit"
            className="text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
            Cancelar inscrição
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

export { Unsubscribe };
