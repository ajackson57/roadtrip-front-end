webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='flash-msg'>\n  <flash-messages></flash-messages>\n</div>\n<app-navbar></app-navbar>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        // apiOrgin = environment.apiOrigin;
        // title: string = 'Road Trip';
        // lat: number = 51.678418;
        // lng: number = 7.809007;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages_module_module_js__ = __webpack_require__("../../../../angular2-flash-messages/module/module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages_module_module_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages_module_module_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_module__ = __webpack_require__("../../../../../src/app/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__map_it_map_it_module__ = __webpack_require__("../../../../../src/app/map-it/map-it.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_8__map_it_map_it_module__["a" /* MapItModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages_module_module_js__["FlashMessagesModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_auth_auth_service__["a" /* AuthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/login/changepassword/changepassword.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/changepassword/changepassword.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Change Password</h3>\n  <div>\n    <label for=\"oldPassword\">Old Password</label>\n    <input class=\"form-control\" [(ngModel)]=\"oldPassword\" type=\"password\" placeholder=\"Old\"/>\n  </div>\n  <div>\n    <label for=\"newPassword\">New Password</label>\n    <input class=\"form-control\" [(ngModel)]=\"newPassword\" type=\"password\" placeholder=\"New\"/>\n  </div>\n  <div>\n    <input class=\"btn btn-primary\" (click)=\"changePassword()\" type=\"submit\" value=\"Change\"/>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/changepassword/changepassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChangepasswordComponent = (function () {
    function ChangepasswordComponent(auth) {
        this.auth = auth;
    }
    ChangepasswordComponent.prototype.ngOnInit = function () {
    };
    ChangepasswordComponent.prototype.changePassword = function () {
        this.auth.changePassword(this.oldPassword, this.newPassword);
    };
    ChangepasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-changepassword',
            template: __webpack_require__("../../../../../src/app/login/changepassword/changepassword.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/changepassword/changepassword.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]])
    ], ChangepasswordComponent);
    return ChangepasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(auth) {
        this.auth = auth;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trips_trips_module__ = __webpack_require__("../../../../../src/app/trips/trips.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin_component__ = __webpack_require__("../../../../../src/app/login/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__ = __webpack_require__("../../../../../src/app/login/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__changepassword_changepassword_component__ = __webpack_require__("../../../../../src/app/login/changepassword/changepassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/login/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__logout_logout_component__ = __webpack_require__("../../../../../src/app/login/logout/logout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_6__changepassword_changepassword_component__["a" /* ChangepasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__logout_logout_component__["a" /* LogoutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__trips_trips_module__["a" /* TripsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot([
                    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_4__signin_signin_component__["a" /* SigninComponent */] },
                    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */] },
                    { path: 'changepassword', component: __WEBPACK_IMPORTED_MODULE_6__changepassword_changepassword_component__["a" /* ChangepasswordComponent */] },
                    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_10__logout_logout_component__["a" /* LogoutComponent */] }
                ]),
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_6__changepassword_changepassword_component__["a" /* ChangepasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "../../../../../src/app/login/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Log Out</h3>\n  <input class=\"btn btn-primary\" (click)=\"signOut()\" type=\"submit\" value=\"Sign Out\"/>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = (function () {
    function LogoutComponent(auth) {
        this.auth = auth;
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent.prototype.signOut = function () {
        this.auth.signOut();
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__("../../../../../src/app/login/logout/logout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  border-radius: 0;\n  margin-bottom: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class='navbar navbar-inverse'>\n  <div class='container-fluid'>\n    <div class='navbar-header'>\n      <a class='navbar-brand'>Roadtrip</a>\n    </div>\n    <div *ngIf=\"!auth.user\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li id=\"sign-in-menu\"><a [routerLink]=\"['/signin']\"><span class=\"glyphicon glyphicon-log-in\"></span>Sign-In</a></li>\n        <li id=\"sign-up-menu\"><a [routerLink]=\"['/signup']\"><span class=\"glyphicon glyphicon-user\"></span>Sign Up</a></li>\n      </ul>\n    </div>\n  <div *ngIf= \"auth.user\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li id=\"sign-out-menu\"><a [routerLink]=\"['/logout']\"><span class=\"glyphicon glyphicon-log-out\"></span>Log Out</a></li>\n        <li id=\"change-password-menu\"><a [routerLink]=\"['/changepassword']\"><span class=\"glyphicon glyphicon-wrench\"></span>Change Password</a></li>\n      </ul>\n  </div>\n  </div>\n</nav>\n<div class='container'>\n   <router-outlet></router-outlet>\n</div>\n<!-- <div style=\"background: url(\\'../assets/images/250px-Carpenter_Center_for_the_Visual_Arts.jpg'); width: 200px; height: 150px\"></div> -->\n"

/***/ }),

