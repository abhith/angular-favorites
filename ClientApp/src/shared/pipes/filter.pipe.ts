import { filter } from "rxjs/operators";
import { element } from "protractor";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  public transform(value, keys: string, term: string) {
    if (!term) {
      return value;
    }
    return (value || []).filter(item =>
      keys.split(",").some(key => {
        // first level search
        if (
          item.hasOwnProperty(key) &&
          new RegExp(term, "gi").test(item[key])
        ) {
          return true;
        }

        // second level search
        if (
          item.submenu &&
          item.submenu.some(
            subItem =>
              subItem.hasOwnProperty(key) &&
              new RegExp(term, "gi").test(subItem[key])
          )
        ) {
          return true;
        }

        return false;
      })
    );
  }
}
