import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser:any;
  tokenView:any;
  user:any
  constructor(private token: TokenStorageService,private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.tokenView = this.token.getToken();
    this.authService.getUser(this.currentUser).subscribe()

  }

}