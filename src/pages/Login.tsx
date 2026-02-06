import { FaArrowRight } from "react-icons/fa6";
import { FcMusic } from "react-icons/fc";
import { authUser } from "../api/auth";
import { useNavigate } from "react-router";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const schema = z.object({
    email: z.email("O formato de email é inválido"),
    password: z
      .string()
      .min(4, "A senha deve conter no mínimo 6 caracteres")
      .max(25, "A senha deve ter no máximo 25 caractéres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(schema),
  });

  type LoginFormSchema = z.infer<typeof schema>;

  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormSchema) => {
    try {
      const response = await authUser(data);
      if (response.token) {
        localStorage.setItem("token", response.token);
        toast.success("Login realizado com sucesso!", {
          position: "top-right",
          autoClose: 1500,
        });
        setTimeout(() => navigate("/home"), 1500);
      }
    } catch (e: any) {
      const errorMessage = "E-mail ou senha incorretos";
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 3000,
      });
      console.log(e);
    }
  };
  return (
    <div className="min-h-screen w-full md:flex overflow-x-hidden">
      <div className="bg-[#06080E] w-full md:1/2 p-12 flex flex-col gap-50 ">
        <div className="flex gap-2 items-center">
          <FcMusic size={25} />
          <h3 className="text-white font-bold text-xl"> MAESTRO APP</h3>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-white text-3xl md:text-6xl font-bold max-w-xl">
            Organize cada nota e compasso.
          </h1>
          <p className="text-white text-base md:text-xl max-w-xl">
            Gerencie seus setlists, compartilhe partituras com a banda e domine
            o palco com a plataforma definitiva para músicos.
          </p>
        </div>
      </div>
      <div className="bg-[#fff] w-full md:1/2 flex items-center justify-center">
        <div className="w-full max-w-md px-6 py-10 md:p-10">
          <div className="mb-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Bem vindo de volta
            </h1>
            <p className="text-gray-500">
              Acesse seu repertorio e gerencie suas músicas
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4 ">
              <div className="">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  placeholder="email@example.com"
                  className="w-full rounded-xl border border-gray-500 p-3"
                  {...register("email")}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="......"
                  className="w-full rounded-xl border border-gray-500 p-3"
                  {...register("password")}
                />
                {errors.password && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className=" text-white font-bold bg-[#030407] p-3 rounded-xl cursor-pointer hover:transition 0.6s hover:opacity-60 flex justify-center items-center gap-2"
                disabled={isSubmitting}
              >
                Entrar no Maestro <FaArrowRight />
              </button>
            </div>
          </form>
          <h3 className="text-center mt-4">
            Ainda não tem uma conta ?{" "}
            <a href="/register" className="underline text-blue-600 font-bold">
              cadastre-se gratuitamente
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
