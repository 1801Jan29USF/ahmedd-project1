webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".yes {\n  color: red;\n}\n\n.no {\n  color: blue;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<!-- Our component for the specific route will be injected here -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        // called after the constructor and called  after the first ngOnChanges()
        this.yup = 'yes';
    };
    AppComponent.prototype.change = function () {
        this.yup = 'no';
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_logged_in_guard__ = __webpack_require__("../../../../../src/app/guards/logged-in.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_reimbursment_reimbursment_component__ = __webpack_require__("../../../../../src/app/components/reimbursment/reimbursment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_view_past_tickets_view_past_tickets_component__ = __webpack_require__("../../../../../src/app/components/view-past-tickets/view-past-tickets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_update_tickets_update_tickets_component__ = __webpack_require__("../../../../../src/app/components/update-tickets/update-tickets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_manager_view_ticket_manager_view_ticket_component__ = __webpack_require__("../../../../../src/app/components/manager-view-ticket/manager-view-ticket.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_manager_filter_tickets_manager_filter_tickets_component__ = __webpack_require__("../../../../../src/app/components/manager-filter-tickets/manager-filter-tickets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_pending_pending_component__ = __webpack_require__("../../../../../src/app/components/pending/pending.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_accepted_accepted_component__ = __webpack_require__("../../../../../src/app/components/accepted/accepted.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_denied_denied_component__ = __webpack_require__("../../../../../src/app/components/denied/denied.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__routes__["a" /* appRoutes */], { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_reimbursment_reimbursment_component__["a" /* ReimbursmentComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_view_past_tickets_view_past_tickets_component__["a" /* ViewPastTicketsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_update_tickets_update_tickets_component__["a" /* UpdateTicketsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_manager_view_ticket_manager_view_ticket_component__["a" /* ManagerViewTicketComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_manager_filter_tickets_manager_filter_tickets_component__["a" /* ManagerFilterTicketsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_pending_pending_component__["a" /* PendingComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_accepted_accepted_component__["a" /* AcceptedComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_denied_denied_component__["a" /* DeniedComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__guards_logged_in_guard__["a" /* LoggedInGuard */],
                __WEBPACK_IMPORTED_MODULE_12_angular2_cookie_services_cookies_service__["CookieService"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/accepted/accepted.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/accepted/accepted.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  accepted works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/accepted/accepted.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcceptedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AcceptedComponent = /** @class */ (function () {
    function AcceptedComponent() {
    }
    AcceptedComponent.prototype.ngOnInit = function () {
    };
    AcceptedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-accepted',
            template: __webpack_require__("../../../../../src/app/components/accepted/accepted.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/accepted/accepted.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AcceptedComponent);
    return AcceptedComponent;
}());

//# sourceMappingURL=accepted.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/denied/denied.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/denied/denied.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  denied works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/denied/denied.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeniedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeniedComponent = /** @class */ (function () {
    function DeniedComponent() {
    }
    DeniedComponent.prototype.ngOnInit = function () {
    };
    DeniedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-denied',
            template: __webpack_require__("../../../../../src/app/components/denied/denied.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/denied/denied.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DeniedComponent);
    return DeniedComponent;
}());

//# sourceMappingURL=denied.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n\n<form>\n\n\n  <div class=\"container\" style=\"margin-top:30px\">\n\n\n    <div class=\"col-md-12\">\n      <div class=\"modal-dialog\" style=\"margin-bottom:0\">\n        <div class=\"modal-content\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">Sign In</h3>\n          </div>\n          <div class=\"panel-body\">\n            <form (ngSubmit)=\"login()\" role=\"form\">\n              <fieldset>\n                <div class=\"form-group\">\n                  <input class=\"form-control\" name=\"username\" [(ngModel)]=\"credential.username\" placeholder=\"username\" type=\"email\" autofocus=\"\">\n                </div>\n                <div class=\"form-group\">\n                  <input class=\"form-control\" name=\"password\" [(ngModel)]=\"credential.password\" placeholder=\"password\" name=\"password\" type=\"password\">\n                </div>\n\n                <button class=\"btn btn-primary\" type=\"submit\">Submit</button>\n              </fieldset>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n    <hr>\n\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, client, cookie) {
        this.router = router;
        this.client = client;
        this.cookie = cookie;
        this.credential = {
            username: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.client.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].context + "login", this.credential, { withCredentials: true })
            .subscribe(function (succ) {
            alert(succ.username + " you have logged in");
            _this.cookie.putObject('user', succ);
            _this.managerstatus = _this.cookie.getObject('user');
            console.log(_this.managerstatus);
            if (_this.managerstatus.roleId === 1) {
                _this.router.navigateByUrl('manager-view-ticket');
            }
            if (_this.managerstatus.roleId === 2) {
                _this.router.navigateByUrl('view-past-tickets');
            }
        }, function (err) {
            alert('failed to log in');
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _c || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/manager-filter-tickets/manager-filter-tickets.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/manager-filter-tickets/manager-filter-tickets.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  manager-filter-tickets works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/manager-filter-tickets/manager-filter-tickets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerFilterTicketsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManagerFilterTicketsComponent = /** @class */ (function () {
    function ManagerFilterTicketsComponent() {
    }
    ManagerFilterTicketsComponent.prototype.ngOnInit = function () {
    };
    ManagerFilterTicketsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manager-filter-tickets',
            template: __webpack_require__("../../../../../src/app/components/manager-filter-tickets/manager-filter-tickets.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/manager-filter-tickets/manager-filter-tickets.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ManagerFilterTicketsComponent);
    return ManagerFilterTicketsComponent;
}());

//# sourceMappingURL=manager-filter-tickets.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/manager-view-ticket/manager-view-ticket.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/manager-view-ticket/manager-view-ticket.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<div class=\"btn-toolbar\">\n    <button class=\"btn btn-primary\">View All Tickets</button>\n    <button class=\"btn\">View Pending Tickets</button>\n    <button class=\"btn\">View Accepted Ticets</button>\n    <button class=\"btn\">View Denied Ticket </button>\n    \n</div>\n<div class=\"well\">\n        <div class=\"well\">\n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                            <th>Reimbursment Type</th>\n                            <th>Description</th>\n                            <th>Amount</th>\n                            <th>Date Submitted</th>\n                            <th>Status</th>\n                            <th>Date Resolved</th>\n            \n                            <th style=\"width: 36px;\"></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let ticket of viewPastTicket\">\n                            <td>{{ticket.reimbursement_type_id}}</td>\n                            <td>{{ticket.description}}</td>\n                            <td>{{ticket.amount}}</td>\n                            <td>{{ticket.time_Submitted}}</td>\n                            <td>{{ticket. reimbursement_status_id}}</td>\n                            <td>{{ticket.time_resolved}}</td>\n            \n            \n                    </tbody>\n                </table>\n</div>\n\n<div class=\"modal small hide fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/manager-view-ticket/manager-view-ticket.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerViewTicketComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManagerViewTicketComponent = /** @class */ (function () {
    function ManagerViewTicketComponent(router, client) {
        this.router = router;
        this.client = client;
        this.loading = false;
        this.users = [];
        this.viewPastTicket = [];
    }
    ManagerViewTicketComponent.prototype.ngOnInit = function () {
    };
    ManagerViewTicketComponent.prototype.viewPastTickets = function () {
        var _this = this;
        this.loading = true;
        {
            this.client.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].context + "view-past-tickets", this.viewPastTicket, { withCredentials: true })
                .subscribe(function (succ) {
                _this.viewPastTicket = succ;
                alert('Posting past tickets');
                _this.router.navigate(['view-past-tickets']);
            }, function (error) {
                alert('Ticket failed to submit');
                _this.loading = false;
            });
        }
    };
    ManagerViewTicketComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manager-view-ticket',
            template: __webpack_require__("../../../../../src/app/components/manager-view-ticket/manager-view-ticket.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/manager-view-ticket/manager-view-ticket.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
    ], ManagerViewTicketComponent);
    return ManagerViewTicketComponent;
    var _a, _b;
}());

//# sourceMappingURL=manager-view-ticket.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pending/pending.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pending/pending.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  pending works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/pending/pending.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PendingComponent = /** @class */ (function () {
    function PendingComponent() {
    }
    PendingComponent.prototype.ngOnInit = function () {
    };
    PendingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pending',
            template: __webpack_require__("../../../../../src/app/components/pending/pending.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pending/pending.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PendingComponent);
    return PendingComponent;
}());

//# sourceMappingURL=pending.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/reimbursment/reimbursment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/reimbursment/reimbursment.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-md-6 col-md-offset-3\">\n  <h2>Submit New Ticket</h2>\n  <form (ngSubmit)=\" submitTicket()\" name=\"form\" >\n      <div class=\"form-group\" >\n          <label for=\"amount\">Amount</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newTicket.amount\" name=\"amount\"  #amount=\"ngModel\" required />\n          <!-- <div >Amount is required</div> -->\n      </div>\n      <div class=\"form-group\" >\n          <label for=\"description\">Description</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newTicket.description\" name=\"description\"  #description=\"ngModel\" required />\n          <!-- <div >Description is required</div> -->\n      </div>\n      <div class=\"form-group\" >\n        <option selected >Select Reimbusement Type</option>\n        <select name =\"type\"[(ngModel)]=\"newTicket.typeId\">\n          <option  value=1>Lodging</option>\n          <option value=2>Travel</option>\n          <option value=3>Food</option> \n          <option value=4>Other</option> \n\n        </select>\n      </div>\n   \n      <div class=\"form-group\">\n          <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n          \n          <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Clear</a>\n      </div>\n\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/reimbursment/reimbursment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReimbursmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReimbursmentComponent = /** @class */ (function () {
    function ReimbursmentComponent(router, client) {
        this.router = router;
        this.client = client;
        this.newTicket = {
            typeId: 0,
            amount: '',
            description: '',
        };
        this.model = {};
        this.loading = false;
    }
    ReimbursmentComponent.prototype.ngOnInit = function () {
    };
    ReimbursmentComponent.prototype.submitTicket = function () {
        var _this = this;
        this.loading = true;
        {
            this.client.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].context + "reimburesment", this.newTicket, { withCredentials: true })
                .subscribe(function (data) {
                // set success message and pass true paramater to persist the message after redirecting to the login page
                alert('Thank you for submitting your request');
                _this.router.navigate(['view-past-tickets']);
            }, function (error) {
                alert('Ticket failed to submit');
                _this.loading = false;
            });
        }
    };
    ReimbursmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reimbursment',
            template: __webpack_require__("../../../../../src/app/components/reimbursment/reimbursment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/reimbursment/reimbursment.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
    ], ReimbursmentComponent);
    return ReimbursmentComponent;
    var _a, _b;
}());

