import { Component, OnInit } from '@angular/core';
import { IImpressionEventInput, IInteractEventEdata, IInteractEventObject, TelemetryService } from '@sunbird/telemetry';
import { ConfigService, ResourceService, IUserProfile, IUserData } from '@sunbird/shared';
import { SourcingService, HelperService } from '../../../sourcing/services';
import * as _ from 'lodash-es';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blue-print-list',
  templateUrl: './blue-print-list.component.html',
  styleUrls: ['./blue-print-list.component.scss']
})
export class BluePrintListComponent implements OnInit {
  public searchInput: any;
  public showLoader = false;
  public blueprintcount = 10;
  public mangeBlueprintContextualConfig: any;
  public noMangeBlueprintContextualConfig: any
  public telemetryInteractCdata: any;
  public telemetryInteractPdata: any;
  public telemetryInteractObject: any;
  public blueprints=[
    {
      "name":"Blueprint 1",
      "assessmentName": "Questions on Human Body Basics",
      "subject": "[\"OT Protocols\"]",
      "framework": "[\"nirayama_frccl_fw\"]",
      "board": "[\"General Nursing Midwifery\"]",
      "gradeLevel": "[\"Physical Set Up of OT and its equipments, Theatre Techniques\"]",
      "medium": "[\"Medical Surgical Nursing-I\"]",
      "createdon": "2023-03-21T12:05:26.186Z",
      "publishedon": "2023-03-21T12:05:25.534Z",
      "status":"Draft"
    },
    {
      "name":"Blueprint 2",
      "assessmentName": "Questions on Human Body Basics",
      "subject": "[\"OT Protocols\"]",
      "framework": "[\"nirayama_frccl_fw\"]",
      "board": "[\"General Nursing Midwifery\"]",
      "gradeLevel": "[\"Physical Set Up of OT and its equipments, Theatre Techniques\"]",
      "medium": "[\"Medical Surgical Nursing-I\"]",
      "createdon": "2023-03-21T12:05:26.186Z",
      "publishedon": "2023-03-21T12:05:25.534Z",
      "status":"Live"
    }
  ];
  


  // public position;
  // public showNormalModal;
  // public telemetryInteractCdata: any;
  // public telemetryInteractPdata: any;
  // public telemetryInteractObject: any;
  // public orgLink;
  // public paginatedContributorOrgUsers: any = [];
  // public allContributorOrgUsers: any = [];
  // public impressionEventTriggered: Boolean = false;
  // public contributorOrgUsers: any = [];
  // public tempSortOrgUser: any = [];
  public direction = 'desc';
  public sortColumn = 'selectedRole';
  constructor(public resourceService: ResourceService,private helperService: HelperService,public router: Router) { }

  ngOnInit(): void {
    
    this.setContextualHelpConfig();
  }

  setContextualHelpConfig() {
    const sunbirdContextualHelpConfig = this.helperService.getContextualHelpConfig();
    console.log('sunbirdContextualHelpConfig', sunbirdContextualHelpConfig);
    if (!_.isUndefined(sunbirdContextualHelpConfig) && _.has(sunbirdContextualHelpConfig, 'sourcing.manageUsers')) {
      this.mangeBlueprintContextualConfig = _.get(sunbirdContextualHelpConfig, 'sourcing.manageUsers');
    }
    if (!_.isUndefined(sunbirdContextualHelpConfig) && _.has(sunbirdContextualHelpConfig, 'sourcing.noUsersFound')) {
      this.noMangeBlueprintContextualConfig = _.get(sunbirdContextualHelpConfig, 'sourcing.noUsersFound');
    }
  }

  getBlueprintDetailsBySearch(clearInput?:string) {

  }
  // sortCollection(column) {
  //   this.sortUsersList(this.blueprints);
  //   if (this.direction === 'asc' || this.direction === '') {
  //     this.direction = 'desc';
  //   } else {
  //     this.direction = 'asc';
  //   }
  //   this.sortColumn = column;
  // }

  getTelemetryInteractEdata(id: string, type: string, subtype: string,  pageid: string, extra?: any): IInteractEventEdata {
    return _.omitBy({
      id,
      type,
      subtype,
      pageid,
      extra
    }, _.isUndefined);
  }
  
  editBlueprint(){
    this.router.navigate(['/sourcing/blueprint/create-blueprint']);
    // this.router.navigate(['/resources']);
  }
}
