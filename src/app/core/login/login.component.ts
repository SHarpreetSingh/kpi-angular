import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IloginResponse } from '../interface/core.interface';
import { CoreService } from '../service/core.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: CoreService, private router: Router) { }

  ngOnInit(): void {
  }

  addUserRequest() {
    let loginData = {
      email: '',
      password: ''
    }
    // this.loginService.getLogin(loginData).subscribe((res: IloginResponse) => {
    //   if (res.code === 200)
        const token = 'cn task'
        localStorage.setItem('token', token)
        this.router.navigateByUrl('/admin/kpi')
    // })
  }
}
