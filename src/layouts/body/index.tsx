import { Linkedin } from "lucide-react";

interface IBodyProps {
  children: JSX.Element;
}

const Body = ({ children }: IBodyProps) => {
  return (
    <div className="w-full h-[100vh] flex flex-col bg-background">
      <div className="h-[100%] flex-grow px-6">{children}</div>
      <footer className="py-4 flex flex-row justify-center gap-2 bg-slate-100 w-full">
        <a
          href="https://www.linkedin.com/in/robson-carvalho-souza/"
          target="_blank"
          className="text-sm cursor-pointer flex flex-row justify-center items-start gap-2 hover:text-blue-500 transition duration-200"
        >
          <Linkedin size={20} />
          Developed by Robson Carvalho.
        </a>
      </footer>
    </div>
  );
};

export { Body };
