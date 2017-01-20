import { Injectable } from '@angular/core';
declare var PouchDB: any;

@Injectable()
export class DbService {
    public constructor() {
    }

    public getInstance(table: string) {
        return new PouchDB(table);
    }

    public static generateGuid(table?: string): Promise<string> {
        if(table) {
            return new DbService().getInstance(table).info().then(function (info) {
                let result, i, j;
                result = '';

                result += info.update_seq + '-';

                for(j=0; j<32; j++) {
                    i = Math.floor(Math.random()*16).toString(16).toUpperCase();
                    result = result + i;
                }

                return result;
            });
        }
        else {
            return new Promise((resolve, reject) => {
                let result, i, j;
                result = '';

                for(j=0; j<32; j++) {
                    i = Math.floor(Math.random()*16).toString(16).toUpperCase();
                    result = result + i;
                }

                resolve(result);
            });
        }
    }
}