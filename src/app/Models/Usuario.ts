import { proceso } from './Mantenimiento';
import { combo } from './combo';
export class usuario{

    usuario?:string;
    pass?:string;
    nombre?:string;
    correo?:string; 
    nombrePerfil?:string;
    perfil?:combo[]| undefined;
}