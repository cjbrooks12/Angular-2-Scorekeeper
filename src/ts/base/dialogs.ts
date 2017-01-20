import {Component} from "@angular/core";
import {Observable} from 'rxjs/Rx';
import {MdDialogRef, MdDialog, MdDialogConfig} from '@angular/material';
import {Injectable, ViewContainerRef} from '@angular/core';


@Component({
    selector: 'confirm-dialog',
    template: `
        <p>{{ title }}</p>
        <p>{{ message }}</p>
        <button type="button" md-raised-button (click)="dialogRef.close(true)">OK</button>
        <button type="button" md-button        (click)="dialogRef.close()"    >Cancel</button>
    `,
})
export class ConfirmDialog {

    public title: string;
    public message: string;

    constructor(public dialogRef: MdDialogRef<ConfirmDialog>) {

    }
}

@Component({
    selector: 'prompt-dialog',
    template: `
        <p>{{ title }}</p>
        <p>{{ message }}</p>
        <div>
            <md-input-container>
                <input md-input *ngIf="inputType == 'text'" type="text" placeholder="Enter a value" name="promptvalue" [(ngModel)]="value">
                <input md-input *ngIf="inputType == 'number'" type="number" placeholder="Enter a value" name="promptvalue" [(ngModel)]="value">
            </md-input-container>
        </div>
        <button type="button" md-raised-button (click)="dialogRef.close(value)">OK</button>
        <button type="button" md-button        (click)="dialogRef.close()"    >Cancel</button>
    `,
})
export class PromptDialog {
    public title: string;
    public message: string;
    public value: any;
    public inputType: string;

    constructor(public dialogRef: MdDialogRef<ConfirmDialog>) {

    }
}

@Injectable()
export class DialogsService {

    constructor(private dialog: MdDialog) {
    }

    public confirm(title: string, message: string, viewContainerRef: ViewContainerRef): Observable<boolean> {

        let dialogRef: MdDialogRef<ConfirmDialog>;
        let config = new MdDialogConfig();
        config.viewContainerRef = viewContainerRef;

        dialogRef = this.dialog.open(ConfirmDialog, config);

        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();
    }

    public prompt(title: string, message: string, inputType: string, viewContainerRef: ViewContainerRef): Observable<boolean> {

        let dialogRef: MdDialogRef<PromptDialog>;
        let config = new MdDialogConfig();
        config.viewContainerRef = viewContainerRef;

        dialogRef = this.dialog.open(PromptDialog, config);

        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        dialogRef.componentInstance.inputType = inputType;

        return dialogRef.afterClosed();
    }
}