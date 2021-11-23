import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { proceso } from 'src/app/Models/Mantenimiento';
import { AuthService } from 'src/app/Services/Auth.Service';
import { ProcesoService } from 'src/app/Services/proceso.service';
import {  FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/Models/Validaddor';
@Component({
  selector: 'app-reset-pasword',
  templateUrl: './reset-pasword.component.html',
  styleUrls: ['./reset-pasword.component.scss']
})
export class ResetPaswordComponent implements OnInit {

  passworord:string
  passordOld:string
  valueToken?:String
  fieldTextType: boolean;
  fieldTextType2: boolean;
  public frmSignup: FormGroup;
  constructor(private api:ProcesoService,private messageService: MessageService,private activatedRoute: ActivatedRoute,
    private auth: AuthService,private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createSignupForm();
    let data: proceso = {};
    this.activatedRoute.queryParams.subscribe(params => {
      data.nombre=(params["token"])
      this.valueToken=params["token"]
      this.auth.Validtoken(data).subscribe((res:any)=>{  
        if(res.Value=='0'){
          this.router.navigate(['/auth/login']);
        }
      })
   })
  } 
  createSignupForm() {
    this.frmSignup = this.fb.group({
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
  Procesar(){
    
    if(this.passworord===this.passordOld){ 
      let data=this.frmSignup.value;
      let cambio:proceso={}
      
    
      cambio.value = this.valueToken?.toString()
      cambio.nombre=data.confirmPassword;
      
      this.api.UploadPassword(cambio).subscribe((resp:any)=>{
    
          this.messageService.add({severity:resp.status, summary: "", detail:resp.Value});
          stateChange()
          this.router.navigate(['/auth/login']);
      })
    }
    else{
      this.messageService.add({severity:'info', summary: "", detail:"la contraseña no coincide"});
    }

 
   
  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  toggleFieldTextType2() {
    this.fieldTextType2 = !this.fieldTextType2;
  }
}

function stateChange() {
  setTimeout(function(){
    
  }, 5000);
}