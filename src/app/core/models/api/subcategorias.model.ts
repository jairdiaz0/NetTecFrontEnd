import { CategoriaModel } from "./categorias.model";

export interface SubcategoriaModel {
    id_subcategoria?: string;
    id_categoria?: string;
    titulo_subcategoria: string;
    categoria?: CategoriaModel;
}