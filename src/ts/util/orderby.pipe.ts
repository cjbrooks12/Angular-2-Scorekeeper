import {Pipe, PipeTransform} from "@angular/core";
import {isNumeric} from "rxjs/util/isNumeric";

@Pipe({name: 'orderBy', pure: false})
export class OrderBy implements PipeTransform {

    transform(input:any, config?: string): any {
        if(!Array.isArray(input)) return input;

        input.sort((a, b) => {
            if(a[config] && b[config]) {
                if(isNumeric(a[config]) && isNumeric(b[config])) {
                    return a[config] - b[config];
                }
                else {
                    return a[config].toString().localeCompare(b[config].toString());
                }
            }
        });

        return input;
    }
}