/***/ "../../../../../src/app/login/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(auth) {
        this.auth = auth;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/login/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/signin/signin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"needs-validation\" novalidate>\n  <h3>Sign In</h3>\n  <div>\n    <label for=\"email\">Email</label>\n    <input class=\"form-control\" [(ngModel)]=\"user.email\" type=\"text\" placeholder=\"Email\"/>\n  </div>\n  <div>\n    <label for=\"password\">Password</label>\n    <input class=\"form-control\" [(ngModel)]=\"user.password\" type=\"password\" placeholder=\"Password\"/>\n  </div>\n  <div>\n    <input class=\"btn btn-primary\" (click)=\"signIn()\" type=\"submit\" value=\"Log in\"/>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SigninComponent = (function () {
    function SigninComponent(auth) {
        this.auth = auth;
        // User object. Used to fix template binding
        this.user = {};
        console.log('Sign-In Component Contructed');
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.signIn = function () {
        this.auth.signIn(this.user.email, this.user.password);
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__("../../../../../src/app/login/signin/signin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Sign Up</h3>\n  <div>\n    <label for=\"email\">Email</label>\n    <input class=\"form-control\" [(ngModel)]=\"newUser.email\" type=\"text\" placeholder=\"Email\"/>\n  </div>\n  <div>\n    <label for=\"password\">Email</label>\n    <input class=\"form-control\" [(ngModel)]=\"newUser.password\" type=\"password\" placeholder=\"Password\"/>\n  </div>\n  <div>\n    <label for=\"password_confirmation\">Email Confirmation</label>\n    <input class=\"form-control\" [(ngModel)]=\"newUser.password_confirmation\" type=\"password\" placeholder=\"Confirm Passsword\"/>\n  </div>\n  <div>\n    <input class=\"btn btn-primary\" (click)=\"signUp()\" type=\"submit\" value=\"Sign Up\"/>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = (function () {
    function SignupComponent(auth) {
        this.auth = auth;
        this.newUser = {};
        console.log('Sign-Up Component Contructed');
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signUp = function () {
        this.auth.signUp(this.newUser.email, this.newUser.password, this.newUser.password_confirmation);
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/login/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/map-it/map-it.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n  height: 600px;\n  width: 80%\n}\n.btn-primary{\n        margin: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map-it/map-it.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"tripservice && tripservice.trip\" class=\"container\">\n    <agm-map [latitude]=\"tripservice.trip.center_lat\"\n             [longitude]=\"tripservice.trip.center_lng\"\n             [zoom]=\"tripservice.trip.zoom\"\n             [panControl]=\"true\"\n             [disableDefaultUI]=\"false\">\n      <div *ngIf=\"tripservice.markers\" class=\"container\">\n        <div *ngFor=\"let marker of tripservice.markers; let i=index\">\n          <agm-marker [latitude]=\"marker.lat\"\n                      [longitude]=\"marker.lng\"\n                      [label]=\"marker.name\">\n            <agm-info-window>\n              <h4>{{marker.name}}</h4>\n              <p>{{marker.description}}</p>\n              <img src={{marker.image_url}}/>\n              <p>For more information, visit <a href={{marker.poi_url}}>web page</a></p>\n           </agm-info-window>\n         </agm-marker>\n        </div>\n      </div>\n    </agm-map>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/trips']\">Back To Trips</a>\n<div>\n"

/***/ }),

/***/ "../../../../../src/app/map-it/map-it.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapItComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_trips_trip_service__ = __webpack_require__("../../../../../src/app/services/trips/trip.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapItComponent = (function () {
    function MapItComponent(tripservice) {
        this.tripservice = tripservice;
    }
    MapItComponent.prototype.ngOnInit = function () {
    };
    MapItComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-map-it',
            template: __webpack_require__("../../../../../src/app/map-it/map-it.component.html"),
            styles: [__webpack_require__("../../../../../src/app/map-it/map-it.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_trips_trip_service__["a" /* TripService */]])
    ], MapItComponent);
    return MapItComponent;
}());



/***/ }),

/***/ "../../../../../src/app/map-it/map-it.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapItModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map_it_component__ = __webpack_require__("../../../../../src/app/map-it/map-it.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_snazzy_info_window__ = __webpack_require__("../../../../@agm/snazzy-info-window/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var MapItModule = (function () {
    function MapItModule() {
    }
    MapItModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyB8AK83UPAFaGyDFJv8PZmGnNWr6JkW-Mc'
                }),
                __WEBPACK_IMPORTED_MODULE_7__agm_snazzy_info_window__["a" /* AgmSnazzyInfoWindowModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot([
                    { path: 'mapit', component: __WEBPACK_IMPORTED_MODULE_5__map_it_component__["a" /* MapItComponent */] }
                ]),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__map_it_component__["a" /* MapItComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_5__map_it_component__["a" /* MapItComponent */]]
        })
    ], MapItModule);
    return MapItModule;
}());



/***/ }),

