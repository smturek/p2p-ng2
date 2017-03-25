import { Component } from '@angular/core';

import { DISORDERS } from '../disorders'

@Component({
    moduleId: module.id,
    selector: 'header-bar',
    templateUrl: './header-bar.component.html',
    styleUrls: ['./header-bar.component.css']
})

export class HeaderBar {
    tab = "";
    disorder: {} = null;
    disorders = DISORDERS;

    setTab(tab: string): void {
        if (tab != 'disorders') {
            this.disorder = null;
        }

        this.tab = tab;
    }

    setDisorder(disorder: object): void {
        this.disorder = disorder;
    }
}
