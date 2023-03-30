import { CoreModule } from '@sunbird/core';
import { SharedModule } from '@sunbird/shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiModule } from 'ng2-semantic-ui-v9';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedFeatureModule } from '@sunbird/shared-feature';
import { BluePrintRoutingModule } from './blue-print-routing.module';
import { NgInviewModule } from 'angular-inport';
import { TelemetryModule } from '@sunbird/telemetry';
import { DynamicModule } from 'ng-dynamic-component';
import { SourcingModule } from '../sourcing/sourcing.module';
import { CollectionComponent, DashboardComponent, ChapterListComponent } from '../sourcing';
import { CommonConsumptionModule} from '@project-sunbird/common-consumption-v8';
import { CommonFormElementsModule } from 'common-form-elements-web-v9';
import { CreateBluePrintComponent } from './components/create-blue-print/create-blue-print.component';
import { BluePrintListComponent } from './components/blue-print-list/blue-print-list.component';

@NgModule({
  declarations: [
    // tslint:disable-next-line:max-line-length
   
    CreateBluePrintComponent,
    BluePrintListComponent
  ],
  imports: [
  SuiModule,
    CommonModule,
    BluePrintRoutingModule,
    CommonConsumptionModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
    NgInviewModule,
    TelemetryModule,
    SourcingModule,
    SharedFeatureModule,
    CommonFormElementsModule,
    DynamicModule.withComponents([CollectionComponent, DashboardComponent, ChapterListComponent])
  ],
  exports: [
    
  ]
})
export class BluePrintModule { }