/***/ "../../../../../src/app/markers/marker-edit/marker-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-primary{\n        margin: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/markers/marker-edit/marker-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Minimum fields for a Marker are Name, Latitude, and Longitude.</p>\n<h2>Edit Marker</h2>\n\n<form #markerForm=\"ngForm\" (ngSubmit)=\"updateMarker(updatedMarker)\" class=\"container\">\n  <div class=\"row\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"updatedMarker.name\" name=\"name\" #name=\"ngModel\">\n    <div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n      <div [hidden]=\"!name.errors.required\">\n          Name is required!\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div>\n      <label for=\"description\">Description</label>\n      <input class=\"form-control\" name=\"description\" [(ngModel)]=\"updatedMarker.description\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <label for=\"lat\">Latitude</label>\n    <input type=\"number\" minlength=\"-90\" maxlength=\"90\" class=\"form-control\" name=\"lat\" required [(ngModel)]=\"updatedMarker.lat\" name=\"lat\" #lat=\"ngModel\">\n    <div *ngIf=\"lat.errors && (lat.dirty || lat.touched)\" class=\"alert alert-danger\">\n      <div [hidden]=\"!lat.errors.required\">\n           Latitude requires a number between -90 and 90!\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <label for=\"lng\">Longitude</label>\n    <input type=\"number\" minlength=\"-180\" maxlength=\"180\" class=\"form-control\" required [(ngModel)]=\"updatedMarker.lng\" name=\"lng\" #lng=\"ngModel\">\n    <div *ngIf=\"lng.errors && (lng.dirty || lng.touched)\" class=\"alert alert-danger\">\n      <div [hidden]=\"!lng.errors.required\">\n          Longitude requires a number between -180 and 180!\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div>\n      <label for=\"image_url\">Image URL</label>\n      <input class=\"form-control\" name=\"image_url\" [(ngModel)]=\"updatedMarker.image_url\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div>\n      <label for=\"poi_url\">Site URL</label>\n      <input class=\"form-control\" name=\"poi_url\" [(ngModel)]=\"updatedMarker.poi_url\">\n    </div>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!markerForm.form.valid\">Update</button>\n  <a class=\"btn btn-primary\" [routerLink]=\"['/markers']\">Cancel</a>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/markers/marker-edit/marker-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkerEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_trips_trip_service__ = __webpack_require__("../../../../../src/app/services/trips/trip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service_js__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MarkerEditComponent = (function () {
    function MarkerEditComponent(route, router, tripservice, _flashMessagesService) {
        this.route = route;
        this.router = router;
        this.tripservice = tripservice;
        this._flashMessagesService = _flashMessagesService;
        this.updatedMarker = {};
    }
    MarkerEditComponent.prototype.ngOnInit = function () {
        this.updatedMarker = this.tripservice.marker;
    };
    MarkerEditComponent.prototype.updateMarker = function (updatedMarker) {
        var _this = this;
        if ((parseFloat(updatedMarker.lng) == NaN) || updatedMarker.lng > 180 || updatedMarker.lng < -180) {
            this._flashMessagesService.show('longitude must be in the range of -180 to 180!');
            return;
        }
        else if ((parseFloat(updatedMarker.lat) == NaN) || updatedMarker.lat > 90 || updatedMarker.lat < -90) {
            this._flashMessagesService.show('latitude must be in the range of -90 to 90!');
            return;
        }
        this.tripservice.updateMarker(updatedMarker)
            .subscribe(function (response) {
            console.log(response.json());
            var marker = response.json();
            _this.router.navigate(["/markers/" + marker.marker.id]);
        }, function (err) {
            _this._flashMessagesService.show('Sorry unable to update your trip marker. ' + err);
        });
    };
    MarkerEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-marker-edit',
            template: __webpack_require__("../../../../../src/app/markers/marker-edit/marker-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/markers/marker-edit/marker-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_trips_trip_service__["a" /* TripService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service_js__["FlashMessagesService"]])
    ], MarkerEditComponent);
    return MarkerEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/markers/marker-index/marker-index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-primary{\n        margin: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/markers/marker-index/marker-index.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"tripservice.markers\" class=\"container\">\n  <div class='table-responsive'>\n      <table class='table'\n              *ngIf='tripservice.markers && tripservice.markers.length'>\n          <thead>\n              <tr>\n                  <th>Name</th>\n                  <th>Description</th>\n                  <th>Latitude</th>\n                  <th>Longitude</th>\n                  <th>Image URL</th>\n                  <th>Site URL</th>\n              </tr>\n          </thead>\n          <tbody>\n              <tr *ngFor='let marker of tripservice.markers'>\n                  <!-- <td>{{ marker.name }}</td> -->\n                  <td><a [routerLink]=\"['/markers', marker.id]\">\n                                {{ marker.name }}\n                            </a>\n\t\t\t\t\t\t      </td>\n                  <td>{{ marker.description }}</td>\n                  <td>{{ marker.lat }}</td>\n                  <td>{{ marker.lng }}</td>\n                  <td>{{ marker.image_url }}</td>\n                  <td>{{ marker.poi_url }}</td>\n              </tr>\n          </tbody>\n      </table>\n    </div>\n    <div>\n      <a class=\"btn btn-primary\" [routerLink]=\"['/markers/new']\">Add Marker</a>\n      <a class=\"btn btn-primary\" [routerLink]=\"['/trips']\">Back To Trips</a>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/markers/marker-index/marker-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkerIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_trips_trip_service__ = __webpack_require__("../../../../../src/app/services/trips/trip.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MarkerIndexComponent = (function () {
    function MarkerIndexComponent(tripservice) {
        this.tripservice = tripservice;
    }
    MarkerIndexComponent.prototype.ngOnInit = function () {
        this.tripservice.getMarkers();
    };
    MarkerIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-marker-index',
            template: __webpack_require__("../../../../../src/app/markers/marker-index/marker-index.component.html"),
            styles: [__webpack_require__("../../../../../src/app/markers/marker-index/marker-index.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_trips_trip_service__["a" /* TripService */]])
    ], MarkerIndexComponent);
    return MarkerIndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/markers/marker-new/marker-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-primary{\n        margin: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/markers/marker-new/marker-new.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Minimum fields for a Marker are Name, Latitude, and Longitude.</p>\n<h2>New Marker</h2>\n\n<form #markerForm=\"ngForm\" (ngSubmit)=\"saveMarker(newMarker)\" class=\"container\">\n  <div class=\"row\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"newMarker.name\" name=\"name\" #name=\"ngModel\">\n    <div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n      <div [hidden]=\"!name.errors.required\">\n          Name is required!\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div>\n      <label for=\"description\">Description</label>\n      <input class=\"form-control\" name=\"description\" [(ngModel)]=\"newMarker.description\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <label for=\"lat\">Latitude</label>\n    <input type=\"number\" minlength=\"-90\" maxlength=\"90\" class=\"form-control\" name=\"lat\" required [(ngModel)]=\"newMarker.lat\" name=\"lat\" #lat=\"ngModel\">\n    <div *ngIf=\"lat.errors && (lat.dirty || lat.touched)\" class=\"alert alert-danger\">\n      <div [hidden]=\"!lat.errors.required\">\n           Latitude requires a number between -90 and 90!\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <label for=\"lng\">Longitude</label>\n    <input type=\"number\" minlength=\"-180\" maxlength=\"180\" class=\"form-control\" required [(ngModel)]=\"newMarker.lng\" name=\"lng\" #lng=\"ngModel\">\n    <div *ngIf=\"lng.errors && (lng.dirty || lng.touched)\" class=\"alert alert-danger\">\n      <div [hidden]=\"!lng.errors.required\">\n          Longitude requires a number between -180 and 180!\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div>\n      <label for=\"image_url\">Image URL</label>\n      <input class=\"form-control\" name=\"image_url\" [(ngModel)]=\"newMarker.image_url\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div>\n      <label for=\"poi_url\">Site URL</label>\n      <input class=\"form-control\" name=\"poi_url\" [(ngModel)]=\"newMarker.poi_url\">\n    </div>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!markerForm.form.valid\">Create</button>\n  <a class=\"btn btn-primary\" [routerLink]=\"['/markers']\">Cancel</a>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/markers/marker-new/marker-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkerNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_trips_trip_service__ = __webpack_require__("../../../../../src/app/services/trips/trip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service_js__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MarkerNewComponent = (function () {
    function MarkerNewComponent(tripService, router, _flashMessagesService) {
        this.tripService = tripService;
        this.router = router;
        this._flashMessagesService = _flashMessagesService;
        this.newMarker = {};
    }
    MarkerNewComponent.prototype.ngOnInit = function () {
    };
    MarkerNewComponent.prototype.saveMarker = function (newMarker) {
        var _this = this;
        if ((parseFloat(newMarker.lng) == NaN) || newMarker.lng > 180 || newMarker.lng < -180) {
            this._flashMessagesService.show('longitude must be in the range of -180 to 180!');
            return;
        }
        else if ((parseFloat(newMarker.lat) == NaN) || newMarker.lat > 90 || newMarker.lat < -90) {
            this._flashMessagesService.show('latitude must be in the range of -90 to 90!');
            return;
        }
        this.tripService.createMarker(newMarker)
            .subscribe(function (response) {
            var marker = response.json();
            _this.router.navigate(["/markers/" + marker.marker.id]);
        }, function (err) {
            _this._flashMessagesService.show('There was an issue saving your trip marker ' + err);
        });
    };
    MarkerNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-marker-new',
            template: __webpack_require__("../../../../../src/app/markers/marker-new/marker-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/markers/marker-new/marker-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_trips_trip_service__["a" /* TripService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service_js__["FlashMessagesService"]])
    ], MarkerNewComponent);
    return MarkerNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/markers/marker-show/marker-show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-primary{\n        margin: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/markers/marker-show/marker-show.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"tripservice.marker\" class=\"container\">\n  <div class='table-responsive'>\n      <table class='table'>\n          <thead>\n              <tr>\n                  <th>Name</th>\n                  <th>Description</th>\n                  <th>Latitude</th>\n                  <th>Longitude</th>\n                  <th>Image URL</th>\n                  <th>Site URL</th>\n              </tr>\n          </thead>\n          <tbody>\n              <tr>\n                  <td>{{ tripservice.marker.name }}</td>\n                  <!-- <td><a [routerLink]=\"['/trips', trip.id]\">\n                                {{ trip.name }}\n                            </a>\n\t\t\t\t\t\t      </td> -->\n                  <td>{{ tripservice.marker.description }}</td>\n                  <td>{{ tripservice.marker.lat }}</td>\n                  <td>{{ tripservice.marker.lng }}</td>\n                  <td>{{ tripservice.marker.image_url }}</td>\n                  <td>{{ tripservice.marker.poi_url }}</td>\n              </tr>\n          </tbody>\n      </table>\n    </div>\n    <div>\n      <a class=\"btn btn-primary\" [routerLink]=\"['/markers/edit']\">Edit Marker</a>\n      <!-- <a class=\"btn btn-primary\" [routerLink]=\"['/mapit']\">Map Trip</a> -->\n      <a class=\"btn btn-primary\" (click)='onDelete()'>Delete Marker</a>\n      <a class=\"btn btn-primary\" [routerLink]=\"['/markers']\">Back To Markers</a>\n    </div>\n    <div class='container'>\n       <router-outlet></router-outlet>\n    </div>\n  <div>\n"

/***/ }),

/***/ "../../../../../src/app/markers/marker-show/marker-show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkerShowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trips_trip_service__ = __webpack_require__("../../../../../src/app/services/trips/trip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service_js__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MarkerShowComponent = (function () {
    function MarkerShowComponent(_route, _router, tripservice, _flashMessagesService) {
        this._route = _route;
        this._router = _router;
        this.tripservice = tripservice;
        this._flashMessagesService = _flashMessagesService;
        this.id = 0;
    }
    MarkerShowComponent.prototype.ngOnInit = function () {
        var param = this._route.snapshot.paramMap.get('id');
        if (param) {
            this.id = +param;
            this.tripservice.getMarker(this.id);
            this.tripservice.getMarkers();
        }
    };
    MarkerShowComponent.prototype.onDelete = function () {
        var _this = this;
        console.log("delete marker");
        this.tripservice.deleteMarker(this.id)
            .subscribe(function (response) {
            _this._router.navigate(["/markers"]);
        }, function (err) {
            _this._flashMessagesService.show('Sorry there was an issue deleting the trip marker. ' + err);
        });
    };
    MarkerShowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-marker-show',
            template: __webpack_require__("../../../../../src/app/markers/marker-show/marker-show.component.html"),
            styles: [__webpack_require__("../../../../../src/app/markers/marker-show/marker-show.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_trips_trip_service__["a" /* TripService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service_js__["FlashMessagesService"]])
    ], MarkerShowComponent);
    return MarkerShowComponent;
}());



/***/ }),

/***/ "../../../../../src/app/markers/markers.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__marker_new_marker_new_component__ = __webpack_require__("../../../../../src/app/markers/marker-new/marker-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__marker_edit_marker_edit_component__ = __webpack_require__("../../../../../src/app/markers/marker-edit/marker-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__marker_index_marker_index_component__ = __webpack_require__("../../../../../src/app/markers/marker-index/marker-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__marker_show_marker_show_component__ = __webpack_require__("../../../../../src/app/markers/marker-show/marker-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_trips_trip_service__ = __webpack_require__("../../../../../src/app/services/trips/trip.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var MarkersModule = (function () {
    function MarkersModule() {
    }
    MarkersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild([
                    { path: 'markers', component: __WEBPACK_IMPORTED_MODULE_6__marker_index_marker_index_component__["a" /* MarkerIndexComponent */] },
                    { path: 'markers/new', component: __WEBPACK_IMPORTED_MODULE_4__marker_new_marker_new_component__["a" /* MarkerNewComponent */] },
                    { path: 'markers/edit', component: __WEBPACK_IMPORTED_MODULE_5__marker_edit_marker_edit_component__["a" /* MarkerEditComponent */] },
                    { path: 'markers/:id', component: __WEBPACK_IMPORTED_MODULE_7__marker_show_marker_show_component__["a" /* MarkerShowComponent */] }
                ]),
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__marker_new_marker_new_component__["a" /* MarkerNewComponent */],
                __WEBPACK_IMPORTED_MODULE_5__marker_edit_marker_edit_component__["a" /* MarkerEditComponent */],
                __WEBPACK_IMPORTED_MODULE_6__marker_index_marker_index_component__["a" /* MarkerIndexComponent */],
                __WEBPACK_IMPORTED_MODULE_7__marker_show_marker_show_component__["a" /* MarkerShowComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_trips_trip_service__["a" /* TripService */]]
        })
    ], MarkersModule);
    return MarkersModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages_module_flash_messages_service_js__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages_module_flash_messages_service_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages_module_flash_messages_service_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(http, _route, _router, _flashMessagesService) {
        this.http = http;
        this._route = _route;
        this._router = _router;
        this._flashMessagesService = _flashMessagesService;
    }
    AuthService.prototype.getUserToken = function () {
        if (!this.user) {
            this._flashMessagesService.show('Invalid credentials, please signin to the application!');
        }
        return this.user.token;
    };
    AuthService.prototype.signIn = function (email, password) {
        var _this = this;
        // Create the credentials object.
        var credentials = {
            'credentials': {
                'email': email,
                'password': password
            }
        };
        // Make the post request. environment.apiOrigin contains the local server address http://localhost:4741
        this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiOrigin + '/sign-in', credentials)
            .subscribe(
        // Save the response to user
        function (response) {
            _this.user = JSON.parse(response['_body']).user;
            _this._router.navigate(["/trips"]);
            _this._flashMessagesService.show('Welcome to Roadtrip ' + _this.user.email);
        }, function (err) {
            _this._flashMessagesService.show('Sorry unable to log you in. Do you need to setup an account?.' + err);
        });
    };
    AuthService.prototype.signUp = function (email, password, password_confirmation) {
        var _this = this;
        // Create the credentials object.
        var credentials = {
            'credentials': {
                'email': email,
                'password': password,
                'password_confirmation': password_confirmation
            }
        };
        // Make the post request. environment.apiOrigin contains the local server address http://localhost:4741
        this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiOrigin + '/sign-up', credentials)
            .subscribe(function (response) {
            // Send the existing credentials back to the server to log in the new user
            _this.signIn(credentials.credentials.email, credentials.credentials.password);
        }, function (err) {
            _this._flashMessagesService.show('Sorry unable to setup your account. Did you include your email and password.' + err);
        });
    };
    AuthService.prototype.signOut = function () {
        var _this = this;
        // Create the configuration object to be able to store the Headers > Authentication
        var config = {};
        // Set the headers key
        config['headers'] = { Authorization: 'Token token=' + this.getUserToken() };
        // Make the delete request to URL, and add the token from Config.
        this.http.delete(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiOrigin + '/sign-out/' + this.user.id, config)
            .subscribe(
        // Remove the logged in user.
        function (data) {
            _this.user = null;
            _this._flashMessagesService.show('You are logged out.');
            _this._router.navigate(["/signin"]);
        }, function (err) {
            _this._flashMessagesService.show('Sorry there was a problem logging you out. ' + err);
        });
    };
    AuthService.prototype.changePassword = function (oldPassword, newPassword) {
        var _this = this;
        // Create the passwords data object to send.
        var passwords = {
            'passwords': {
                'old': oldPassword,
                'new': newPassword
            }
        };
        // Create the configuration object to be able to store the Headers > Authentication
        var config = {};
        // Set the headers key
        config['headers'] = { Authorization: 'Token token=' + this.getUserToken() };
        // Make the patch request to URL, add the password data and token from Config.
        this.http.patch(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiOrigin + '/change-password/' + this.user.id, passwords, config)
            .subscribe(function (data) { _this._flashMessagesService.show('Hey ' + _this.user.email + ' you succesfully changed your password!'); }, function (err) { _this._flashMessagesService.show('Sorry ' + _this.user.email + ' unable to change you password.'); });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages_module_flash_messages_service_js__["FlashMessagesService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/trips/trip.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages_module_flash_messages_service_js__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages_module_flash_messages_service_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages_module_flash_messages_service_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TripService = (function () {
    function TripService(http, auth, _flashMessagesService) {
        this.http = http;
        this.auth = auth;
        this._flashMessagesService = _flashMessagesService;
    }
    TripService.prototype.getTrips = function () {
        var _this = this;
        // Create the configuration object to be able to store the Headers > Authentication
        var config = {};
        // Set the headers key
        config['headers'] = { Authorization: 'Token token=' + this.auth.getUserToken() };
        // Make the delete request to URL, and add the token from Config.
        this.http.get(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiOrigin + '/trips', config)
            .subscribe(function (response) {
            _this.trips = JSON.parse(response['_body']).trips;
        }, function (err) {
            _this._flashMessagesService.show('Error retrieving trips. ' + err);
        });
    };
    TripService.prototype.getTrip = function (id) {
        var _this = this;
        // Create the configuration object to be able to store the Headers > Authentication
        var config = {};
        // Set the headers key
        config['headers'] = { Authorization: 'Token token=' + this.auth.getUserToken() };
        // Make the delete request to URL, and add the token from Config.
        this.http.get(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiOrigin + '/trips/' + id, config)
            .subscribe(function (response) {
            _this.trip = JSON.parse(response['_body']).trip;
        }, function (err) { _this._flashMessagesService.show('Error retrieving trip. ' + err); });
    };
    TripService.prototype.createTrip = function (trip) {
        // Create the configuration object to be able to store the Headers > Authentication
        var config = {};
        // Set the headers key
        config['headers'] = { Authorization: 'Token token=' + this.auth.getUserToken() };
        var data = {
            "trip": {
                "name": trip.name,
                "description": trip.description,
                "center_lat": trip.center_lat,
                "center_lng": trip.center_lng,
                "zoom": trip.zoom
            }
        };
        // Make the delete request to URL, and add the token from Config.
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiOrigin + '/trips', data, config);
    };
    TripService.prototype.updateTrip = function (trip) {
        // Create the configuration object to be able to store the Headers > Authentication
        var config = {};
        // Set the headers key
        config['headers'] = { Authorization: 'Token token=' + this.auth.getUserToken() };
        var data = {
            "trip": {
                "name": trip.name,
                "description": trip.description,
                "center_lat": trip.center_lat,
                "center_lng": trip.center_lng,
                "zoom": trip.zoom
            }
        };
        // Make the delete request to URL, and add the token from Config.
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiOrigin + '/trips/' + this.trip.id, data, config);
    };
    TripService.prototype.deleteTrip = function (id) {
        // Create the configuration object to be able to store the Headers > Authentication
        var config = {};
        // Set the headers key
        config['headers'] = { Authorization: 'Token token=' + this.auth.getUserToken() };
        // Make the delete request to URL, and add the token from Config.
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiOrigin + '/trips/' + id, config);
    };
    TripService.prototype.createMarker = function (marker) {
        // Create the configuration object to be able to store the Headers > Authentication
        var config = {};
        // Set the headers key
        config['headers'] = { Authorization: 'Token token=' + this.auth.getUserToken() };
        var data = {
            "marker": {
                "name": marker.name,
                "description": marker.description,
                "lng": marker.lng,
                "lat": marker.lat,
                "image_url": marker.image_url,
                "poi_url": marker.site_url,
                "trip_id": this.trip.id
            }
        };
        // Make the delete request to URL, and add the token from Config.
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiOrigin + '/markers', data, config);
    };
    TripService.prototype.updateMarker = function (marker) {
        // Create the configuration object to be able to store the Headers > Authentication
        var config = {};
        // Set the headers key
        config['headers'] = { Authorization: 'Token token=' + this.auth.getUserToken() };
        var data = {
            "marker": {
                "name": marker.name,
                "description": marker.description,
                "lat": marker.lat,
                "lng": marker.lng,
                "image_url": marker.image_url,
                "site_url": marker.site_url
            }
        };
        // Make the delete request to URL, and add the token from Config.
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiOrigin + '/markers/' + this.trip.id, data, config);
    };
    TripService.prototype.deleteMarker = function (id) {
        // Create the configuration object to be able to store the Headers > Authentication
        var config = {};
        // Set the headers key
        config['headers'] = { Authorization: 'Token token=' + this.auth.getUserToken() };
        // Make the delete request to URL, and add the token from Config.
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiOrigin + '/markerss/' + id, config);
    };
    TripService.prototype.getMarkers = function () {
        var _this = this;
        // Create the configuration object to be able to store the Headers > Authentication
        var config = {};
        // Set the headers key
        config['headers'] = { Authorization: 'Token token=' + this.auth.getUserToken() };
        // Make the delete request to URL, and add the token from Config.
        this.http.get(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiOrigin + '/markers', config)
            .subscribe(function (response) {
            var tripMarkers = JSON.parse(response['_body']).markers;
            _this.markers = tripMarkers.filter(function (marker) { return marker.trip_id == _this.trip.id; });
        }, function (err) {
            _this._flashMessagesService.show('There was a problem retrieving your trips markers. '
                + err);
        });
    };
    TripService.prototype.getMarker = function (id) {
        var _this = this;
        // Create the configuration object to be able to store the Headers > Authentication
        var config = {};
        // Set the headers key
        config['headers'] = { Authorization: 'Token token=' + this.auth.getUserToken() };
        // Make the delete request to URL, and add the token from Config.
        this.http.get(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiOrigin + '/markers/' + id, config)
            .subscribe(function (response) {
            _this.marker = JSON.parse(response['_body']).marker;
        }, function (err) {
            _this._flashMessagesService.show('There was a problem retrieving your trips markers. '
                + err);
        });
    };
    TripService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages_module_flash_messages_service_js__["FlashMessagesService"]])
    ], TripService);
    return TripService;
}());



