import { ICategoria } from "./icategoria";

export interface IProducte {
    id: number;
    nom: string;
    preu: number;
    categoria: ICategoria;
    consola: string;
    Image: any;
}