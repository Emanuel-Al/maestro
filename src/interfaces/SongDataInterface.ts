import type { SongStatus } from "../enums/SongStatus";

export interface SongDataInterface{
    name: string;
    band: string; 
    album: string;
    status: SongStatus;
    description: string;
    tuning: string; 
}