import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FcMusic } from "react-icons/fc";
import { createUser } from "../api/auth";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: any) => {
    console.log(formData);
    createUser(formData);
    e.preventDefault();
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
            Comece sua jornada musical.
          </h1>
          <p className="text-white text-xl w-lg">
            Junte-se a outros músicos e organize seu repertório de forma simples
            e intuitiva.
          </p>
        </div>
      </div>
      <div className="bg-[#fff] w-screen">
        <div className="p-20">
          <div className="mb-10">
            <h1 className="text-4xl font-bold">Criar uma conta</h1>
            <p className="text-gray-500">
              Preencha os dados abaixo para começar.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 max-w-2/3">
              <div>
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Seu nome"
                  className="w-full rounded-xl border border-gray-500 p-3"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@example.com"
                  className="w-full rounded-xl border border-gray-500 p-3"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="......"
                  className="w-full rounded-xl border border-gray-500 p-3"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="password">Confirmar Senha</label>
                <input
                  type="RepeatPassword"
                  name="RepeatPassword"
                  id="RepeatPassword"
                  placeholder="......"
                  className="w-full rounded-xl border border-gray-500 p-3"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </div>
              <button
                type="submit"
                className=" text-white font-bold bg-[#030407] p-3 rounded-xl cursor-pointer hover:transition 0.6s hover:opacity-60 flex justify-center"
              >
                Criar conta <FaArrowRight />
              </button>
            </div>
          </form>
          <h3>
            Já tem uma conta ? <a href="/">faça login</a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Register;
