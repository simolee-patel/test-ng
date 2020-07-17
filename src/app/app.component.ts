import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  register;


  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  registerUser() {
    const username = this.form.value.username;
    const email = this.form.value.email;
    const password = this.form.value.password;
    console.log(this.form.value)
    this.userService.registerNewUser(username, email, password).subscribe(
      Response => {
        alert('User has been created Successfully')
      },
      error =>
        console.log('error', error)
    );
  }
  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

}
