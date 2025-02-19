import { useNavigate, useParams } from "react-router";

const Unsubscribe = () => {
  const { email } = useParams();
  const navigate = useNavigate();

  try {
  } catch (error) {
    navigate("/");
  }

  return <>{email}</>;
};

export { Unsubscribe };
