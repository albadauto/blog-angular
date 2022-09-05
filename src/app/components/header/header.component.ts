import { Component, OnInit } from '@angular/core';
import { Modal } from 'bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Store } from '@ngrx/store';
import { ILogin } from 'src/app/models/login.interface';
import {
  loginAction,
  initialValue,
  unsign,
  IHeader,
} from 'src/app/store/header.store';
import { map } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  modal!: Modal | undefined;
  frmAll!: FormGroup;
  isLogged = this.store.select('login').pipe( map((e) => e.isLogged ))
  login$ = this.store.select('login').pipe(map((e) => e.title));

  constructor(
    private loginService: LoginService,
    private store: Store<{ login: IHeader }>
  ) {}

  ngOnInit(): void {
    this.modal = new window.bootstrap.Modal(
      document.getElementById('exampleModal') as Element
    );
    this.frmAll = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
    if (sessionStorage.getItem('token') !== null) {
      this.store.dispatch(loginAction());
    } else {
      this.store.dispatch(unsign());

    }
  }

  openModal() {
    this.modal?.show();
  }
  handleLogin() {
    return this.loginService
      .verifyLogin(this.frmAll.value)
      .subscribe((response: any) => {
        const token = response.token.token;
        const usr_id = response.id;
        if (token) {
          sessionStorage.setItem('token', token);
          sessionStorage.setItem('usr_id', usr_id);
          this.modal?.hide();
          this.store.dispatch(loginAction());
        }
      });
  }

  unsignLogin() {
    sessionStorage.removeItem('token');
    this.store.dispatch(unsign())
  }
}
