import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FcMusic } from "react-icons/fc";
import { authUser } from "../api/auth";
import { useNavigate } from "react-router";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleEmailChange = (e: { target: { value: string } }) => {
    setFormData({
      email: e.target.value,
      password: formData.password,
    });
  };

  const handlePasswordChange = (e: { target: { value: string } }) => {
    setFormData({
      email: formData.email,
      password: e.target.value,
    });
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const response = await authUser(formData);
    console.log(response.ok);
    if (response.token) {
      localStorage.setItem("token", response.token);
      navigate("/home");
    }
  };
  return (
    <div className="md:flex min-h-screen w-screen">
      <div className="bg-[#06080E] w-screen p-12 flex flex-col gap-50 ">
        <div className="flex gap-2">
          <FcMusic size={25} />
          <h3 className="text-white font-bold text-xl"> MAESTRO APP</h3>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-white text-6xl font-bold w-lg">
            Organize cada nota e compasso.
          </h1>
          <p className="text-white text-xl w-lg">
            Gerencie seus setlists, compartilhe partituras com a banda e domine
            o palco com a plataforma definitiva para músicos.
          </p>
        </div>
      </div>
      <div className="bg-[#fff] w-screen">
        <div className="p-20">
          <div className="mb-10">
            <h1 className="text-4xl font-bold">Bem vindo de volta</h1>
            <p className="text-gray-500">
              Acesse seu repertorio e gerencie suas músicas
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 max-w-2/3">
              <div className="">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@example.com"
                  className="w-full rounded-xl border border-gray-500 p-3"
                  onChange={handleEmailChange}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="......"
                  className="w-full rounded-xl border border-gray-500 p-3"
                  onChange={handlePasswordChange}
                />
              </div>

              <button
                type="submit"
                className=" text-white font-bold bg-[#030407] p-3 rounded-xl cursor-pointer hover:transition 0.6s hover:opacity-60 flex justify-center"
              >
                Entrar no Maestro <FaArrowRight />
              </button>
            </div>
          </form>
          <h3>
            Ainda não tem uma conta ?{" "}
            <a href="/register">cadastre-se gratuitamente</a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
