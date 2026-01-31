import { API_URL } from "./config";

export const getTuningOptions = async () => {
  const url = `${API_URL}/tuning`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Erro ao retornar afinações");
    }
    const data = await response.json();
    return data.map((tuning: { name: string }) => tuning.name);
  } catch (e) {
    console.log(e);
  }
};
