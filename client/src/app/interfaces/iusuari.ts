import { Persona } from "./ipersona";
import { Entitat } from "./ientitat";

export interface Usuari {
    idUsuari: number;
    idPersona: Persona;
    idEscola: Entitat;
    nickname: string;
    idioma: number;
    genere: number;
    pais: number;
    contrasenya: string;
    email: string;
    descripcio: string; 
    vacunaCOVID: string;
    imagen: any;
}