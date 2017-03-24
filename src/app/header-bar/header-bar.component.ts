import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'header-bar',
    templateUrl: './header-bar.component.html',
    styleUrls: ['./header-bar.component.css']
})

export class HeaderBar {
    tab = "disorders"

    setTab(tab: string): void {
        this.tab = tab;
    }
}
