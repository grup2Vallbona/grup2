import { IPersona } from "./ipersona";
import { IEntitat } from "./ientitat";

export interface IUsuari {
    idUsuari: number;
    idPersona: IPersona;
    idEscola: IEntitat;
    nom: string;
    idioma: number;
    genere: number;
    pais: number;
    contrasenya: string;
    email: string;
    descripcio: string; 
    vacunaCOVID: string;
    imagen: any;
}