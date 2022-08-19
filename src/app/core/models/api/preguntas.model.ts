import { SubcategoriaModel } from "./subcategorias.model";
import { UsuarioModel } from "./usuarios.model";

export interface PreguntaModel {
    id_pregunta?: number;
    id_usuario?: number;
    id_subcategoria?: string;
    titulo: string;
    descripcion: string;
    usuario?: UsuarioModel;
    subcategoria?: SubcategoriaModel;
}