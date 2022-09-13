import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiCallService } from 'src/app/services/apiCall.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private apicallService:ApiCallService,
    ) { }


  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['']
  });


  ngOnInit(): void {
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: '',
       
    });
  }

  login(){
    console.log(this.profileForm.value);

    this.apicallService.getDataWithPost('/login',this.profileForm.value)
    .subscribe((data: any) => {

      console.log(data);

    });

  }

}
