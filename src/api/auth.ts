import { API_URL } from "./config";

interface loginForm {
  email: string;
  password: string;
}

export async function authUser(loginData: loginForm) {
  const url = `${API_URL}/user/auth/`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(loginData),
    });

    console.log(JSON.stringify(loginData));

    if (!response.ok) {
      throw new Error("Erro autenticando usuário");
    }
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