//# sourceMappingURL=reimbursment.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/update-tickets/update-tickets.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/update-tickets/update-tickets.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  update-tickets works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/update-tickets/update-tickets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateTicketsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpdateTicketsComponent = /** @class */ (function () {
    function UpdateTicketsComponent() {
    }
    UpdateTicketsComponent.prototype.ngOnInit = function () {
    };
    UpdateTicketsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-update-tickets',
            template: __webpack_require__("../../../../../src/app/components/update-tickets/update-tickets.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/update-tickets/update-tickets.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpdateTicketsComponent);
    return UpdateTicketsComponent;
}());

//# sourceMappingURL=update-tickets.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/view-past-tickets/view-past-tickets.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/view-past-tickets/view-past-tickets.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<div class=\"btn-toolbar\">\n    <button class=\"btn btn-primary\" routerLink=\"/reimburesment\">Submit New Request</button>\n\n</div>\n<div class=\"well\">\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th>Reimbursment Type</th>\n                <th>Description</th>\n                <th>Amount</th>\n                <th>Date Submitted</th>\n                <th>Status</th>\n                <th>Date Resolved</th>\n\n                <th style=\"width: 36px;\"></th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let ticket of viewPastTicket\">\n                <td>{{ticket.reimbursement_type_id}}</td>\n                <td>{{ticket.description}}</td>\n                <td>{{ticket.amount}}</td>\n                <td>{{ticket.time_Submitted}}</td>\n                <td>{{ticket. reimbursement_status_id}}</td>\n                <td>{{ticket.time_resolved}}</td>\n\n\n        </tbody>\n    </table>\n</div>\n\n<div class=\"modal small hide fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/view-past-tickets/view-past-tickets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPastTicketsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewPastTicketsComponent = /** @class */ (function () {
    function ViewPastTicketsComponent(router, client) {
        this.router = router;
        this.client = client;
        this.viewPastTicket = [];
        this.loading = false;
    }
    ViewPastTicketsComponent.prototype.ngOnInit = function () {
    };
    ViewPastTicketsComponent.prototype.viewPastTickets = function () {
        var _this = this;
        this.loading = true;
        {
            this.client.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].context + "view-past-tickets", this.viewPastTicket, { withCredentials: true })
                .subscribe(function (succ) {
                _this.viewPastTicket = succ;
                alert('Posting past tickets');
                _this.router.navigate(['view-past-tickets']);
            }, function (error) {
                alert('Ticket failed to submit');
                _this.loading = false;
            });
        }
    };
    ViewPastTicketsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-past-tickets',
            template: __webpack_require__("../../../../../src/app/components/view-past-tickets/view-past-tickets.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/view-past-tickets/view-past-tickets.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
    ], ViewPastTicketsComponent);
    return ViewPastTicketsComponent;
    var _a, _b;
}());

