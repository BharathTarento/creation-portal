import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash-es';
import { FormControl, FormBuilder, Validators, FormGroup, FormArray, FormGroupName } from '@angular/forms';
import { ProgramsService, UserService, FrameworkService, LearnerService ,ContentService, SearchService} from '@sunbird/core';
import { ConfigService, ResourceService, IUserProfile, IUserData,BrowserCacheTtlService } from '@sunbird/shared';
import { Observable, of } from 'rxjs';
import { CacheService } from 'ng2-cache-service';
import { tap, map, first, filter } from 'rxjs/operators';
import { request } from './create-blue-print.component.spec.data'
@Component({
  selector: 'app-create-blue-print',
  templateUrl: './create-blue-print.component.html',
  styleUrls: ['./create-blue-print.component.scss']
})
export class CreateBluePrintComponent implements OnInit {
  public createBlueprintForm: FormGroup;
  public blueprintDetails: any;

  @Input() programDetails: any = {};
  public formIsInvalid = false;
  public showLoader = false;
  public frameworkCategories;
  public frameworkValues={}
  constructor(public resource:ResourceService,public router: Router,private sbFormBuilder: FormBuilder,private browserCacheTtlService: BrowserCacheTtlService,public frameworkService:FrameworkService,public userService: UserService,public configService:ConfigService,public cacheService:CacheService,public learnerService:LearnerService,public programsService:ProgramsService,public contentService:ContentService) { }

  ngOnInit(): void {
    this.initializeCreateBlueprintForm();
    this.fetchFrameWorkDetails(this.userService.hashTagId);
    
  }
  initializeCreateBlueprintForm(){
    this.createBlueprintForm =  this.sbFormBuilder.group({
      name: [null, [Validators.required]],
      assessmentType: [null, [Validators.required]],
      position: [null, [Validators.required]],
      description: [null, [Validators.required]],
      instructions: [null, [Validators.required]],  
      competencySections: this.sbFormBuilder.array([]),
    });
    this.addNewCompetencySectionGroup();
  }

  addNewCompetencySectionGroup(){
    const add = this.createBlueprintForm.get('competencySections') as FormArray;
    add.push(this.sbFormBuilder.group({
      competency: [null, [Validators.required]],
      competencyLevel: [null, [Validators.required]],
      questionType: [null, [Validators.required]],
      availableQuestions: [100],
      requiredQuestions: [null, [Validators.required]],
    }))

    console.log('asdfg',this.createBlueprintForm)
  }

  bluePrintCreate(saveType?){
this.formIsInvalid= true;
    console.log('asdfg',this.createBlueprintForm)
    if(this.createBlueprintForm.status === 'VALID')
      this.router.navigate(['/sourcing/blueprint/blueprint-list']);
  }
  removeCompetencySectionGroup(i) {
    const remove = this.createBlueprintForm.get('competencySections') as FormArray;
    remove.removeAt(i);
  }
  // getValidity(i) {
  //   return (<FormArray>this..createBlueprintFormget('features')).controls[i].invalid;
  // }

  fetchFrameWorkDetails(orgId) {// get framework details here
    this.showLoader = true; // show loader
    this.getDefaultFrameWork(orgId).subscribe(channelData => {
      const frameworkName = _.get(channelData, 'defaultFramework');
      this.programsService.frameworkInitialize(frameworkName); // initialize framework details here
      this.frameworkService.frameworkData$.pipe(filter(data =>
        _.get(data, `frameworkdata.${frameworkName}`)),
        first()).subscribe((frameworkInfo: any) => {
          if (frameworkInfo && !frameworkInfo.err) {
            this.frameworkCategories = _.get(frameworkInfo, `frameworkdata.${frameworkName}.categories`);
            // this.setFrameworkDataToProgram(); // set frame work details
           this.showLoader = false; // hide loader
          }
        });
    });
    console.log(this.frameworkCategories,'this.frameworkCategories');
    const board = _.find(this.frameworkCategories, (element) => {
          return element.code === 'board';
    });
    const subject = _.find(this.frameworkCategories, (element) => {
      return element.code === 'subject';
});

    const difficultyLevel = _.find(this.frameworkCategories, (element) => {
      return element.code === 'difficultyLevel';
});
    if (board) {
      const mediumOption = board.terms;
      if (mediumOption.length) {
        this.frameworkValues[board.code] = board;
      }
    }
    if (difficultyLevel) {
      const mediumOption = board.terms;
      if (mediumOption.length) {
        this.frameworkValues[difficultyLevel.code] = difficultyLevel;
      }
    }
    if (subject) {
      const mediumOption = board.terms;
      if (mediumOption.length) {
        this.frameworkValues[subject.code] = subject;
      }
    }
    console.log(this.frameworkCategories,this.frameworkValues,'this.frameworkCategories');
  }

