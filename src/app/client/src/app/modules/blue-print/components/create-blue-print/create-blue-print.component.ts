import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService, ResourceService, IUserProfile, IUserData } from '@sunbird/shared';

@Component({
  selector: 'app-create-blue-print',
  templateUrl: './create-blue-print.component.html',
  styleUrls: ['./create-blue-print.component.scss']
})
export class CreateBluePrintComponent implements OnInit {

  constructor(public resource:ResourceService,public router: Router) { }

  ngOnInit(): void {
  }

  bluePrintCreate(saveType?){
    this.router.navigate(['/sourcing/blueprint/blueprint-list']);
  }
  

}
