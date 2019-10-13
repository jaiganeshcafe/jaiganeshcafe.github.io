(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>about-us works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n  <!-- Fixed navbar -->\n  <!-- <nav class=\"navbar navbar-expand-md navbar-light fixed-top bg-light\"> -->\n  <nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">\n      <img src=\"assets/images/logo.png\">\n      {{brandName}}\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\"\n      aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"nav-item\" *ngFor=\"let item of menuItems\" [routerLink]=\"item.routerPath\" routerLinkActive=\"active\">\n          <a class=\"nav-link\">{{item.displayText}} </a>\n        </li>\n\n      </ul>\n\n    </div>\n  </nav>\n</header>\n\n<!-- Begin page content -->\n\n<main role=\"main\" class=\"flex-shrink-0\">\n  <!-- <div class=\"container\"> -->\n  <router-outlet></router-outlet>\n  <!-- </div> -->\n</main>\n\n<footer class=\"footer mt-auto py-3\">\n  <div class=\"container\">\n    <span class=\"text-muted\">{{copyrightInfo}}</span>\n  </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>contact-us works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>gallery works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>home works!</p> -->\n<section id=\"banner\">\n  <!-- start slider -->\n  <ngb-carousel *ngIf=\"images\" [showNavigationArrows]=\"false\">\n    <ng-template ngbSlide>\n      <img [src]=\"images[0]\" alt=\"Random first slide\">\n      <div class=\"carousel-caption\">\n        <h3>First slide label</h3>\n        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n      </div>\n    </ng-template>\n    <ng-template ngbSlide>\n      <img [src]=\"images[1]\" alt=\"Random second slide\">\n      <div class=\"carousel-caption\">\n        <h3>Second slide label</h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </ng-template>\n    <ng-template ngbSlide>\n      <img [src]=\"images[2]\" alt=\"Random third slide\">\n      <div class=\"carousel-caption\">\n        <h3>Third slide label</h3>\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n      </div>\n    </ng-template>\n  </ngb-carousel>\n  <!-- end slider -->\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>menu works!</p> -->\r\n<header class=\"text-center\">\r\n    <ngb-carousel [showNavigationArrows]=\"false\" [showNavigationIndicators]=\"false\">\r\n        <ng-template ngbSlide>\r\n            <img src=\"assets/images/1.jpg\" class=\"w-100\" alt=\"Random first slide\">\r\n            <div class=\"carousel-caption\">\r\n                <h3>MENU</h3>\r\n                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n            </div>\r\n        </ng-template>\r\n    </ngb-carousel>\r\n</header>\r\n<main class=\"container\">\r\n\r\n    <section>\r\n        <header class=\"text-center mt-5 mb-5\">\r\n            <h2>Hot Drinks</h2>\r\n        </header>\r\n        <div class=\"row menu\">\r\n            <ul class=\"col-sm-6\">\r\n                <li class=\"menu-list-item\">\r\n                    <h4 class=\"menu-list-item__title\">Salmon Stew<sup>1,4</sup></h4>\r\n                    <div class=\"d-flex\">\r\n                        <span class=\"menu-list-item__desc font-italic\">Salmon, potatos, onion, butter, thyme,\r\n                            parsley</span>\r\n                        <span class=\"menu-list-item__dots\"></span>\r\n                        <span class=\"menu-list-item__price\">$17.00</span>\r\n                    </div>\r\n                </li>\r\n                <li class=\"menu-list-item\">\r\n                    <h4 class=\"menu-list-item__title u-font-serif\">Spinach Pasta<sup>2,3,4</sup></h4>\r\n                    <div class=\"d-flex\">\r\n                        <span class=\"menu-list-item__desc font-italic\">Spinach, mushrooms, pasta, garlic</span>\r\n                        <span class=\"menu-list-item__dots\"></span>\r\n                        <span class=\"menu-list-item__price\">$13.20</span>\r\n                    </div>\r\n                </li>\r\n                <li class=\"menu-list-item\">\r\n                    <h4 class=\"menu-list-item__title u-font-serif\">Farina Plate<sup>1,4</sup></h4>\r\n                    <div class=\"d-flex\">\r\n                        <span class=\"menu-list-item__desc font-italic\">Cheddar, grapes, apple, deer ham </span>\r\n                        <span class=\"menu-list-item__dots\"></span>\r\n                        <span class=\"menu-list-item__price\">$15.00</span>\r\n                    </div>\r\n                </li>\r\n                <li class=\"menu-list-item\">\r\n                    <h4 class=\"menu-list-item__title u-font-serif\">Pizza</h4>\r\n                    <div class=\"d-flex\">\r\n                        <span class=\"menu-list-item__desc font-italic\">Mozzarella, chicken, tomatos,\r\n                            mushrooms</span>\r\n                        <span class=\"menu-list-item__dots\"></span>\r\n                        <span class=\"menu-list-item__price\">$12.00</span>\r\n                    </div>\r\n                </li>\r\n                <li class=\"menu-list-item\">\r\n                    <h4 class=\"menu-list-item__title u-font-serif\">Spinach Pasta<sup>2,3,4</sup></h4>\r\n                    <div class=\"d-flex\">\r\n                        <span class=\"menu-list-item__desc font-italic\">Spinach, mushrooms, pasta, garlic</span>\r\n                        <span class=\"menu-list-item__dots\"></span>\r\n                        <span class=\"menu-list-item__price\">$13.20</span>\r\n                    </div>\r\n                </li>\r\n                <li class=\"menu-list-item\">\r\n                    <h4 class=\"menu-list-item__title u-font-serif\">Salmon Stew<sup>1,4</sup></h4>\r\n                    <div class=\"d-flex\">\r\n                        <span class=\"menu-list-item__desc font-italic\">Salmon, potatos, onion, butter, thyme,\r\n                            parsley</span>\r\n                        <span class=\"menu-list-item__dots\"></span>\r\n                        <span class=\"menu-list-item__price\">$17.00</span>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n            <ul class=\"col-sm-6\">\r\n                <li class=\"menu-list-item\">\r\n                    <h4 class=\"menu-list-item__title u-font-serif\">Pizza</h4>\r\n                    <div class=\"d-flex\">\r\n                        <span class=\"menu-list-item__desc font-italic\">Mozzarella, chicken, tomatos, mushrooms</span>\r\n                        <span class=\"menu-list-item__dots\"></span>\r\n                        <span class=\"menu-list-item__price\">$12.00</span>\r\n                    </div>\r\n                </li>\r\n                <li class=\"menu-list-item\">\r\n                    <h4 class=\"menu-list-item__title u-font-serif\">Farina Plate<sup>1,4</sup></h4>\r\n                    <div class=\"d-flex\">\r\n                        <span class=\"menu-list-item__desc font-italic\">Cheddar, grapes, apple, deer ham </span>\r\n                        <span class=\"menu-list-item__dots\"></span>\r\n                        <span class=\"menu-list-item__price\">$15.00</span>\r\n                    </div>\r\n                </li>\r\n                <li class=\"menu-list-item\">\r\n                    <h4 class=\"menu-list-item__title u-font-serif\">Spinach Pasta<sup>2,3,4</sup></h4>\r\n                    <div class=\"d-flex\">\r\n                        <span class=\"menu-list-item__desc font-italic\">Spinach, mushrooms, pasta, garlic</span>\r\n                        <span class=\"menu-list-item__dots\"></span>\r\n                        <span class=\"menu-list-item__price\">$13.20</span>\r\n                    </div>\r\n                </li>\r\n                <li class=\"menu-list-item\">\r\n                    <h4 class=\"menu-list-item__title u-font-serif\">Salmon Stew<sup>1,4</sup></h4>\r\n                    <div class=\"d-flex\">\r\n                        <span class=\"menu-list-item__desc font-italic\">Salmon, potatos, onion, butter, thyme,\r\n                            parsley</span>\r\n                        <span class=\"menu-list-item__dots\"></span>\r\n                        <span class=\"menu-list-item__price\">$17.00</span>\r\n                    </div>\r\n                </li>\r\n                <li class=\"menu-list-item\">\r\n                    <h4 class=\"menu-list-item__title u-font-serif\">Pizza</h4>\r\n                    <div class=\"d-flex\">\r\n                        <span class=\"menu-list-item__desc font-italic\">Mozzarella, chicken, tomatos, mushrooms</span>\r\n                        <span class=\"menu-list-item__dots\"></span>\r\n                        <span class=\"menu-list-item__price\">$12.00</span>\r\n                    </div>\r\n                </li>\r\n                <li class=\"menu-list-item\">\r\n                    <h4 class=\"menu-list-item__title u-font-serif\">Farina Plate<sup>1,4</sup></h4>\r\n                    <div class=\"d-flex\">\r\n                        <span class=\"menu-list-item__desc font-italic\">Cheddar, grapes, apple, deer ham </span>\r\n                        <span class=\"menu-list-item__dots\"></span>\r\n                        <span class=\"menu-list-item__price\">$15.00</span>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n\r\n\r\n    </section>\r\n    <hr />\r\n    <section>\r\n        <header class=\"text-center mt-5 mb-5\">\r\n            <h2>Hot Drinks</h2>\r\n        </header>\r\n        <div class=\"row menu\">\r\n            <ul class=\"col-sm-6\">\r\n                <li class=\"menu-list-item\">\r\n                    <h4 class=\"menu-list-item__title\">Salmon Stew<sup>1,4</sup></h4>\r\n                    <div class=\"d-flex\">\r\n                        <span class=\"menu-list-item__desc font-italic\">Salmon, potatos, onion, butter, thyme,\r\n                            parsley</span>\r\n                        <span class=\"menu-list-item__dots\"></span>\r\n                        <span class=\"menu-list-item__price\">$17.00</span>\r\n                    </div>\r\n                </li>\r\n                <li class=\"menu-list-item\">\r\n                    <h4 class=\"menu-list-item__title u-font-serif\">Spinach Pasta<sup>2,3,4</sup></h4>\r\n                    <div class=\"d-flex\">\r\n                        <span class=\"menu-list-item__desc font-italic\">Spinach, mushrooms, pasta, garlic</span>\r\n                        <span class=\"menu-list-item__dots\"></span>\r\n                        <span class=\"menu-list-item__price\">$13.20</span>\r\n                    </div>\r\n                </li>\r\n                <li class=\"menu-list-item\">\r\n                    <h4 class=\"menu-list-item__title u-font-serif\">Farina Plate<sup>1,4</sup></h4>\r\n                    <div class=\"d-flex\">\r\n                        <span class=\"menu-list-item__desc font-italic\">Cheddar, grapes, apple, deer ham </span>\r\n                        <span class=\"menu-list-item__dots\"></span>\r\n                        <span class=\"menu-list-item__price\">$15.00</span>\r\n                    </div>\r\n                </li>\r\n                <li class=\"menu-list-item\">\r\n                    <h4 class=\"menu-list-item__title u-font-serif\">Pizza</h4>\r\n                    <div class=\"d-flex\">\r\n                        <span class=\"menu-list-item__desc font-italic\">Mozzarella, chicken, tomatos,\r\n                            mushrooms</span>\r\n                        <span class=\"menu-list-item__dots\"></span>\r\n                        <span class=\"menu-list-item__price\">$12.00</span>\r\n                    </div>\r\n                </li>\r\n                <li class=\"menu-list-item\">\r\n                    <h4 class=\"menu-list-item__title u-font-serif\">Spinach Pasta<sup>2,3,4</sup></h4>\r\n                    <div class=\"d-flex\">\r\n                        <span class=\"menu-list-item__desc font-italic\">Spinach, mushrooms, pasta, garlic</span>\r\n                        <span class=\"menu-list-item__dots\"></span>\r\n                        <span class=\"menu-list-item__price\">$13.20</span>\r\n                    </div>\r\n                </li>\r\n                <li class=\"menu-list-item\">\r\n                    <h4 class=\"menu-list-item__title u-font-serif\">Salmon Stew<sup>1,4</sup></h4>\r\n                    <div class=\"d-flex\">\r\n                        <span class=\"menu-list-item__desc font-italic\">Salmon, potatos, onion, butter, thyme,\r\n                            parsley</span>\r\n                        <span class=\"menu-list-item__dots\"></span>\r\n                        <span class=\"menu-list-item__price\">$17.00</span>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n            <ul class=\"col-sm-6\">\r\n                <li class=\"menu-list-item\">\r\n                    <h4 class=\"menu-list-item__title u-font-serif\">Pizza</h4>\r\n                    <div class=\"d-flex\">\r\n                        <span class=\"menu-list-item__desc font-italic\">Mozzarella, chicken, tomatos, mushrooms</span>\r\n                        <span class=\"menu-list-item__dots\"></span>\r\n                        <span class=\"menu-list-item__price\">$12.00</span>\r\n                    </div>\r\n                </li>\r\n                <li class=\"menu-list-item\">\r\n                    <h4 class=\"menu-list-item__title u-font-serif\">Farina Plate<sup>1,4</sup></h4>\r\n                    <div class=\"d-flex\">\r\n                        <span class=\"menu-list-item__desc font-italic\">Cheddar, grapes, apple, deer ham </span>\r\n                        <span class=\"menu-list-item__dots\"></span>\r\n                        <span class=\"menu-list-item__price\">$15.00</span>\r\n                    </div>\r\n                </li>\r\n                <li class=\"menu-list-item\">\r\n                    <h4 class=\"menu-list-item__title u-font-serif\">Spinach Pasta<sup>2,3,4</sup></h4>\r\n                    <div class=\"d-flex\">\r\n                        <span class=\"menu-list-item__desc font-italic\">Spinach, mushrooms, pasta, garlic</span>\r\n                        <span class=\"menu-list-item__dots\"></span>\r\n                        <span class=\"menu-list-item__price\">$13.20</span>\r\n                    </div>\r\n                </li>\r\n                <li class=\"menu-list-item\">\r\n                    <h4 class=\"menu-list-item__title u-font-serif\">Salmon Stew<sup>1,4</sup></h4>\r\n                    <div class=\"d-flex\">\r\n                        <span class=\"menu-list-item__desc font-italic\">Salmon, potatos, onion, butter, thyme,\r\n                            parsley</span>\r\n                        <span class=\"menu-list-item__dots\"></span>\r\n                        <span class=\"menu-list-item__price\">$17.00</span>\r\n                    </div>\r\n                </li>\r\n                <li class=\"menu-list-item\">\r\n                    <h4 class=\"menu-list-item__title u-font-serif\">Pizza</h4>\r\n                    <div class=\"d-flex\">\r\n                        <span class=\"menu-list-item__desc font-italic\">Mozzarella, chicken, tomatos, mushrooms</span>\r\n                        <span class=\"menu-list-item__dots\"></span>\r\n                        <span class=\"menu-list-item__price\">$12.00</span>\r\n                    </div>\r\n                </li>\r\n                <li class=\"menu-list-item\">\r\n                    <h4 class=\"menu-list-item__title u-font-serif\">Farina Plate<sup>1,4</sup></h4>\r\n                    <div class=\"d-flex\">\r\n                        <span class=\"menu-list-item__desc font-italic\">Cheddar, grapes, apple, deer ham </span>\r\n                        <span class=\"menu-list-item__dots\"></span>\r\n                        <span class=\"menu-list-item__price\">$15.00</span>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n\r\n\r\n    </section>\r\n    <hr />\r\n</main>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-us/about-us.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutUsComponent = class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-us.component.css */ "./src/app/about-us/about-us.component.css")).default]
    })
], AboutUsComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");








