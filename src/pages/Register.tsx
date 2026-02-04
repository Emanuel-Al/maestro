import { FaArrowRight } from "react-icons/fa6";
import { FcMusic } from "react-icons/fc";
import { createUser } from "../api/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Register = () => {
  const schema = z.object({
    name: z
      .string("Nome é necessário")
      .max(99, "O nome não pode ultrapassar 99 caracteres"),
    nickname: z
      .string("nickname é obrigatório")
      .min(4, "O nickname deve ter ao menos 4 caractéres")
      .max(14, "O nickname deve ter no máximo 14 carácteres"),
    email: z.email("Insira um email válido"),
    password: z
      .string()
      .min(6, "A senha deve ter no mínimo 6 caractéres")
      .max(25, "A senha deve ter no máximo 25 carácteres"),
    confirmPassword: z.string("Confirme a senha"),
  });

  type formDataType = z.infer<typeof schema>;

  const onSubmit = async (data: formDataType) => {
    try {
      await createUser(data);
    } catch (e) {
      console.log(e);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<formDataType>({
    resolver: zodResolver(schema),
  });
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4 max-w-2/3">
              <div>
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Seu nome"
                  className="w-full rounded-xl border border-gray-500 p-3"
                  {...register("name")}
                />
                {errors.name && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="nickName">Nickname</label>
                <input
                  type="text"
                  id="nickname"
                  placeholder="Seu nickName"
                  className="w-full rounded-xl border border-gray-500 p-3"
                  {...register("nickname")}
                />
                {errors.nickname && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.nickname.message}
                  </span>
                )}
              </div>
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
                <label htmlFor="password">Senha</label>
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
              <div>
                <label htmlFor="password">Confirmar Senha</label>
                <input
                  type="text"
                  id="confirmPassword"
                  placeholder="......"
                  className="w-full rounded-xl border border-gray-500 p-3"
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className=" text-white font-bold bg-[#030407] p-3 rounded-xl cursor-pointer hover:transition 0.6s hover:opacity-60 flex justify-center"
                disabled={isSubmitting}
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
