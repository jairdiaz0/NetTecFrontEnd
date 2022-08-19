import { PreguntaModel } from "./preguntas.model";
import { UsuarioModel } from "./usuarios.model";

export interface RespuestaModel {
    id_respuesta?: number;
    id_pregunta?: number;
    id_usuario?: number;
    contenido: String;
    ranking: number;
    usuario?:UsuarioModel;
    pregunta?: PreguntaModel;
    id_users_like?: Array<number>;
}