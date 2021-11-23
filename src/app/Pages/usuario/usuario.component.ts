import { Component, OnInit } from '@angular/core';
import { MantenimientoService } from '../../Services/mantenimiento.service';
import { MessageService } from 'primeng/api';
import { usuario } from '../../Models/Usuario'; 
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/Models/Validaddor';
interface Combo {
  name?: string,
  code?: string,
  id?:string
}
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  //nombre se registros
  usuario:string|undefined
  passward:string|undefined
  nombre:string|undefined
  correo:string|undefined

  nomPerfil:any[]=[]

  displayBasic: boolean;
  selectedCustomers: any[] = [];
  loading: boolean = false;
  listaToal:any[]=[]
  public frmSignup: FormGroup;
  ListPerfil: Combo[] = []; 
  constructor( private apiService:MantenimientoService
    ,private messageService: MessageService,private router:Router
    ,private fb: FormBuilder) { }

  ngOnInit(): void {
    let parametro=2;
    this.apiService.GetCombo(parametro).subscribe(res=>{
      console.log(res)
      res.forEach(e => {
        this.ListPerfil.push({ code: e.id, name: e.descripcion ,id: e.id  });
      });

    })
    
    this.lista();
    this.createSignupForm()
  }

  createSignupForm() {
    this.frmSignup = this.fb.group({
      usuario:[null, Validators.required],
      nombre:[null, Validators.required],

      correo: [null, Validators.compose([
        Validators.email,
        Validators.required])
     ],
     nomPerfil:[null, Validators.required],
     password:[null,Validators.compose([
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

  Volver(){ 
    this.router.navigate(['/auth/inicio'])
  }

  Registrar(){

    let data: usuario = {};
    let datos=this.frmSignup.value;
    data.nombre=datos.nombre
    data.correo=datos.correo
    data.usuario=datos.usuario
    data.pass=datos.password
    data.perfil=datos.nomPerfil

    console.log(data)

    this.apiService.CreateUsuario(data).subscribe((resp:any)=>{
      this.frmSignup.reset();
      this.messageService.add({severity:resp.status, summary: "", detail:resp.Value}); 
      this.displayBasic = false;
    })
  }
  lista(){
   
    this.apiService.GetListaUsuarios().subscribe((rep:any)=>{
     
      this.listaToal=rep
      
      console.log(this.listaToal)
    })
  }
  showBasicDialog() {
    this.displayBasic = true;
}

 
  
}


