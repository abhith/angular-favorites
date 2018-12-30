import { DataService } from "./services/data.service";
import { DisableControlDirective } from "./directives/disable-control.directive";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  MatIconModule,
  MatProgressBarModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatButtonModule,
  MatTooltipModule,
  MatSortModule,
  MatPaginatorModule,
  MatTableModule
} from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";
import { ConfirmDialogComponent } from "./components/confirm-dialog/confirm-dialog.component";
import { NotificationUtilsService } from "./utils/notification-utils.service";
import { CommonUtilsService } from "./utils/common-utils.service";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,

    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule
  ],
  declarations: [ConfirmDialogComponent, DisableControlDirective],
  exports: [ConfirmDialogComponent, DisableControlDirective],
  entryComponents: [ConfirmDialogComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        NotificationUtilsService,
        {
          provide: MAT_DIALOG_DEFAULT_OPTIONS,
          useValue: {
            hasBackdrop: true,
            panelClass: "m-mat-dialog-container__wrapper",
            height: "auto",
            width: "900px"
          }
        },
        CommonUtilsService,
        DataService
      ]
    };
  }
}
