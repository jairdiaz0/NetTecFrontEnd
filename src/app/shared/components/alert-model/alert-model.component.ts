import { Component, Input, OnInit } from '@angular/core';
import { AlertModel } from '@core/models/more/alerts.model';

@Component({
  selector: 'app-alert-model',
  templateUrl: './alert-model.component.html',
  styleUrls: ['./alert-model.component.css']
})
export class AlertModelComponent implements OnInit {
  @Input() alert?:AlertModel;
  @Input() showAlert:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  getClass(): Array<String>{
    if(this.alert){
      return this.alert.flag? this.alert.class_true:this.alert.class_false;
    }else{
      return [];
    }
  }
}
