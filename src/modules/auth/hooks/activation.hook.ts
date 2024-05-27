import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const useActivation = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { tokenId } = useParams();
  useEffect(() => {
    activation(tokenId);
  }, [tokenId]);

  const activation = async (token?: string) => {
    setLoading(true);
    const data = {
      token: token,
    };
    axios
      .post(`https://catalogo-api.dint.cl/users/auth/activate`, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const navigateToLogin = () => {
    navigate("/login");
  };
  return {
    activation,
    navigateToLogin,
    loading,
  };
};
