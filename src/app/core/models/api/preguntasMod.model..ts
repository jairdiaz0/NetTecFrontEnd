import { EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import { RespuestaModel } from "./respuestas.model";
import { SubcategoriaModel } from "./subcategorias.model";
import { UsuarioModel } from "./usuarios.model";

export interface PreguntaModelMod {
    showComments?: boolean;
    showAnswerBox?: boolean;
    observableShared?: EventEmitter<any>;
    id_pregunta?: number;
    id_usuario?: number;
    ID_SUBCATEGORIA?: string;
    titulo: string;
    descripcion: string;
    usuario?: UsuarioModel;
    subcategoria?: SubcategoriaModel;
}