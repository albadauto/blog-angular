import { Component, OnInit } from '@angular/core';
import { Modal } from 'bootstrap'
import { FormGroup, FormControl } from '@angular/forms'
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  modal!: Modal | undefined
  frmAll!: FormGroup
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.modal = new window.bootstrap.Modal(document.getElementById("exampleModal") as Element);
    this.frmAll = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  openModal(){
    this.modal?.show();
  }
  handleLogin(){
    return this.loginService.verifyLogin(this.frmAll.value).subscribe((response) => {
      console.log(response);
    })
  }
}
