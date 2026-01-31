import { API_URL } from "./config";

export async function getBandOptions() {
  const url = `${API_URL}/bands`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Erro ao pegar bandas");
    }
    const data = await response.json();
    return data.map((band: { name: string }) => band.name);
  } catch (e) {
    console.log(e);
  }
}
