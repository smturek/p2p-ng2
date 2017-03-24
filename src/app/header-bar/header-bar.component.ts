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
    disorder = "";
    disorders = DISORDERS;

    setTab(tab: string): void {
        if (tab != 'disorders') {
            this.disorder = "";
        }

        this.tab = tab;
    }

    setDisorder(disorder: string): void {
        this.disorder = disorder;
    }
}
