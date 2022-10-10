import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
angForm1: FormGroup;
constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
this.angForm1 = this.fb.group({
email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
password: ['', Validators.required,Validators.minLength(6),Validators.maxLength(10)],
name: ['', Validators.required],
mobile: ['', Validators.required]
});
}

ngOnInit() {
}

postdata(angForm1: { value: { name: any; email: any; password: any; }; })
{
this.dataService.userregistration(angForm1.value.name,angForm1.value.email,angForm1.value.password)
.pipe(first())
.subscribe(
data => {
this.router.navigate(['login']);
},

error => {
    alert("Password too short or long")
});
}

get email() { return this.angForm1.get('email'); }
get password() { return this.angForm1.get('password'); }
get name() { return this.angForm1.get('name'); }
}