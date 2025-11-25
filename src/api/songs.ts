import { API_URL } from "./config";
import type { SongDataInterface } from "../interfaces/SongDataInterface";

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

export async function createSong(songData:SongDataInterface){
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

export async function getSongById(id:number){
    const url = `${API_URL}/songs/${id}`
    try{
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        })
        console.log("Resposta: ", response);
        const song = await response.json();
        return song
    }catch(e:any){
        console.log(e);
    }
}

export async function deleteSong(id:number){
    const url = `${API_URL}/songs/${id}`
    try{
        await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
        })
    }catch(e:any){
        console.log(e);
    }
}

export async function updateSong(id:number,data:SongDataInterface){
    const url = `${API_URL}/songs/${id}`
    try{
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return response.json()
    }catch(e:any){
        console.log(e);
    }
}

export async function getStatusCount(){
    const url = `${API_URL}/songs/count`
    try{
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            }
        });
        return response.json();
    }catch(e:any){
        console.log(e);
    }
}