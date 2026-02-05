import { FaArrowRight } from "react-icons/fa6";
import { FcMusic } from "react-icons/fc";
import { createUser } from "../api/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Register = () => {
  const schema = z
    .object({
      name: z
        .string()
        .min(1, "Nome é necessário")
        .max(99, "O nome não pode ultrapassar 99 caracteres"),
      nickname: z
        .string()
        .min(4, "O nickname deve ter ao menos 4 caracteres")
        .max(14, "O nickname deve ter no máximo 14 caracteres"),
      email: z.string().email("Insira um email válido"),
      password: z
        .string()
        .min(6, "A senha deve ter no mínimo 6 caracteres")
        .max(25, "A senha deve ter no máximo 25 caracteres"),
      confirmPassword: z.string().min(1, "Confirme a senha"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "As senhas não coincidem",
      path: ["confirmPassword"],
    });
  type FormDataType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormDataType>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormDataType) => {
    try {
      if (data.password != data.confirmPassword) {
      }
      await createUser(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="min-h-screen w-full md:flex overflow-x-hidden">
      <div className="bg-[#06080E] w-full md:1/2 p-12 flex flex-col gap-50 ">
        <div className="flex gap-2 items-center">
          <FcMusic size={25} />
          <h3 className="text-white font-bold text-xl">MAESTRO APP</h3>
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-white text-3xl md:text-6xl font-bold max-w-xl">
            Comece sua jornada musical.
          </h1>
          <p className="text-white text-base md:text-xl max-w-xl">
            Junte-se a outros músicos e organize seu repertório de forma simples
            e intuitiva.
          </p>
        </div>
      </div>

      <div className="bg-[#fff] w-full md:1/2 flex items-center justify-center">
        <div className="w-full max-w-md px-6 py-10 md:p-10">
          <div className="mb-8">
            <h1 className="text-2xl md:text-4xl font-bold">Criar uma conta</h1>
            <p className="text-gray-500">
              Preencha os dados abaixo para começar.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
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
                  <span className="text-red-500 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div>
                <label htmlFor="nickname">Nickname</label>
                <input
                  type="text"
                  id="nickname"
                  placeholder="Seu nickname"
                  className="w-full rounded-xl border border-gray-500 p-3"
                  {...register("nickname")}
                />
                {errors.nickname && (
                  <span className="text-red-500 text-sm">
                    {errors.nickname.message}
                  </span>
                )}
              </div>

              <div>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  placeholder="email@example.com"
                  className="w-full rounded-xl border border-gray-500 p-3"
                  {...register("email")}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
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
                  <span className="text-red-500 text-sm">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword">Confirmar Senha</label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="......"
                  className="w-full rounded-xl border border-gray-500 p-3"
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <span className="text-red-500 text-sm">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="text-white font-bold bg-[#030407] p-3 rounded-xl flex justify-center items-center gap-2 hover:opacity-60 transition"
                disabled={isSubmitting}
              >
                Criar conta <FaArrowRight />
              </button>
            </div>
          </form>

          <h3 className="mt-6 text-sm">
            Já tem uma conta?{" "}
            <a href="/" className="underline text-blue-600 font-bold">
              faça login
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Register;