/***/ }),

/***/ "../../../../../src/app/trips/trip-edit/trip-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-primary{\n        margin: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/trips/trip-edit/trip-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Minimum fields for a Trip are Name, Center Latitude, Center Longitude, and Zoom.</p>\n<h2>Edit Trip</h2>\n\n<form #tripForm=\"ngForm\" (ngSubmit)=\"updateTrip(updatedTrip)\" class=\"container\">\n  <div class=\"row\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"updatedTrip.name\" name=\"name\" #name=\"ngModel\">\n    <div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n      <div [hidden]=\"!name.errors.required\">\n          Name is required!\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <label for=\"description\">Description</label>\n    <input type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]=\"updatedTrip.description\">\n  </div>\n  <div class=\"row\">\n    <label for=\"center_lat\">Center Latitude</label>\n    <input type=\"number\" minlength=\"-90\" maxlength=\"90\" class=\"form-control\" name=\"center_lat\" required [(ngModel)]=\"updatedTrip.center_lat\" name=\"center_lat\" #center_lat=\"ngModel\">\n    <div *ngIf=\"center_lat.errors && (center_lat.dirty || center_lat.touched)\" class=\"alert alert-danger\">\n      <div [hidden]=\"!center_lat.errors.required\">\n           Center latitude requires a number between -90 and 90!\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <label for=\"center_lng\">Center Longitude</label>\n    <input type=\"number\" minlength=\"-180\" maxlength=\"180\" class=\"form-control\" required [(ngModel)]=\"updatedTrip.center_lng\" name=\"center_lng\" #center_lng=\"ngModel\">\n    <div *ngIf=\"center_lng.errors && (center_lng.dirty || center_lng.touched)\" class=\"alert alert-danger\">\n      <div [hidden]=\"!center_lng.errors.required\">\n          Center longitude requires a number between -180 and 180!\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <label for=\"zoom\">Zoom Factor</label>\n    <input type=\"number\" minlength=\"1\" maxlength=\"20\" class=\"form-control\" required [(ngModel)]=\"updatedTrip.zoom\" name=\"zoom\" #zoom=\"ngModel\">\n    <div *ngIf=\"zoom.errors\" class=\"alert alert-danger\">\n      <div [hidden]=\"!zoom.errors.required && (zoom.dirty || zoom.touched)\">\n          Zoom requires an integer between 1 and 20!\n      </div>\n      <div [hidden]=\"!zoom.errors.minlength\">\n          Zoom requires an integer greater than or equal to 1!\n      </div>\n    </div>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!tripForm.form.valid\">Update Trip</button>\n  <a class=\"btn btn-primary\" [routerLink]=\"['/markers']\">View Markers</a>\n  <a class=\"btn btn-primary\" [routerLink]=\"['/trips']\">Cancel</a>\n  <!-- <input class=\"btn btn-primary\" type=\"submit\" value=\"Create\"> -->\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/trips/trip-edit/trip-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_trips_trip_service__ = __webpack_require__("../../../../../src/app/services/trips/trip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service_js__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripEditComponent = (function () {
    function TripEditComponent(route, router, tripservice, _flashMessagesService) {
        this.route = route;
        this.router = router;
        this.tripservice = tripservice;
        this._flashMessagesService = _flashMessagesService;
        this.updatedTrip = {};
    }
    TripEditComponent.prototype.ngOnInit = function () {
        this.updatedTrip = this.tripservice.trip;
    };
    TripEditComponent.prototype.updateTrip = function (updatedTrip) {
        var _this = this;
        if ((parseFloat(updatedTrip.center_lng) == NaN) || updatedTrip.center_lng > 180 || updatedTrip.center_lng < -180) {
            this._flashMessagesService.show('Center longitude must be in the range of -180 to 180!');
            return;
        }
        else if ((parseFloat(updatedTrip.center_lat) == NaN) || updatedTrip.center_lat > 90 || updatedTrip.center_lat < -90) {
            this._flashMessagesService.show('Center latitude must be in the range of -90 to 90!');
            return;
        }
        else if (!Number.isInteger(updatedTrip.zoom) || +updatedTrip.zoom > 20 || +updatedTrip.zoom < 1) {
            this._flashMessagesService.show('Zoom must be an integer between 1 and 20!');
            return;
        }
        this.tripservice.updateTrip(updatedTrip)
            .subscribe(function (response) {
            var trip = response.json();
            _this.router.navigate(["/trips/" + trip.trip.id]);
            _this._flashMessagesService.show('Your trip was succesfully updated.');
        }, function (err) {
            _this._flashMessagesService.show('There was an issue updatig your trip' + err);
        });
    };
    TripEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-trip-edit',
            template: __webpack_require__("../../../../../src/app/trips/trip-edit/trip-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/trips/trip-edit/trip-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_trips_trip_service__["a" /* TripService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service_js__["FlashMessagesService"]])
    ], TripEditComponent);
    return TripEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/trips/trip-index/trip-index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-primary{\n        margin: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/trips/trip-index/trip-index.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Select a Trip link to map, update, or delete it.</p>\n<div *ngIf=\"tripservice.trips\" class=\"container\">\n  <div class='table-responsive'>\n      <table class='table'\n              *ngIf='tripservice.trips && tripservice.trips.length'>\n          <thead>\n              <tr>\n                  <th>Name</th>\n                  <th>Description</th>\n                  <th>Center Lat</th>\n                  <th>Center lng</th>\n                  <th>Zoom</th>\n              </tr>\n          </thead>\n          <tbody>\n              <tr *ngFor='let trip of tripservice.trips'>\n                  <!-- <td>{{ trip.name }}</td> -->\n                  <td><a [routerLink]=\"['/trips', trip.id]\">\n                                {{ trip.name }}\n                            </a>\n\t\t\t\t\t\t      </td>\n                  <td>{{ trip.description }}</td>\n                  <td>{{ trip.center_lat }}</td>\n                  <td>{{ trip.center_lng }}</td>\n                  <td>{{ trip.zoom }}</td>\n              </tr>\n          </tbody>\n      </table>\n    </div>\n    <div>\n      <a class=\"btn btn-primary\" [routerLink]=\"['/trips/new']\">Add Trip</a>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/trips/trip-index/trip-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_trips_trip_service__ = __webpack_require__("../../../../../src/app/services/trips/trip.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TripIndexComponent = (function () {
    function TripIndexComponent(tripservice) {
        this.tripservice = tripservice;
    }
    TripIndexComponent.prototype.ngOnInit = function () {
        this.tripservice.getTrips();
    };
    TripIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-trip-index',
            template: __webpack_require__("../../../../../src/app/trips/trip-index/trip-index.component.html"),
            styles: [__webpack_require__("../../../../../src/app/trips/trip-index/trip-index.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_trips_trip_service__["a" /* TripService */]])
    ], TripIndexComponent);
    return TripIndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/trips/trip-new/trip-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-primary{\n        margin: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/trips/trip-new/trip-new.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Minimum fields for a Trip are Name, Center Latitude, Center Longitude, and Zoom.</p>\n<h2>New Trip</h2>\n\n<form #tripForm=\"ngForm\" (ngSubmit)=\"saveTrip(newTrip)\" class=\"container\">\n  <div class=\"row\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"newTrip.name\" name=\"name\" #name=\"ngModel\">\n    <div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n      <div [hidden]=\"!name.errors.required\">\n          Name is required!\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <label for=\"description\">Description</label>\n    <input type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]=\"newTrip.description\">\n  </div>\n  <div class=\"row\">\n    <label for=\"center_lat\">Center Latitude</label>\n    <input type=\"number\" minlength=\"-90\" maxlength=\"90\" class=\"form-control\" name=\"center_lat\" required [(ngModel)]=\"newTrip.center_lat\" name=\"center_lat\" #center_lat=\"ngModel\">\n    <div *ngIf=\"center_lat.errors && (center_lat.dirty || center_lat.touched)\" class=\"alert alert-danger\">\n      <div [hidden]=\"!center_lat.errors.required\">\n           Center latitude requires a number between -90 and 90!\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <label for=\"center_lng\">Center Longitude</label>\n    <input type=\"number\" minlength=\"-180\" maxlength=\"180\" class=\"form-control\" required [(ngModel)]=\"newTrip.center_lng\" name=\"center_lng\" #center_lng=\"ngModel\">\n    <div *ngIf=\"center_lng.errors && (center_lng.dirty || center_lng.touched)\" class=\"alert alert-danger\">\n      <div [hidden]=\"!center_lng.errors.required\">\n          Center longitude requires a number between -180 and 180!\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <label for=\"zoom\">Zoom Factor</label>\n    <input type=\"number\" minlength=\"1\" maxlength=\"20\" class=\"form-control\" required [(ngModel)]=\"newTrip.zoom\" name=\"zoom\" #zoom=\"ngModel\">\n    <div *ngIf=\"zoom.errors && (zoom.dirty || zoom.touched)\" class=\"alert alert-danger\">\n      <div [hidden]=\"!zoom.errors.required\">\n          Zoom requires an integer between 1 and 20!\n      </div>\n      <div [hidden]=\"!zoom.errors.minlength\">\n          Zoom requires an integer greater than or equal to 1!\n      </div>\n    </div>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!tripForm.form.valid\">Create</button>\n  <a class=\"btn btn-primary\" [routerLink]=\"['/trips']\">Cancel</a>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/trips/trip-new/trip-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_trips_trip_service__ = __webpack_require__("../../../../../src/app/services/trips/trip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service_js__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripNewComponent = (function () {
    function TripNewComponent(tripService, router, _flashMessagesService) {
        this.tripService = tripService;
        this.router = router;
        this._flashMessagesService = _flashMessagesService;
        this.newTrip = {};
    }
    TripNewComponent.prototype.ngOnInit = function () {
    };
    TripNewComponent.prototype.saveTrip = function (newTrip) {
        var _this = this;
        if ((parseFloat(newTrip.center_lng) == NaN) || newTrip.center_lng > 180 || newTrip.center_lng < -180) {
            this._flashMessagesService.show('Center longitude must be in the range of -180 to 180!');
            return;
        }
        else if ((parseFloat(newTrip.center_lat) == NaN) || newTrip.center_lat > 90 || newTrip.center_lat < -90) {
            this._flashMessagesService.show('Center latitude must be in the range of -90 to 90!');
            return;
        }
        else if (!Number.isInteger(newTrip.zoom) || +newTrip.zoom > 20 || +newTrip.zoom < 1) {
            this._flashMessagesService.show('Zoom must be an integer between 1 and 20!');
            return;
        }
        this.tripService.createTrip(newTrip)
            .subscribe(function (response) {
            console.log(response.json());
            var trip = response.json();
            _this.router.navigate(["/trips/" + trip.trip.id]);
        }, function (err) {
            _this._flashMessagesService.show('Sorry unable to create your new trip. ' + err);
        });
    };
    TripNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-trip-new',
            template: __webpack_require__("../../../../../src/app/trips/trip-new/trip-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/trips/trip-new/trip-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_trips_trip_service__["a" /* TripService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service_js__["FlashMessagesService"]])
    ], TripNewComponent);
    return TripNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/trips/trip-show/trip-show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/trips/trip-show/trip-show.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"tripservice.trip\" class=\"container\">\n  <div class='table-responsive'>\n      <table class='table'>\n          <thead>\n              <tr>\n                  <th>Name</th>\n                  <th>Description</th>\n                  <th>Center Lat</th>\n                  <th>Center lng</th>\n                  <th>Zoom</th>\n              </tr>\n          </thead>\n          <tbody>\n              <tr>\n                  <td>{{ tripservice.trip.name }}</td>\n                  <!-- <td><a [routerLink]=\"['/trips', trip.id]\">\n                                {{ trip.name }}\n                            </a>\n\t\t\t\t\t\t      </td> -->\n                  <td>{{ tripservice.trip.description }}</td>\n                  <td>{{ tripservice.trip.center_lat }}</td>\n                  <td>{{ tripservice.trip.center_lng }}</td>\n                  <td>{{ tripservice.trip.zoom }}</td>\n              </tr>\n          </tbody>\n      </table>\n    </div>\n    <div>\n      <a class=\"btn btn-primary\" [routerLink]=\"['/mapit']\">Map Trip</a>\n      <a class=\"btn btn-primary\" [routerLink]=\"['/trips/edit']\">Edit Trip</a>\n      <a class=\"btn btn-primary\" (click)='onDelete()'>Delete Trip</a>\n      <a class=\"btn btn-primary\" [routerLink]=\"['/trips']\">Back To Trips</a>\n    </div>\n    <div class='container'>\n       <router-outlet></router-outlet>\n    </div>\n  <div>\n"

/***/ }),

/***/ "../../../../../src/app/trips/trip-show/trip-show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripShowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trips_trip_service__ = __webpack_require__("../../../../../src/app/services/trips/trip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service_js__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripShowComponent = (function () {
    function TripShowComponent(_route, _router, tripservice, _flashMessagesService) {
        this._route = _route;
        this._router = _router;
        this.tripservice = tripservice;
        this._flashMessagesService = _flashMessagesService;
        this.id = 0;
    }
    TripShowComponent.prototype.ngOnInit = function () {
        var param = this._route.snapshot.paramMap.get('id');
        if (param) {
            this.id = +param;
            this.tripservice.getTrip(this.id);
            this.tripservice.getMarkers();
        }
    };
    TripShowComponent.prototype.onDelete = function () {
        var _this = this;
        console.log("delete trip");
        this.tripservice.deleteTrip(this.id)
            .subscribe(function (response) {
            _this._router.navigate(["/trips"]);
        }, function (err) {
            _this._flashMessagesService.show('There was an issue deleting your trip ' + err);
        });
    };
    TripShowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-trip-show',
            template: __webpack_require__("../../../../../src/app/trips/trip-show/trip-show.component.html"),
            styles: [__webpack_require__("../../../../../src/app/trips/trip-show/trip-show.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_trips_trip_service__["a" /* TripService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service_js__["FlashMessagesService"]])
    ], TripShowComponent);
    return TripShowComponent;
}());



/***/ }),

