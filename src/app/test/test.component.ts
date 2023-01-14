import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  usuario = "Julio Cesar Moreno";
  bt = 0;
  datosBeneficiario:any;
  listaBeneficiario:any[] = [];
  temp:any;
  max_pago = 6000;
  parcelas = 12;
  monto = 100;
  tipo_dep = -1
  telf_val = 1;
  constructor() { }

  ngOnInit(): void {
  }
   cargar_datos(){
   
    
   }
   funcion1(op:number){
    
   }
   valida_sms(){
    
   }
}
