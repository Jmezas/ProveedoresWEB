import { Component, OnInit, ViewChild } from '@angular/core';
import { MantenimientoService } from '../../Services/mantenimiento.service';
import { MessageService } from 'primeng/api';
import { usuario } from '../../Models/Usuario';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/Models/Validaddor';
import Swal from 'sweetalert2'
import { dataEnvio } from 'src/app/Models/datoEnvio';
import { Table } from 'primeng/table';
interface Combo {
  name?: string,
  code?: string,
  id?: string
}
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  //nombre se registros
  usuario: string | undefined
  passward: string | undefined
  nombre: string | undefined
  correo: string | undefined

  nomPerfil: any[] = []

  displayBasic: boolean;
  selectedCustomers: any[] = [];
  loading: boolean = false;
  listaToal: any[] = []
  public frmSignup: FormGroup;
  ListPerfil: Combo[] = [];
  fieldTextType: boolean;
  fieldTextType2: boolean;
  @ViewChild('dt') table: Table;
  constructor(private apiService: MantenimientoService
    , private messageService: MessageService, private router: Router
    , private fb: FormBuilder) { }

  ngOnInit(): void {
    let parametro = 2;
    this.apiService.GetCombo(parametro).subscribe(res => {

      res.forEach(e => {
        this.ListPerfil.push({ code: e.id, name: e.descripcion, id: e.id });
      });

    })

    this.lista();
    this.createSignupForm()
  }

  createSignupForm() {
    this.frmSignup = this.fb.group({
      id: [null, 0],
      usuario: [null, Validators.required],
      nombre: [null, Validators.required],

      correo: [null, Validators.compose([
        Validators.email,
        Validators.required])
      ],
      nomPerfil: [null, Validators.required],
      password: [null, Validators.compose([
        Validators.required,
        CustomValidators.patternValidator(/\d/, { hasNumber: true }),
        CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
        CustomValidators.patternValidator(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/, { hasSpecialCharacters: true }),
        Validators.minLength(8)])
      ],
      confirmPassword: [null, Validators.compose([Validators.required])]
    },
      {
        validator: CustomValidators.passwordMatchValidator
      })
  }

  Volver() {
    this.router.navigate(['/auth/inicio'])
  }

  Registrar() {

    let data: usuario = {};
    let datos = this.frmSignup.value;
    if (datos.id == null) {
      data.idUsuario = 0
    } else {

      data.idUsuario = datos.id
    }

    data.nombre = datos.nombre
    data.correo = datos.correo
    data.usuario = datos.usuario
    data.pass = datos.password
    data.perfil = datos.nomPerfil

    this.apiService.CreateUsuario(data).subscribe((resp: any) => {
      this.frmSignup.reset();
      this.messageService.add({ severity: resp.status, summary: "", detail: resp.Value });
      this.displayBasic = false;
      this.lista();
    })
  }
  lista() {

    this.apiService.GetListaUsuarios().subscribe((rep: any) => {

      this.listaToal = rep

      console.log(this.listaToal)
    })
  }
  showBasicDialog() {
    this.frmSignup.reset();
    this.displayBasic = true;
  }

  eliminar(constumer: any) {
    Swal.fire({
      title: `¿estas seguro de eliminar a ${constumer["nombre"]}?  `,
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si, elimiar!'
    }).then((result) => {
      if (result.isConfirmed) {
        let data: dataEnvio = {}
        data.id = 1;
        data.codigo = constumer.idUsuario;
        this.apiService.EliminarData(data).subscribe((res: any) => {

          console.log(res)
          Swal.fire(
            'Eliminado!',
            res.Value,
            res.status
          )
          this.lista();
        })
      }
    })


  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleFieldTextType2() {
    this.fieldTextType2 = !this.fieldTextType2;

  }

  obtenerUsuario(codigo: any) {
    this.displayBasic = true;
    this.apiService.GetUsuarios(codigo["idUsuario"]).subscribe((des: any) => {
      console.log(des)
      this.frmSignup.controls["id"].setValue(des.idUsuario)
      this.frmSignup.controls["nombre"].setValue(des.nombre)
      this.frmSignup.controls["usuario"].setValue(des.usuario)
      this.frmSignup.controls["password"].setValue(des.pass)
      this.frmSignup.controls["confirmPassword"].setValue(des.pass)
      this.frmSignup.controls["correo"].setValue(des.correo)
      let end = this.ListPerfil.find(e => e.id = des.perfil.id)
      this.frmSignup.controls["nomPerfil"].patchValue(end)

    })
  }

}