//# sourceMappingURL=view-past-tickets.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/logged-in.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedInGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoggedInGuard = /** @class */ (function () {
    function LoggedInGuard(cookie, router) {
        this.cookie = cookie;
        this.router = router;
    }
    LoggedInGuard.prototype.canActivate = function (next, state) {
        console.log('checking cookie');
        if (this.cookie.getObject('user')) {
            return true;
        }
        else {
            this.router.navigateByUrl('/login');
        }
    };
    LoggedInGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], LoggedInGuard);
    return LoggedInGuard;
    var _a, _b;
}());

//# sourceMappingURL=logged-in.guard.js.map

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"/login\">Home</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExample04\" aria-controls=\"navbarsExample04\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExample04\">\n    <ul class=\"navbar-nav mr-auto\">\n      <!-- <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li> -->\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/login\" >Login</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/reimburesment\" >New Ticket</a>\n      </li>\n      <!-- <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li> -->\n      <li ngbDropdown class=\"d-inline-block\">\n        <a class=\"nav-link dropdown-toggle\" id=\"dropdownBasic1\" ngbDropdownToggle>Examples</a>\n        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n\n            <button class=\"dropdown-item\" routerLink=\"/update-tickets\">update-tickets</button>\n            <button class=\"dropdown-item\" routerLink=\"/view-past-tickets\">view-past-tickets.component</button>\n            <button class=\"dropdown-item\" routerLink=\"/manager-view-ticket\">manager-view-ticket</button>\n            <button class=\"dropdown-item\" routerLink=\"manager-filter-tickets\">manager-filter-tickets</button>\n            \n          <!-- <button class=\"dropdown-item\" routerLink=\"/first\">First</button>\n\n          <button class=\"dropdown-item\" routerLink=\"/second\">Second</button>\n          <button class=\"dropdown-item\" routerLink=\"/heroes\">Heroes</button>\n          <button class=\"dropdown-item\" routerLink=\"/pipe\">Pipes</button>\n          <button class=\"dropdown-item\" routerLink=\"/clicker\">Clicker</button>\n          <button class=\"dropdown-item\" routerLink=\"/parent\">Nested Routes</button>\n          <button class=\"dropdown-item\" routerLink=\"/pokemon\">Http Pokemon</button>\n          <button class=\"dropdown-item\" routerLink=\"/users\">Http Users</button> -->\n          \n        </div>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-md-0\">\n      <input class=\"form-control\" type=\"text\" placeholder=\"Search\">\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav/nav.component.css")]
        })
    ], NavComponent);
    return NavComponent;
}());

