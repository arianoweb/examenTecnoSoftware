(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <hello-word></hello-word>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'NOTE-TEST-INCREASE';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _componets_generics_hello_word_hello_word_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componets-generics/hello-word/hello-word.component */ "./src/app/componets-generics/hello-word/hello-word.component.ts");
/* harmony import */ var _componets_generics_segundo_nombre_segundo_nombre_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componets-generics/segundo-nombre/segundo-nombre.component */ "./src/app/componets-generics/segundo-nombre/segundo-nombre.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _componets_generics_hello_word_hello_word_component__WEBPACK_IMPORTED_MODULE_4__["HelloWordComponent"],
                _componets_generics_segundo_nombre_segundo_nombre_component__WEBPACK_IMPORTED_MODULE_5__["SegundoNombreComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/componets-generics/hello-word/hello-word.component.css":
/*!************************************************************************!*\
  !*** ./src/app/componets-generics/hello-word/hello-word.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    color:green;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZXRzLWdlbmVyaWNzL2hlbGxvLXdvcmQvaGVsbG8td29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZXRzLWdlbmVyaWNzL2hlbGxvLXdvcmQvaGVsbG8td29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBjb2xvcjpncmVlbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/componets-generics/hello-word/hello-word.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/componets-generics/hello-word/hello-word.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 (click)=\"prueba()\">\n  hello-word works! {{nombre}}\n</h1>\n<segundo-nombre></segundo-nombre>\n"

/***/ }),

/***/ "./src/app/componets-generics/hello-word/hello-word.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/componets-generics/hello-word/hello-word.component.ts ***!
  \***********************************************************************/
/*! exports provided: HelloWordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloWordComponent", function() { return HelloWordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_generics_cambia_nombre_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services-generics/cambia-nombre.service */ "./src/app/services-generics/cambia-nombre.service.ts");



var HelloWordComponent = /** @class */ (function () {
    function HelloWordComponent(CambiaNombreService) {
        this.CambiaNombreService = CambiaNombreService;
        this.nombre = 'Emelson';
    }
    HelloWordComponent.prototype.prueba = function () {
        this.CambiaNombreService.nombre.av = this.nombre;
        this.nombre = 'Emelson Marquez';
        console.log(this.CambiaNombreService);
    };
    HelloWordComponent.prototype.ngOnInit = function () {
    };
    HelloWordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'hello-word',
            template: __webpack_require__(/*! ./hello-word.component.html */ "./src/app/componets-generics/hello-word/hello-word.component.html"),
            styles: [__webpack_require__(/*! ./hello-word.component.css */ "./src/app/componets-generics/hello-word/hello-word.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_generics_cambia_nombre_service__WEBPACK_IMPORTED_MODULE_2__["CambiaNombreService"]])
    ], HelloWordComponent);
    return HelloWordComponent;
}());



/***/ }),

/***/ "./src/app/componets-generics/segundo-nombre/segundo-nombre.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/componets-generics/segundo-nombre/segundo-nombre.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmV0cy1nZW5lcmljcy9zZWd1bmRvLW5vbWJyZS9zZWd1bmRvLW5vbWJyZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/componets-generics/segundo-nombre/segundo-nombre.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/componets-generics/segundo-nombre/segundo-nombre.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p (click)=\"clickme()\">\n  Nombre:{{nombre}}\n</p>\n"

/***/ }),

/***/ "./src/app/componets-generics/segundo-nombre/segundo-nombre.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/componets-generics/segundo-nombre/segundo-nombre.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SegundoNombreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegundoNombreComponent", function() { return SegundoNombreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_generics_cambia_nombre_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services-generics/cambia-nombre.service */ "./src/app/services-generics/cambia-nombre.service.ts");



var SegundoNombreComponent = /** @class */ (function () {
    function SegundoNombreComponent(CambiaNombreService) {
        this.CambiaNombreService = CambiaNombreService;
        this.nombre = '';
    }
    SegundoNombreComponent.prototype.clickme = function () {
        this.nombre = this.CambiaNombreService.nombre.av;
    };
    SegundoNombreComponent.prototype.ngOnInit = function () {
    };
    SegundoNombreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'segundo-nombre',
            template: __webpack_require__(/*! ./segundo-nombre.component.html */ "./src/app/componets-generics/segundo-nombre/segundo-nombre.component.html"),
            styles: [__webpack_require__(/*! ./segundo-nombre.component.css */ "./src/app/componets-generics/segundo-nombre/segundo-nombre.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_generics_cambia_nombre_service__WEBPACK_IMPORTED_MODULE_2__["CambiaNombreService"]])
    ], SegundoNombreComponent);
    return SegundoNombreComponent;
}());



/***/ }),

/***/ "./src/app/services-generics/cambia-nombre.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services-generics/cambia-nombre.service.ts ***!
  \************************************************************/
/*! exports provided: CambiaNombreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CambiaNombreService", function() { return CambiaNombreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CambiaNombreService = /** @class */ (function () {
    function CambiaNombreService() {
        this.nombre = {
            av: '',
            apellido: ''
        };
    }
    CambiaNombreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CambiaNombreService);
    return CambiaNombreService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Angular5\note-test\NOTE-TEST-INCREASE\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map