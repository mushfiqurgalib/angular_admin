import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm,ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { laptop } from '../laptop';
import { LaptopService } from '../laptop.service';

@Component({
selector: 'app-addlaptop',
templateUrl: './addlaptop.component.html',
styleUrls: ['./addlaptop.component.css']
})

export class AddlaptopComponent implements OnInit {
    newlaptop = new laptop();

    // selectedFile=null;
    // onFileSelected(event: any){
    //    this.selectedFile=event.target.files(0)
    // }
ang1Form: FormGroup;
constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router,private laptopservice:LaptopService) {
this.ang1Form = this.fb.group({
lname: [''],
ram: ['', Validators.required],
ssd: ['', Validators.required],
imag:['']

});
}

ngOnInit() {
}
// addlaptop(): void {
//     console.log(this.newlaptop);
//     this.laptopservice.addlaptop(this.newlaptop);
//     this.router.navigate(['laptop']);
//   }
postdata(ang1Form: { value: { lname: any; ram: any; ssd: any; imag:any}; })
{
this.dataService.laptopregistration(ang1Form.value.lname,ang1Form.value.ram,ang1Form.value.ssd,ang1Form.value.imag)
.pipe(first())
.subscribe(
data => {
this.router.navigate(['laptop']);
},

error => {
});
}

get lname() { return this.ang1Form.get('lname'); }
get ram() { return this.ang1Form.get('ram'); }
get ssd() { return this.ang1Form.get('ssd'); }
get imag() { return this.ang1Form.get('imag'); }
}