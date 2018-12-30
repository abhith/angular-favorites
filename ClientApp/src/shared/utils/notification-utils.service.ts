import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import * as Push from "push.js";
import { MatDialog } from "@angular/material";
import { ConfirmDialogComponent } from "../../app/shared/confirm-dialog/confirm-dialog.component";
import { DeleteEntityDialogComponent } from "../../app/content/pages/components/apps/e-commerce/_shared/delete-entity-dialog/delete-entity-dialog.component";

export enum MessageType {
	Create,
	Read,
	Update,
	Delete,
	Error,
	Success
}

/**
 * This class provides the NotificationUtils service with methods to read names and add names.
 */
@Injectable()
export class NotificationUtilsService {
	constructor(private toastr: ToastrService, private dialog: MatDialog) {}

	// SnackBar for notifications
	showNotification(
		message: string,
		title: string,
		type: MessageType = MessageType.Create,
		showDesktopButton: boolean = false
		// duration: number = 10000,
		// showCloseButton: boolean = true,
		// showUndoButton: boolean = false,
		// undoButtonDuration: number = 3000,
		// verticalPosition: "top" | "bottom" = "top"
	) {
		if (showDesktopButton) {
			Push.create("Success", {
				body: message,
				// body: this.format(userNotification).text,
				// icon:
				// 	abp.appPath + "assets/common/images/app-logo-small.png",
				timeout: 6000,
				onClick: function() {
					window.focus();
					this.close();
				}
			});
		} else {
			if (type === MessageType.Error) {
				this.toastr.error(message, title);
			} else {
				this.toastr.success(message, title);
			}
		}
	}

	delete(
		title: string = "",
		description: string = "",
		waitDescription: string = ""
	) {
		return this.dialog.open(DeleteEntityDialogComponent, {
			data: {
				title,
				description,
				waitDescription
			},
			width: "440px"
		});
	}

	confirm(
		title: string = "",
		description: string = "",
		waitDescription: string = ""
	) {
		return this.dialog.open(ConfirmDialogComponent, {
			data: {
				title,
				description,
				waitDescription
			},
			width: "440px"
		});
	}
}
