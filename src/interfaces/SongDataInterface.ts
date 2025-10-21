import type { SongStatus } from "../enums/SongStatus";

export interface SongDataInterface{
    name: string;
    band: {name: string}; 
    album: string;
    status: SongStatus;
    description?: string;
    tuning: {name: string}; 
}