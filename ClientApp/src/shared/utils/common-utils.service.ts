import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";

@Injectable()
export class CommonUtilsService {
	getAuditToolTip(_item: any) {
		let tooltip =
			"Created by " +
			_item.createdBy +
			" on " +
			new DatePipe("en-US").transform(_item.createdDateTime, "short") +
			"\n";
		tooltip +=
			"Last modified by " +
			_item.lastModifiedBy +
			" on " +
			new DatePipe("en-US").transform(
				_item.lastModifiedDateTime,
				"short"
			) +
			"\n";
		return tooltip;
	}
}
