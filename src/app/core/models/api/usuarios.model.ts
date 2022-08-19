import { PersonaModel } from "./personas.model";
import { RoleModel } from "./roles.model";

export interface UsuarioModel {
    id_usuario?: number;
    id_persona?: number;
    id_rol?: number;
    correo: string;
    contrasena: string;
    persona?: PersonaModel;
    rol?: RoleModel;
}