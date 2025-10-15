import { API_URL } from "./config";

export async function getSongs(){
    const url = `${API_URL}/songs/`
    try{
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`)
        }
        const data = await response.json();
        return data;
    }catch(e:any){
        console.log(e.message);
        return [];
    }
}