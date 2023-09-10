import { Component, Input } from '@angular/core';

@Component({

 selector:'my-button',
 templateUrl:'./button.component.html',
 styleUrls: ['./button.component.css'],
  

})
export class Button {
   
 @Input() label: string = '';
  buttonText: string = 'ACESSAR';
  btnumero: number = 1;
  btvetor: string[] = ['TESTE1', 'TESTE2'];
 btObject = {
 label: 'add ao carrinho',
 label2: 'label2 teste',

 }

 getAlert2(){
 
  alert(this.label);

 }

 getAlert(num: number){
 
  alert(num);

 }

}