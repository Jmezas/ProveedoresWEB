import { combo } from './combo';
export class usuario {
    idUsuario?: number;
    usuario?: string;
    pass?: string;
    nombre?: string;
    correo?: string;
    nombrePerfil?: string;
    perfil?: combo[] | undefined;
}