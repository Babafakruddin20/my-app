import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehcileService } from '../vehcile.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

  public vehicleForm: FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacture: new FormControl(),
    model: new FormControl(),
    type: new FormControl (),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl(),
    cost: new FormControl()



  });

  constructor (private  _vehicleService:VehcileService){}

  submit(){
    console.log(this.vehicleForm);
    this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert("created successfully!!!");
      },
      (err:any)=>{
        alert(err.error);
        
      }
    )
  }

}