  // setFrameworkDataToProgram() { // set frame work details
  //   const board = _.find(this.frameworkCategories, (element) => {
  //     return element.code === 'board';
  //   });
  //   if (board) {
  //     const mediumOption = this.programsService.getAssociationData(board.terms, 'medium', this.frameworkCategories);
  //     if (mediumOption.length) {
  //       this.currentFilters['medium'] = mediumOption;
  //     }
  //   }

  //   this.frameworkCategories.forEach((element) => {
  //     const sortedArray = alphaNumSort(_.reduce(element['terms'], (result, value) => {
  //       result.push(value['name']);
  //       return result;
  //     }, []));
  //     const sortedTermsArray = _.map(sortedArray, (name) => {
  //       return _.find(element['terms'], { name: name });
  //     });
  //     this.currentFilters[element['code']] = sortedTermsArray;
  //     // just keek the origional filter data used when not find values from the form
  //     this.originalFiltersScope[element['code']] = sortedTermsArray;
  //   });

  //   const Kindergarten = _.remove(this.currentFilters['gradeLevel'], (item) => {
  //     return item.name === 'Kindergarten';
  //   });
  //   this.currentFilters['gradeLevel'] = [...Kindergarten, ...this.currentFilters['gradeLevel']];
  // }

  getQuestionsCount(index) {
      if(this.createBlueprintForm.value.position && this.createBlueprintForm.value.competencySections[index || 0].competency && this.createBlueprintForm.value.competencySections[index || 0].competencyLevel && this.createBlueprintForm.value.competencySections[index || 0].questionType){
        console.log('hiiiiii')
        // this.searchService.compositeSearch(request).subscribe(res => {
        //   console.log('----------->', res);
          
        // }, err => {
        //   console.log('Something went wrong', err);
        // });
        const req = {
          url: `${this.configService.urlConFig.URLS.COMPOSITE.SEARCH}`,
          data: {
            'request': {
              filters: {
                primaryCategory: [
                    "Multiple Choice Question"
                ],
                board: [
                    "General Nursing Midwifery"
                ],
                subject: [
                    "OT Protocols"
                ],
                difficultyLevel: [
                    "Disinfecting OT and its Equipments"
                ],
                status: [
                    "Live"
                ],
                objectType: [
                    "Question"
                ]
            },
            sort_by: {
                "lastUpdatedOn": "desc"
            }
            }
          }
        };
        this.contentService.post(req).pipe(map(data => {
           console.log(data);
           
        }));
      }
  }

  getDefaultFrameWork(hashTagId): Observable<any> {
    const channelOptions = {
      url: this.configService.urlConFig.URLS.CHANNEL.READ + '/' + hashTagId
    };
    if (this.cacheService.get(hashTagId)) {
      return of(this.cacheService.get(hashTagId));
    } else {
      return this.learnerService.get(channelOptions).pipe(tap(data => this.setChannelData(hashTagId, _.get(data, 'result.channel'))),
        map(data => _.get(data, 'result.channel')));
    }
  }
  setChannelData(hashTagId, channelData) {
    this.cacheService.set(hashTagId ? hashTagId : this.userService.hashTagId, channelData,
      { maxAge: this.browserCacheTtlService.browserCacheTtl });
  }
}
