"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var disorders_1 = require('../disorders');
var HeaderBar = (function () {
    function HeaderBar() {
        this.tab = "";
        this.disorder = null;
        this.disorders = disorders_1.DISORDERS;
    }
    HeaderBar.prototype.setTab = function (tab) {
        if (tab != 'disorders') {
            this.disorder = null;
        }
        this.tab = tab;
    };
    HeaderBar.prototype.setDisorder = function (disorder) {
        this.disorder = disorder;
    };
    HeaderBar = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'header-bar',
            templateUrl: './header-bar.component.html',
            styleUrls: ['./header-bar.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderBar);
    return HeaderBar;
}());
exports.HeaderBar = HeaderBar;
//# sourceMappingURL=header-bar.component.js.map