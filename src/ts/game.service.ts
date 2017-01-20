import {Injectable} from '@angular/core';
import {DbService} from "./db.service";

@Injectable()
export class GameService {

    settings: any;

    public constructor(dbService: DbService) {
        this.settings = dbService.getInstance("settings");
    }

    public getPreference(key: string, defValue: any): any {
        return this.settings.get(key).then((doc) => {
            if(doc.preference !== undefined) {
                return doc.preference;
            }
            else {
                return defValue;
            }
        })
        .catch(() => {
            return defValue;
        });
    }

    public setPreference(key: string, value: any) {
        return this.settings.get(key).then((doc) => {
            return this.settings.put({
                _id: key,
                _rev: doc._rev,
                preference: value,
            });
        }).then((response) => {

        }).catch((err) => {
            console.log(err);
            return this.settings.put({
                _id: key,
                preference: value,
            });
        });
    }


}