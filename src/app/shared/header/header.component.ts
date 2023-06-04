import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input('sidenav') sidenav: any
  public hasLoggedIn: boolean = false;

  constructor(private apiService: ApiService, private router: Router) { 
    // update loginkey based on login
    this.hasLoggedIn = !!this.apiService.getUserToken()
  }

  ngOnInit(): void {
  }

  userLoggedOut() {
    this.apiService.userLoggedOut()
    this.router.navigateByUrl('/')
  }
}