const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'menu', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"] },
    { path: 'gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__["GalleryComponent"] },
    { path: 'about', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__["AboutUsComponent"] },
    { path: 'contact', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__["ContactUsComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar {\r\n  /* min-height: 80px; */\r\n  text-transform: uppercase;\r\n}\r\n.navbar li:focus{\r\n  outline: none;\r\n}\r\n.navbar-brand{\r\n  color: #a9a9a9;\r\n}\r\n.navbar-dark .navbar-brand:focus, .navbar-dark .navbar-brand:hover{\r\n  color: #a9a9a9;\r\n}\r\n.nav-item{\r\n  cursor: pointer;\r\n}\r\n.navbar-brand>img{\r\nwidth: 50px;\r\n}\r\nmain > .container {\r\n    /* padding: 60px 15px 0; */\r\n    padding: 0 !important;\r\n    width: 100% !important;\r\n  }\r\n.footer {\r\n    background-color: #272727;\r\n    text-transform: uppercase;\r\n    color:red;\r\n  }\r\n.footer > .container {\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    font-family: 'Courier New', Courier, monospace;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixzQkFBc0I7RUFDeEI7QUFFQTtJQUNFLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsU0FBUztFQUNYO0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDhDQUE4QztFQUNoRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgLyogbWluLWhlaWdodDogODBweDsgKi9cclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5uYXZiYXIgbGk6Zm9jdXN7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZHtcclxuICBjb2xvcjogI2E5YTlhOTtcclxufVxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1icmFuZDpmb2N1cywgLm5hdmJhci1kYXJrIC5uYXZiYXItYnJhbmQ6aG92ZXJ7XHJcbiAgY29sb3I6ICNhOWE5YTk7XHJcbn1cclxuLm5hdi1pdGVte1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubmF2YmFyLWJyYW5kPmltZ3tcclxud2lkdGg6IDUwcHg7XHJcbn1cclxubWFpbiA+IC5jb250YWluZXIge1xyXG4gICAgLyogcGFkZGluZzogNjBweCAxNXB4IDA7ICovXHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI3Mjc7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6cmVkO1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyID4gLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");



let AppComponent = class AppComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.title = 'Jai Ganesh Cafe';
        this.brandName = "Jai Ganesh Cafe";
        this.copyrightInfo = `Copyright © ${(new Date()).getFullYear()} Jai Ganesh Cafe - All Rights Reserved.`;
        this.menuItems = [];
    }
    ngOnInit() {
        this.dataService.getMenuItems().subscribe((data) => {
            this.menuItems = data;
            // console.log(JSON.stringify(this.menuItems));
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/db.service */ "./src/app/services/db.service.ts");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
            _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__["ContactUsComponent"],
            _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsComponent"],
            _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__["GalleryComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_11__["InMemoryWebApiModule"].forRoot(_services_db_service__WEBPACK_IMPORTED_MODULE_10__["DbService"]),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactUsComponent = class ContactUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")).default]
    })
], ContactUsComponent);



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GalleryComponent = class GalleryComponent {
    constructor() { }
    ngOnInit() {
    }
};
GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gallery',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")).default]
    })
], GalleryComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* @import \"~bootstrap/dist/css/bootstrap.min.css\"; */\r\n\r\n/* CUSTOMIZE THE CAROUSEL\r\n-------------------------------------------------- */\r\n\r\n/* Carousel base class */\r\n\r\n.carousel {\r\n  margin-bottom: 4rem;\r\n}\r\n\r\n/* Since positioning the image, we need to help out the caption */\r\n\r\n.carousel-caption {\r\n  bottom: 10rem;\r\n  z-index: 10;\r\n}\r\n\r\n/* Declare heights because of positioning of img element */\r\n\r\nngb-carousel {\r\n  background: #000;\r\n}\r\n\r\nngb-carousel:focus{\r\n  outline: none;\r\n}\r\n\r\nngb-carousel img {\r\n  top: 0;\r\n  left: 0;\r\n  min-width: 100%;\r\n  height: 32rem;\r\n  opacity: 0.3 !important;\r\n}\r\n\r\n/* RESPONSIVE CSS\r\n-------------------------------------------------- */\r\n\r\n@media (min-width: 40em) {\r\n  /* Bump up size of carousel content */\r\n  .carousel-caption p {\r\n    margin-bottom: 1.25rem;\r\n    font-size: 1.25rem;\r\n    line-height: 1.4;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscURBQXFEOztBQUVyRDtvREFDb0Q7O0FBRXBELHdCQUF3Qjs7QUFFeEI7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUEsaUVBQWlFOztBQUVqRTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUEsMERBQTBEOztBQUUxRDtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLE1BQU07RUFDTixPQUFPO0VBQ1AsZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7b0RBQ29EOztBQUVwRDtFQUNFLHFDQUFxQztFQUNyQztJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBpbXBvcnQgXCJ+Ym9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7ICovXHJcblxyXG4vKiBDVVNUT01JWkUgVEhFIENBUk9VU0VMXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4vKiBDYXJvdXNlbCBiYXNlIGNsYXNzICovXHJcblxyXG4uY2Fyb3VzZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDRyZW07XHJcbn1cclxuXHJcbi8qIFNpbmNlIHBvc2l0aW9uaW5nIHRoZSBpbWFnZSwgd2UgbmVlZCB0byBoZWxwIG91dCB0aGUgY2FwdGlvbiAqL1xyXG5cclxuLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gIGJvdHRvbTogMTByZW07XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi8qIERlY2xhcmUgaGVpZ2h0cyBiZWNhdXNlIG9mIHBvc2l0aW9uaW5nIG9mIGltZyBlbGVtZW50ICovXHJcblxyXG5uZ2ItY2Fyb3VzZWwge1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbn1cclxubmdiLWNhcm91c2VsOmZvY3Vze1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxubmdiLWNhcm91c2VsIGltZyB7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzJyZW07XHJcbiAgb3BhY2l0eTogMC4zICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIFJFU1BPTlNJVkUgQ1NTXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xyXG4gIC8qIEJ1bXAgdXAgc2l6ZSBvZiBjYXJvdXNlbCBjb250ZW50ICovXHJcbiAgLmNhcm91c2VsLWNhcHRpb24gcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let HomeComponent = class HomeComponent {
    constructor(config) {
        // images = [1, 2, 3].map(() => `assets/images/${Math.floor((Math.random() * 3) + 1)}.jpg`);
        // images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
        this.images = [
            "assets/images/1.jpg",
            "assets/images/2.jpg",
            "assets/images/3.jpg"
        ];
        // customize default values of carousels used by this component tree
        config.interval = 1500;
        config.wrap = false;
        config.keyboard = false;
        config.pauseOnHover = false;
        config.wrap = true;
        // config.showNavigationArrows="false" ;
    }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ngb-carousel {\r\n    background: #000;\r\n}\r\n\r\nngb-carousel img {\r\n    top: 0;\r\n    left: 0;\r\n    min-width: 100%;\r\n    height: 25rem;\r\n    opacity: 0.3 !important;\r\n}\r\n\r\nngb-carousel:focus{\r\n    outline: none;\r\n}\r\n\r\n.carousel-caption {\r\n    bottom: 10rem;\r\n    z-index: 10;\r\n}\r\n\r\n.menu ul {\r\n    list-style: none;\r\n}\r\n\r\n.menu-list-item {\r\n    margin-bottom: 18px;\r\n}\r\n\r\n.menu-list-item__title {\r\n    font-weight: 700;\r\n    font-size: 20px;\r\n    flex: 1 0 auto;\r\n    font-family: serif;\r\n}\r\n\r\n.menu-list-item__desc, .menu-list-item__price {\r\n    flex: 1 0 auto;\r\n}\r\n\r\n.menu-list-item__desc {\r\n    color: #575757;\r\n    max-width: 80%;\r\n    font-size: 14px;\r\n}\r\n\r\n.menu-list-item__dots {\r\n    flex: 0 1 auto;\r\n}\r\n\r\n.menu-list-item__dots::before {\r\n    display: block;\r\n    overflow: hidden;\r\n    content: \".....................................................................................................\";\r\n    height: 2em;\r\n    padding: 0 6px;\r\n    word-break: break-word;\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxNQUFNO0lBQ04sT0FBTztJQUNQLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0hBQWdIO0lBQ2hILFdBQVc7SUFDWCxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5nYi1jYXJvdXNlbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG59XHJcblxyXG5uZ2ItY2Fyb3VzZWwgaW1nIHtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI1cmVtO1xyXG4gICAgb3BhY2l0eTogMC4zICFpbXBvcnRhbnQ7XHJcbn1cclxubmdiLWNhcm91c2VsOmZvY3Vze1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gICAgYm90dG9tOiAxMHJlbTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4ubWVudSB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4ubWVudS1saXN0LWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxufVxyXG5cclxuLm1lbnUtbGlzdC1pdGVtX190aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZmxleDogMSAwIGF1dG87XHJcbiAgICBmb250LWZhbWlseTogc2VyaWY7XHJcbn1cclxuXHJcbi5tZW51LWxpc3QtaXRlbV9fZGVzYywgLm1lbnUtbGlzdC1pdGVtX19wcmljZSB7XHJcbiAgICBmbGV4OiAxIDAgYXV0bztcclxufVxyXG5cclxuLm1lbnUtbGlzdC1pdGVtX19kZXNjIHtcclxuICAgIGNvbG9yOiAjNTc1NzU3O1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5tZW51LWxpc3QtaXRlbV9fZG90cyB7XHJcbiAgICBmbGV4OiAwIDEgYXV0bztcclxufVxyXG5cclxuLm1lbnUtbGlzdC1pdGVtX19kb3RzOjpiZWZvcmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY29udGVudDogXCIuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlwiO1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbiAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuComponent = class MenuComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")).default]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.menuApiURL = "api/menuItems";
    }
    getMenuItems() {
        return this.http.get(this.menuApiURL);
    }
    handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage;
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/services/db.service.ts":
/*!****************************************!*\
  !*** ./src/app/services/db.service.ts ***!
  \****************************************/
/*! exports provided: DbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbService", function() { return DbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DbService = class DbService {
    constructor() {
        //////data
        this.menuList = [
            {
                seqId: 1,
                displayText: "Home",
                routerPath: "home"
            },
            {
                seqId: 2,
                displayText: "Menu",
                routerPath: "menu"
            },
            {
                seqId: 3,
                displayText: "gallery",
                routerPath: "gallery"
            },
            {
                seqId: 4,
                displayText: "About Us",
                routerPath: "about"
            },
            {
                seqId: 5,
                displayText: "Contact Us",
                routerPath: "contact"
            }
        ];
    }
    createDb() {
        const menuItems = this.menuList;
        return { menuItems };
    }
};
DbService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DbService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Workspace\Jai Ganesh Cafe\App\JaiGaneshCafeApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map