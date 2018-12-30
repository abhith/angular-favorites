import { NotificationUtilsService } from "./../../../shared/utils/notification-utils.service";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatIconModule,
  MatProgressBarModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatSelectModule
} from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  declarations: [
    // Shared
  ],
  exports: [],
  entryComponents: []
})
export class AppCommonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppCommonModule,
      providers: [NotificationUtilsService]
    };
  }
}