//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_reimbursment_reimbursment_component__ = __webpack_require__("../../../../../src/app/components/reimbursment/reimbursment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_update_tickets_update_tickets_component__ = __webpack_require__("../../../../../src/app/components/update-tickets/update-tickets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_view_past_tickets_view_past_tickets_component__ = __webpack_require__("../../../../../src/app/components/view-past-tickets/view-past-tickets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_manager_view_ticket_manager_view_ticket_component__ = __webpack_require__("../../../../../src/app/components/manager-view-ticket/manager-view-ticket.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_manager_filter_tickets_manager_filter_tickets_component__ = __webpack_require__("../../../../../src/app/components/manager-filter-tickets/manager-filter-tickets.component.ts");






var appRoutes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_0__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'reimburesment',
        component: __WEBPACK_IMPORTED_MODULE_1__components_reimbursment_reimbursment_component__["a" /* ReimbursmentComponent */]
    },
    {
        path: 'update-tickets',
        component: __WEBPACK_IMPORTED_MODULE_2__components_update_tickets_update_tickets_component__["a" /* UpdateTicketsComponent */]
    },
    {
        path: 'view-past-tickets',
        component: __WEBPACK_IMPORTED_MODULE_3__components_view_past_tickets_view_past_tickets_component__["a" /* ViewPastTicketsComponent */]
    },
    {
        path: 'manager-view-ticket',
        component: __WEBPACK_IMPORTED_MODULE_4__components_manager_view_ticket_manager_view_ticket_component__["a" /* ManagerViewTicketComponent */]
    },
    {
        path: 'manager-filter-tickets',
        component: __WEBPACK_IMPORTED_MODULE_5__components_manager_filter_tickets_manager_filter_tickets_component__["a" /* ManagerFilterTicketsComponent */]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'login'
    }
];
//# sourceMappingURL=routes.js.map

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
    context: 'http://localhost:8080/reimbursement-system/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map