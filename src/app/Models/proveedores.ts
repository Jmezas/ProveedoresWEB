import { usuario } from "./Usuario"

export class Proveedores {

    ruc?: String
    razon_social?: String
    categoria?: String
    comprador?: String
    evaluador?: String
    gasto_proveedor?: String
    fecha_caducidad?: String
    fecha_caducidad_1?: String
    fecha_inicio_proceso?: string
    fecha_inicio_evaluacion?: string
    telefono?: String
    correo?: String
    grupo?: String
    usuario: usuario[]
}