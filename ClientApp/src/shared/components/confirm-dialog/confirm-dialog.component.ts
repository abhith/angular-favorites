import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { MessageType } from "../../models/enums/message-type.enum";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "confirm-dialog",
  templateUrl: "./confirm-dialog.component.html"
})
export class ConfirmDialogComponent implements OnInit {
  viewLoading = false;

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    /* Server loading imitation. Remove this */
    this.viewLoading = true;
    setTimeout(() => {
      this.dialogRef.close(true); // Keep only this row
    }, 2500);
  }

  // UI
  getYesActionButtonText(): string {
    switch (this.data.type) {
      case MessageType.Delete:
        return "Delete";
    }
    return "OK";
  }
}
