import { useNavigate } from "react-router";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <h1
      onClick={() => {
        navigate("/");
      }}
      className="text-4xl cursor-pointer font-bold text-gray-800 mb-4"
    >
      The News Tech 💻
    </h1>
  );
};

export { Logo };
