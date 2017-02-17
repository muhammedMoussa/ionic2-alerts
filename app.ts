import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: `
    <ion-header>
    <ion-navbar>
      <ion-title text-center>
        Alerts
      </ion-title>
    </ion-navbar>
  </ion-header>

  <ion-content padding> 

    <button ion-button block round (click)="showAlert()" color="danger">Show Alert!</button>
    <button ion-button block round (click)="showConfirm()" color="danger">Show Confirm!</button>
    <button ion-button block round (click)="showPrompt()" color="light">Show Prompt!</button>
    <button ion-button block round (click)="showRadio()" color="dark">Show Radio!</button>
    <button ion-button block round (click)="showCheckbox()" color="dark">Show Checkbox!</button>

  </ion-content>
  `
})

export class HomePage {

  testRadioOpen: boolean;
  testRadioResult;

  testCheckOpen: boolean;
  testCheckResult;

  constructor(public alertCtrl: AlertController){}

  showAlert(){

    let alert = this.alertCtrl.create({
      title: 'Alert Title!',
      subTitle: 'This is subtitle',
      buttons: ['Ok']
    });

    alert.present();

  }

  showConfirm(){
    let alert = this.alertCtrl.create({
      title: 'Confirm Title!',
      message: 'Hello From Confirm!',
      buttons: [
        
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Canceled');
        }

        },

        {
          text:'Ok',
          handler: () => {
            console.log('Ok')
          }
        }  

      ]
    });

    alert.present();
  }

  showPrompt(){
    let alert = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'username',
          placeholder: 'Enter your username'
        },
        {
          name: 'password',
          placeholder: 'password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Canceled');
          }
        },
        {
          text: 'Login',
          handler: () => {
            console.log('Logined!');
          }
        }
      ]
    });
    alert.present();
  }

 showRadio(){
   
   let alert = this.alertCtrl.create();
   
   alert.setTitle('Radio Alert!');

   alert.addInput({
     type: 'radio',
     label: 'Radio 1',
     value: 'radio1'
   });

   alert.addInput({
     type: 'radio',
     label: 'Radio 2',
     value: 'radio2',
     checked: true
   });
   
   alert.addInput({
     type: 'radio',
     label: 'Radio 3',
     value: 'radio3'
   });
   
   alert.addButton('Cancel');

   alert.addButton({
     text: 'Ok',
     handler: data => {
       console.log('Radio:', data);
       this.testRadioOpen = false;
       this.testRadioResult = data;
     }
   });

   alert.present().then ( () => {
     this.testRadioOpen = true;
   });

 }

  showCheckbox(){
    
    let alert = this.alertCtrl.create();
    
    alert.setTitle('Checkbox Alert!');

    alert.addInput({
      type: 'checkbox',
      label: 'Checkbox 1',
      value: 'checkbox1'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Checkbox 2',
      value: 'checkbox2',
      checked: true
    });
    
    alert.addInput({
      type: 'checkbox',
      label: 'Checkbox 3',
      value: 'checkbox3'
    });
    
    alert.addButton('Cancel');

    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio:', data);
        this.testcheckboxOpen = false;
        this.testcheckboxResult = data;
      }
    });

    alert.present().then ( () => {
      this.testcheckboxOpen = true;
    });

  }

}