/***/ "../../../../../src/app/trips/trips.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trip_show_trip_show_component__ = __webpack_require__("../../../../../src/app/trips/trip-show/trip-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__trip_index_trip_index_component__ = __webpack_require__("../../../../../src/app/trips/trip-index/trip-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__trip_edit_trip_edit_component__ = __webpack_require__("../../../../../src/app/trips/trip-edit/trip-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__trip_new_trip_new_component__ = __webpack_require__("../../../../../src/app/trips/trip-new/trip-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_trips_trip_service__ = __webpack_require__("../../../../../src/app/services/trips/trip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__map_it_map_it_module__ = __webpack_require__("../../../../../src/app/map-it/map-it.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__markers_markers_module__ = __webpack_require__("../../../../../src/app/markers/markers.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var TripsModule = (function () {
    function TripsModule() {
    }
    TripsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__map_it_map_it_module__["a" /* MapItModule */],
                __WEBPACK_IMPORTED_MODULE_10__markers_markers_module__["a" /* MarkersModule */],
                // RouterModule.forRoot([
                //     { path: 'trips', component: TripListComponent }
                //   ]),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild([
                    { path: 'trips', component: __WEBPACK_IMPORTED_MODULE_5__trip_index_trip_index_component__["a" /* TripIndexComponent */] },
                    { path: 'trips/new', component: __WEBPACK_IMPORTED_MODULE_7__trip_new_trip_new_component__["a" /* TripNewComponent */] },
                    { path: 'trips/edit', component: __WEBPACK_IMPORTED_MODULE_6__trip_edit_trip_edit_component__["a" /* TripEditComponent */] },
                    { path: 'trips/delete', component: __WEBPACK_IMPORTED_MODULE_6__trip_edit_trip_edit_component__["a" /* TripEditComponent */] },
                    { path: 'trips/:id', component: __WEBPACK_IMPORTED_MODULE_4__trip_show_trip_show_component__["a" /* TripShowComponent */] }
                ]),
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__trip_index_trip_index_component__["a" /* TripIndexComponent */],
                __WEBPACK_IMPORTED_MODULE_4__trip_show_trip_show_component__["a" /* TripShowComponent */],
                __WEBPACK_IMPORTED_MODULE_6__trip_edit_trip_edit_component__["a" /* TripEditComponent */],
                __WEBPACK_IMPORTED_MODULE_7__trip_new_trip_new_component__["a" /* TripNewComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_trips_trip_service__["a" /* TripService */]]
        })
    ], TripsModule);
    return TripsModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiOrigin: 'http://localhost:4741'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map