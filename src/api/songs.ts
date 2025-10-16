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

export async function createSong(songData:{name:string,band:string,status:string}){
    const url = `${API_URL}/songs/`
    try{
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(songData)
        });
        if(response.ok){
            console.log(response.json());
        }
        const song = await response.json();
        return song;
    }catch(e:any){
        console.log(e.message);
    }
}