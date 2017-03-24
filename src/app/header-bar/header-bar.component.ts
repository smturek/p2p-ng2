import { Component } from '@angular/core';

import { DISORDERS } from '../disorders'

@Component({
    moduleId: module.id,
    selector: 'header-bar',
    templateUrl: './header-bar.component.html',
    styleUrls: ['./header-bar.component.css']
})

export class HeaderBar {
    tab = "disorders";
    disorders = DISORDERS;

    setTab(tab: string): void {
        this.tab = tab;
    }
}
