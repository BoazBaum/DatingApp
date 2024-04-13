import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  registerMode = false;
  users: any;
  constructor() { }

  ngOnInit(): void {
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean){
    this.registerMode = event;
  }
}
