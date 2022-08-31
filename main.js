(self["webpackChunkng_php_dmm_netgame_web"] = self["webpackChunkng_php_dmm_netgame_web"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _routes_auth_auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes/auth/auth.component */ 1018);
/* harmony import */ var _routes_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/game-list/game-list.component */ 7088);
/* harmony import */ var _routes_play_play_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/play/play.component */ 9051);
/* harmony import */ var _routes_settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/settings/settings.component */ 4059);
/* harmony import */ var _routes_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/about/about.component */ 7591);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.guard */ 2993);
/* harmony import */ var _play_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./play.guard */ 881);










const routes = [
    {
        path: '',
        redirectTo: '/play',
        pathMatch: 'full',
        data: {
            title: '欢迎',
        },
    },
    {
        path: 'auth',
        component: _routes_auth_auth_component__WEBPACK_IMPORTED_MODULE_0__.AuthComponent,
        data: {
            title: '登录',
            icon: 'exit_to_app',
        },
    },
    {
        path: 'game-list',
        component: _routes_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_1__.GameListComponent,
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard],
        data: {
            title: '游戏列表',
            icon: 'list',
        },
    },
    {
        path: 'play',
        component: _routes_play_play_component__WEBPACK_IMPORTED_MODULE_2__.PlayComponent,
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard, _play_guard__WEBPACK_IMPORTED_MODULE_6__.PlayGuard],
        data: {
            title: '运行游戏',
            icon: 'play_arrow',
        },
    },
    {
        path: 'settings',
        component: _routes_settings_settings_component__WEBPACK_IMPORTED_MODULE_3__.SettingsComponent,
        data: {
            title: '设置',
            icon: 'settings',
        },
    },
    {
        path: 'about',
        component: _routes_about_about_component__WEBPACK_IMPORTED_MODULE_4__.AboutComponent,
        data: {
            title: '关于',
            icon: 'info',
        },
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_sass_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.sass?ngResource */ 544);
/* harmony import */ var _services_dmm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/dmm.service */ 9063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);









let AppComponent = class AppComponent {
    constructor(router, titleService, activatedRoute, snackBar, dmm) {
        this.router = router;
        this.titleService = titleService;
        this.activatedRoute = activatedRoute;
        this.snackBar = snackBar;
        this.dmm = dmm;
        this.title = '躲猫猫';
    }
    getRoutes(config) {
        const ret = [];
        for (let i = 0; i < config.length; i += 1) {
            const route = config[i];
            if (route.redirectTo) {
                continue;
            }
            ret.push(route);
        }
        return ret;
    }
    ngOnInit() {
        this.routes = this.getRoutes(this.router.config);
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => {
            let child = this.activatedRoute.firstChild;
            while (child) {
                if (child.firstChild) {
                    child = child.firstChild;
                }
                else if (child.snapshot.data && child.snapshot.data['title']) {
                    return child.snapshot.data['title'];
                }
                else {
                    return null;
                }
            }
            return null;
        })).subscribe((title) => {
            this.title = title;
            this.titleService.setTitle(`${title || '欢迎'} | 躲猫猫`);
        });
        this.dmm.emiter.subscribe((message) => setTimeout(() => this.snackBar.open(message, '知道了', {
            duration: 5000,
        })));
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar },
    { type: _services_dmm_service__WEBPACK_IMPORTED_MODULE_2__.DmmService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_sass_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_game_info_list_game_info_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/game-info-list/game-info-list.component */ 1086);
/* harmony import */ var _routes_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/auth/auth.component */ 1018);
/* harmony import */ var _routes_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/game-list/game-list.component */ 7088);
/* harmony import */ var _routes_play_play_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/play/play.component */ 9051);
/* harmony import */ var _routes_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/about/about.component */ 7591);
/* harmony import */ var _routes_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/settings/settings.component */ 4059);
/* harmony import */ var _components_dialogs_install_install_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dialogs/install/install.component */ 4753);
/* harmony import */ var _components_dialogs_regist_regist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dialogs/regist/regist.component */ 4365);
/* harmony import */ var _pipes_safe_resource_url_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/safe-resource-url.pipe */ 836);
/* harmony import */ var _components_dialogs_payment_payment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dialogs/payment/payment.component */ 5478);
/* harmony import */ var _components_dialogs_update_st_update_st_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dialogs/update-st/update-st.component */ 7264);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 8987);



































let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
            _routes_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__.AuthComponent,
            _routes_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_4__.GameListComponent,
            _routes_play_play_component__WEBPACK_IMPORTED_MODULE_5__.PlayComponent,
            _routes_about_about_component__WEBPACK_IMPORTED_MODULE_6__.AboutComponent,
            _routes_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__.SettingsComponent,
            _components_game_info_list_game_info_list_component__WEBPACK_IMPORTED_MODULE_2__.GameInfoListComponent,
            _components_dialogs_install_install_component__WEBPACK_IMPORTED_MODULE_8__.InstallComponent,
            _components_dialogs_regist_regist_component__WEBPACK_IMPORTED_MODULE_9__.RegistComponent,
            _pipes_safe_resource_url_pipe__WEBPACK_IMPORTED_MODULE_10__.SafeResourceUrlPipe,
            _components_dialogs_payment_payment_component__WEBPACK_IMPORTED_MODULE_11__.PaymentComponent,
            _components_dialogs_update_st_update_st_component__WEBPACK_IMPORTED_MODULE_12__.UpdateStComponent,
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatRippleModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInputModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__.MatCheckboxModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDatepickerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatNativeDateModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__.MatTabsModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__.MatDialogModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__.MatSidenavModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_28__.MatListModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__.MatToolbarModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__.MatIconModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__.MatSnackBarModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__.MatProgressSpinnerModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__.MatSlideToggleModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_34__.MatRadioModule,
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 2993:
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/setting.service */ 4207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);




let AuthGuard = class AuthGuard {
    constructor(router, setting) {
        this.router = router;
        this.setting = setting;
    }
    canActivate(next, state) {
        if (!this.setting.category || !this.setting.authenticated) {
            this.router.navigate(['/auth']);
            return false;
        }
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router },
    { type: _services_setting_service__WEBPACK_IMPORTED_MODULE_0__.SettingService }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], AuthGuard);



/***/ }),

/***/ 4753:
/*!*****************************************************************!*\
  !*** ./src/app/components/dialogs/install/install.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstallComponent": () => (/* binding */ InstallComponent)
/* harmony export */ });
/* harmony import */ var D_Code_php_dmm_netgame_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _install_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./install.component.html?ngResource */ 8295);
/* harmony import */ var _install_component_sass_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./install.component.sass?ngResource */ 2177);
/* harmony import */ var _dialog_sass_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog.sass?ngResource */ 2068);
/* harmony import */ var _services_dmm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/dmm.service */ 9063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4363);










let InstallComponent = class InstallComponent {
  constructor(dmm, dialogRef, router, data) {
    this.dmm = dmm;
    this.dialogRef = dialogRef;
    this.router = router;
    this.data = data;
    this.notification = true;
    this.myapp = true;
    this.requesting = false;
  }

  install() {
    var _this = this;

    return (0,D_Code_php_dmm_netgame_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.requesting = true;
      const payload = {
        app_name: _this.data.app_name,
        app_base: _this.data.app_base,
        notification: _this.notification ? 1 : 0,
        myapp: _this.myapp ? 1 : 0
      };
      const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(_this.dmm.install(payload));
      _this.requesting = false;

      _this.dialogRef.close(response);
    })();
  }

  back() {
    this.dialogRef.close();
    this.router.navigate(['/game-list']);
  }

  ngOnInit() {}

};

InstallComponent.ctorParameters = () => [{
  type: _services_dmm_service__WEBPACK_IMPORTED_MODULE_4__.DmmService
}, {
  type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: undefined,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Inject,
    args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA]
  }]
}];

InstallComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-install',
  template: _install_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_install_component_sass_ngResource__WEBPACK_IMPORTED_MODULE_2__, _dialog_sass_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], InstallComponent);


/***/ }),

/***/ 5478:
/*!*****************************************************************!*\
  !*** ./src/app/components/dialogs/payment/payment.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentComponent": () => (/* binding */ PaymentComponent)
/* harmony export */ });
/* harmony import */ var D_Code_php_dmm_netgame_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _payment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.component.html?ngResource */ 7285);
/* harmony import */ var _payment_component_sass_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment.component.sass?ngResource */ 1092);
/* harmony import */ var _dialog_sass_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog.sass?ngResource */ 2068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_app_services_dmm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dmm.service */ 9063);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4363);









let PaymentComponent = class PaymentComponent {
  constructor(dmm, dialogRef, data) {
    this.dmm = dmm;
    this.dialogRef = dialogRef;
    this.data = data;
    this.requesting = false;
    this.detail = this.data[0];
    this.paymentPayload = this.data[1];
  }

  ngOnInit() {
    this.detail = this.data[0];
    this.paymentPayload = this.data[1];
  }

  commit() {
    var _this = this;

    return (0,D_Code_php_dmm_netgame_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.requesting = true;
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(_this.dmm.paymentCommit(_this.paymentPayload)).catch(() => {
        _this.requesting = false;
        return null;
      });

      if (result !== null) {
        _this.dialogRef.close(result);
      }
    })();
  }

  cancel() {
    var _this2 = this;

    return (0,D_Code_php_dmm_netgame_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.requesting = true;
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(_this2.dmm.paymentCancel(_this2.paymentPayload)).catch(() => {
        _this2.requesting = false;
        return null;
      });

      if (result !== null) {
        _this2.dialogRef.close(result);
      }
    })();
  }

};

PaymentComponent.ctorParameters = () => [{
  type: src_app_services_dmm_service__WEBPACK_IMPORTED_MODULE_4__.DmmService
}, {
  type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef
}, {
  type: Array,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
    args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA]
  }]
}];

PaymentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-payment',
  template: _payment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_payment_component_sass_ngResource__WEBPACK_IMPORTED_MODULE_2__, _dialog_sass_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], PaymentComponent);


/***/ }),

/***/ 4365:
/*!***************************************************************!*\
  !*** ./src/app/components/dialogs/regist/regist.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistComponent": () => (/* binding */ RegistComponent)
/* harmony export */ });
/* harmony import */ var D_Code_php_dmm_netgame_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _regist_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regist.component.html?ngResource */ 8892);
/* harmony import */ var _regist_component_sass_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./regist.component.sass?ngResource */ 5735);
/* harmony import */ var _dialog_sass_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog.sass?ngResource */ 2068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_app_services_dmm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dmm.service */ 9063);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material-moment-adapter */ 7118);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4363);













let RegistComponent = class RegistComponent {
  constructor(dmm, dialogRef, router, data) {
    this.dmm = dmm;
    this.dialogRef = dialogRef;
    this.router = router;
    this.data = data;
    this.nickNameList = ['提督', '審神者', '親方', '社長', '王子', '城主', 'プロデューサー', '首領', '店長', '千雪', '結城', '山田', '田中', '紅雪', '小春凪', 'なつひめ', 'みさか白鳳', 'てまり姫', '早生あかつき', 'ゆかりん', 'かおりん', 'あーみん', 'まりあ', 'ことり', 'ゆっきー', 'みいにゃん', 'あやきち', 'つぐつぐ', 'みゆ', '十六夜', '琥珀', '月輝夜姫', '都椿姫', '百日紅', '花螺李', '濡烏', '王鈴', '秋茜', '姫星紅', '龍眼', '黒の剣士', '自宅警備員', '星の王子様', 'マルク', 'カメバズーカ', 'アルパカ', 'ペンギン', 'ロキ', 'ムスカ', 'シルキー', '月の住人', 'ホワイトライオン', '覇王', '仙人掌', 'しらゆき', 'なぎ', 'はづき', 'ハラショー', 'ハーゲンティ', 'ムルムル', '黒い天使', 'レリエル', 'ルベライト', '赤虎眼石', 'きたかみ', 'さしゃ', 'ななみつき', 'はやて', '北斗', 'クレド', 'カノン', 'ねむのき'];
    this.minDate = new Date(1900, 0, 1);
    this.maxDate = new Date(new Date().getFullYear() - 18, 11, 31);
    this.birthday = moment__WEBPACK_IMPORTED_MODULE_5__(new Date(new Date().getFullYear() - 18, 0, 1));
    this.nickname = this.nickNameList[Math.floor(Math.random() * this.nickNameList.length)];
    this.gender = 'male';
    this.isGeneralChecked = true;
    this.isAdultChecked = false;
    this.requesting = false;
  }

  ngOnInit() {}

  back() {
    this.dialogRef.close();
    this.router.navigate(['/game-list']);
  }

  randomNickname() {
    this.nickname = this.nickNameList[Math.floor(Math.random() * this.nickNameList.length)];
  }

  regist() {
    var _this = this;

    return (0,D_Code_php_dmm_netgame_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.requesting = true;
      const payload = {
        app_base: _this.data,
        nickname: _this.nickname,
        gender: _this.gender,
        year: _this.birthday.year().toString(),
        month: (_this.birthday.month() + 1).toString().padStart(2, '0'),
        day: _this.birthday.date().toString().padStart(2, '0')
      };

      if (_this.isGeneralChecked) {
        payload.isGeneralChecked = 'on';
      }

      if (_this.isAdultChecked) {
        payload.isAdultChecked = 'on';
      }

      const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(_this.dmm.regist(payload));
      _this.requesting = false;

      _this.dialogRef.close(response);
    })();
  }

};

RegistComponent.ctorParameters = () => [{
  type: src_app_services_dmm_service__WEBPACK_IMPORTED_MODULE_4__.DmmService
}, {
  type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: String,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Inject,
    args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA]
  }]
}];

RegistComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-regist',
  template: _regist_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  providers: [// The locale would typically be provided on the root module of your application. We do it at
  // the component level here, due to limitations of our example generation script.
  {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MAT_DATE_LOCALE,
    useValue: 'zh-CN'
  }, // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
  // `MatMomentDateModule` in your applications root module. We provide it at the component level
  // here, due to limitations of our example generation script.
  {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.DateAdapter,
    useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_12__.MomentDateAdapter,
    deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MAT_DATE_LOCALE]
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MAT_DATE_FORMATS,
    useValue: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_12__.MAT_MOMENT_DATE_FORMATS
  }],
  styles: [_regist_component_sass_ngResource__WEBPACK_IMPORTED_MODULE_2__, _dialog_sass_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], RegistComponent);


/***/ }),

/***/ 7264:
/*!*********************************************************************!*\
  !*** ./src/app/components/dialogs/update-st/update-st.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateStComponent": () => (/* binding */ UpdateStComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _update_st_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-st.component.html?ngResource */ 7960);
/* harmony import */ var _update_st_component_sass_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-st.component.sass?ngResource */ 5256);
/* harmony import */ var _dialog_sass_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialog.sass?ngResource */ 2068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);







let UpdateStComponent = class UpdateStComponent {
    constructor(dialogRef, router) {
        this.dialogRef = dialogRef;
        this.router = router;
    }
    back() {
        this.dialogRef.close();
    }
    refresh() {
        this.dialogRef.close(true);
    }
    ngOnInit() {
    }
};
UpdateStComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
UpdateStComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-update-st',
        template: _update_st_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_update_st_component_sass_ngResource__WEBPACK_IMPORTED_MODULE_1__, _dialog_sass_ngResource__WEBPACK_IMPORTED_MODULE_2__]
    })
], UpdateStComponent);



/***/ }),

/***/ 1086:
/*!***********************************************************************!*\
  !*** ./src/app/components/game-info-list/game-info-list.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameInfoListComponent": () => (/* binding */ GameInfoListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _game_info_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-info-list.component.html?ngResource */ 1937);
/* harmony import */ var _game_info_list_component_sass_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-info-list.component.sass?ngResource */ 2056);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let GameInfoListComponent = class GameInfoListComponent {
    constructor() {
        this.list = [];
        this.category = 'general';
    }
    ngOnInit() {
    }
    getQueryParamsFrom(info) {
        return {
            category: this.category,
            name: info.name,
        };
    }
    getThumb(info) {
        return {
            'background-image': `url(https://img-freegames.dmm.com/app/${info.thumb}/details/pic_thmb.jpg)`,
        };
    }
};
GameInfoListComponent.ctorParameters = () => [];
GameInfoListComponent.propDecorators = {
    list: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    category: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
GameInfoListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-game-info-list',
        template: _game_info_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_game_info_list_component_sass_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GameInfoListComponent);



/***/ }),

/***/ 836:
/*!*************************************************!*\
  !*** ./src/app/pipes/safe-resource-url.pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafeResourceUrlPipe": () => (/* binding */ SafeResourceUrlPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);



let SafeResourceUrlPipe = class SafeResourceUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        const bypass = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        const sanitized = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.RESOURCE_URL, bypass);
        return this.sanitizer.bypassSecurityTrustResourceUrl(sanitized);
    }
};
SafeResourceUrlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer }
];
SafeResourceUrlPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
        name: 'safeResourceUrl',
    })
], SafeResourceUrlPipe);



/***/ }),

/***/ 881:
/*!*******************************!*\
  !*** ./src/app/play.guard.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayGuard": () => (/* binding */ PlayGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/setting.service */ 4207);




let PlayGuard = class PlayGuard {
    constructor(router, setting) {
        this.router = router;
        this.setting = setting;
    }
    canActivate(next, state) {
        if ('category' in next.queryParams) {
            const searchCategory = next.queryParams.category;
            if ((searchCategory !== 'general') && (searchCategory !== 'adult')) {
                this.router.navigate(['/game-list']);
                return false;
            }
            if (searchCategory !== 'general' && this.setting.category === 'general') {
                this.router.navigate(['/game-list']);
                return false;
            }
            if ('name' in next.queryParams) {
                return true;
            }
        }
        if (!this.setting.game || !this.setting.gameCategory) {
            this.router.navigate(['/game-list']);
            return false;
        }
        return true;
    }
};
PlayGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router },
    { type: _services_setting_service__WEBPACK_IMPORTED_MODULE_0__.SettingService }
];
PlayGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], PlayGuard);



/***/ }),

/***/ 7591:
/*!*************************************************!*\
  !*** ./src/app/routes/about/about.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _about_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component.html?ngResource */ 9838);
/* harmony import */ var _about_component_sass_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component.sass?ngResource */ 6950);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent.ctorParameters = () => [];
AboutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-about',
        template: _about_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_about_component_sass_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AboutComponent);



/***/ }),

/***/ 1018:
/*!***********************************************!*\
  !*** ./src/app/routes/auth/auth.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthComponent": () => (/* binding */ AuthComponent)
/* harmony export */ });
/* harmony import */ var D_Code_php_dmm_netgame_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _auth_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.component.html?ngResource */ 2814);
/* harmony import */ var _auth_component_sass_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.component.sass?ngResource */ 3884);
/* harmony import */ var _services_dmm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/dmm.service */ 9063);
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/setting.service */ 4207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_types_dmm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/types/dmm */ 3326);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4363);










let AuthComponent = class AuthComponent {
  constructor(setting, dmm, router) {
    this.setting = setting;
    this.dmm = dmm;
    this.router = router;
    this.loginPayload = {
      loginID: this.setting.loginID || '',
      password: this.setting.password || '',
      saveLoginID: this.setting.loginID ? true : false,
      savePassword: this.setting.password ? true : false,
      autoLogin: this.setting.autoLogin
    };
    this.category = this.setting.category === 'exchange' ? 1 : 0;
    this.requesting = false;
  }

  ngOnInit() {}

  login() {
    var _this = this;

    return (0,D_Code_php_dmm_netgame_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.requesting = true;
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(_this.dmm.login({
        login_id: _this.loginPayload.loginID,
        password: _this.loginPayload.password,
        use_auto_login: _this.loginPayload.autoLogin ? 1 : 0,
        save_login_id: _this.loginPayload.saveLoginID ? 1 : 0,
        save_password: _this.loginPayload.savePassword ? 1 : 0
      }, _this.category === 1));
      _this.requesting = false;

      if (result.code === src_app_types_dmm__WEBPACK_IMPORTED_MODULE_5__.OpCode.OK) {
        _this.router.navigate(['/game-list']);
      }
    })();
  }

  logout() {
    var _this2 = this;

    return (0,D_Code_php_dmm_netgame_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.requesting = true;
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(_this2.dmm.logout());
      _this2.requesting = false;
    })();
  }

};

AuthComponent.ctorParameters = () => [{
  type: _services_setting_service__WEBPACK_IMPORTED_MODULE_4__.SettingService
}, {
  type: _services_dmm_service__WEBPACK_IMPORTED_MODULE_3__.DmmService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}];

AuthComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-auth',
  template: _auth_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_auth_component_sass_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AuthComponent);


/***/ }),

/***/ 7088:
/*!*********************************************************!*\
  !*** ./src/app/routes/game-list/game-list.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameListComponent": () => (/* binding */ GameListComponent)
/* harmony export */ });
/* harmony import */ var D_Code_php_dmm_netgame_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _game_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-list.component.html?ngResource */ 9529);
/* harmony import */ var _game_list_component_sass_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-list.component.sass?ngResource */ 4267);
/* harmony import */ var _services_game_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/game-list.service */ 4412);
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/setting.service */ 4207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);









let GameListComponent = class GameListComponent {
  constructor(setting, router, sanitizer, gameList) {
    this.setting = setting;
    this.router = router;
    this.sanitizer = sanitizer;
    this.gameList = gameList;
    this.category = this.setting.category === 'exchange' ? 1 : 0;
    this.gameCategory = this.category ? this.setting.gameCategory === 'general' ? 0 : 1 : 0;
    this.adultList = [];
    this.generalList = [];
  }

  ngOnInit() {
    this.gameList.getList('general').then(list => {
      for (let i = 0; i < list.length; i += 1) {
        const checked = {
          name: this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_5__.SecurityContext.URL, list[i].name),
          title: list[i].title,
          comment: list[i].comment,
          thumb: this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_5__.SecurityContext.URL, list[i].thumb)
        };
        this.generalList.push(checked);
      }
    });

    if (this.setting.category === 'exchange') {
      this.gameList.getList('adult').then(list => {
        for (let i = 0; i < list.length; i += 1) {
          const checked = {
            name: this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_5__.SecurityContext.URL, list[i].name),
            title: list[i].title,
            comment: list[i].comment,
            thumb: this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_5__.SecurityContext.STYLE, list[i].thumb)
          };
          this.adultList.push(checked);
        }
      });
    }
  }

  run(name) {
    var _this = this;

    return (0,D_Code_php_dmm_netgame_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.setting.game = name;
      _this.setting.gameCategory = _this.gameCategory ? 'adult' : 'general';

      _this.router.navigate(['/play'], {
        queryParams: {
          name,
          category: _this.setting.gameCategory
        }
      });
    })();
  }

};

GameListComponent.ctorParameters = () => [{
  type: _services_setting_service__WEBPACK_IMPORTED_MODULE_4__.SettingService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer
}, {
  type: _services_game_list_service__WEBPACK_IMPORTED_MODULE_3__.GameListService
}];

GameListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-game-list',
  template: _game_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_game_list_component_sass_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], GameListComponent);


/***/ }),

/***/ 9051:
/*!***********************************************!*\
  !*** ./src/app/routes/play/play.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayComponent": () => (/* binding */ PlayComponent)
/* harmony export */ });
/* harmony import */ var D_Code_php_dmm_netgame_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _play_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play.component.html?ngResource */ 8271);
/* harmony import */ var _play_component_sass_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./play.component.sass?ngResource */ 4061);
/* harmony import */ var _components_dialogs_update_st_update_st_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../components/dialogs/update-st/update-st.component */ 7264);
/* harmony import */ var _components_dialogs_payment_payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../components/dialogs/payment/payment.component */ 5478);
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/setting.service */ 4207);
/* harmony import */ var _types_dmm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../types/dmm */ 3326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_app_components_dialogs_install_install_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/dialogs/install/install.component */ 4753);
/* harmony import */ var src_app_services_dmm_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/dmm.service */ 9063);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_components_dialogs_regist_regist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/dialogs/regist/regist.component */ 4365);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 6067);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 9295);
















let PlayComponent = class PlayComponent {
  constructor(dialog, setting, dmm, router, activatedRoute) {
    var _this = this;

    this.dialog = dialog;
    this.setting = setting;
    this.dmm = dmm;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.iframeWidth = 1200;
    this.iframeHeight = 1200;
    this.loading = false;
    this.pure = false;
    this.osapi = '';
    this.frameOrigin = '';
    this.name = '';
    this.notification = true;
    this.myapp = true;
    this.updateStTimer = null;
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.ReplaySubject(1);
    this.response$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    this.gadgetInfo = {};
    this.rpcToken = '';
    this.newTransactionHost = 'pc-play.games.dmm.com';
    this.oldTransactionHost = 'www.dmm.com';
    this.updateST = /*#__PURE__*/(0,D_Code_php_dmm_netgame_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.firstValueFrom)(_this.dmm.updateST({
        app_name: _this.name,
        app_id: _this.gadgetInfo.app_id,
        app_base: _this.category,
        st: encodeURIComponent(_this.gadgetInfo.st),
        time: _this.gadgetInfo.time,
        token: _this.gadgetInfo.token
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(_this.destroyed$)));

      if (result.code !== _types_dmm__WEBPACK_IMPORTED_MODULE_6__.OpCode.OK || result.data.status !== 'ok') {
        clearInterval(_this.updateStTimer);

        const dialog = _this.dialog.open(_components_dialogs_update_st_update_st_component__WEBPACK_IMPORTED_MODULE_3__.UpdateStComponent, {
          disableClose: true,
          data: null
        });

        dialog.afterClosed().subscribe(result => {
          if (result) {
            _this.osapi = '';

            _this.run();
          }
        });
        return;
      }

      if (_this.gadgetInfo.st !== result.data.result) {
        _this.gadgetInfo.st = result.data.result;
      }

      _this.gadgetInfo.time = result.data.time;

      _this.rpcMessage('update_security_token', _this.gadgetInfo.st);
    });

    this.handleResponse = response => {
      switch (response.code) {
        case _types_dmm__WEBPACK_IMPORTED_MODULE_6__.OpCode.OK:
          if (response.data && response.data.gadget_info) {
            this.gadgetInfo = response.data.gadget_info;
            this.gadgetInfo.st = decodeURIComponent(this.gadgetInfo.st);
            this.osapi = this.handleOsapi(this.gadgetInfo.url); // dirty fix for POI

            if ('align' in window) {
              this.pure = true; // quick-dirty fix for kancolle

              if (this.name === 'kancolle') {
                setTimeout(() => this.frame.style.top = '-16px', 0);
              }
            }

            if (this.setting.autoRedirect) {
              this.setting.game = null;
              this.setting.gameCategory = null;
              window.location.href = this.osapi;
              return;
            }

            this.setting.game = this.name;
            this.setting.gameCategory = this.category;
            this.frameOrigin = new URL(this.osapi).origin;
            clearInterval(this.updateStTimer);
            this.updateStTimer = setInterval(this.updateST, 60 * 30 * 1000);
            this.loading = true;

            if ('iframe_width' in response.data && response.data.iframe_width) {
              this.iframeWidth = response.data.iframe_width;
            }
          }

          break;

        case _types_dmm__WEBPACK_IMPORTED_MODULE_6__.OpCode.DMM_GAME_INSTALL_NEEDED:
          const dialog = this.dialog.open(src_app_components_dialogs_install_install_component__WEBPACK_IMPORTED_MODULE_7__.InstallComponent, {
            disableClose: true,
            data: {
              app_name: this.name,
              app_base: this.category
            }
          });
          dialog.afterClosed().subscribe(result => {
            if (!result) {
              return;
            }

            this.response$.next(result);
          });
          break;

        case _types_dmm__WEBPACK_IMPORTED_MODULE_6__.OpCode.DMM_REQUIRE_PROFILE:
          const registDialog = this.dialog.open(src_app_components_dialogs_regist_regist_component__WEBPACK_IMPORTED_MODULE_9__.RegistComponent, {
            disableClose: true,
            data: this.category
          });
          registDialog.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(result => !!result), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(result => {
            if (result.code !== _types_dmm__WEBPACK_IMPORTED_MODULE_6__.OpCode.OK) {
              return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)(result);
            }

            const payload = {
              app_name: this.name,
              app_base: this.category,
              notification: this.notification ? 1 : 0,
              myapp: this.myapp ? 1 : 0
            };
            return this.dmm.install(payload);
          }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroyed$)).subscribe(result => this.response$.next(result));
          break;

        case _types_dmm__WEBPACK_IMPORTED_MODULE_6__.OpCode.DMM_FORCE_REDIRECT:
        case _types_dmm__WEBPACK_IMPORTED_MODULE_6__.OpCode.DMM_GAME_ALREADY_INSTALLED:
          if (this.setting.autoRetry) {
            this.run();
          }

          break;

        case _types_dmm__WEBPACK_IMPORTED_MODULE_6__.OpCode.DMM_TOKEN_EXPIRED:
          this.setting.authenticated = false;
          this.router.navigate(['/auth']);
          break;

        default:
          this.router.navigate(['/game-list']);
      }
    };

    this.handleMessage = e => {
      if (e.origin === window.location.origin) {
        return;
      }

      const raw = JSON.parse(e.data);
      const payload = {
        event: raw.s,
        data: raw.a
      };

      switch (payload.event) {
        case 'resize_iframe':
          this.iframeHeight = payload.data[0];
          break;

        case '__ack':
          this.loading = false;
          break;

        case 'dmm.requestPayment':
          this.requestPayment(payload);
          break;

        default:
          console.log(payload);
      }
    };
  }

  get frame() {
    const frame = window.document.getElementById('game_frame');
    return frame || null;
  }

  rpcMessage(event, ...data) {
    this.frame.contentWindow.postMessage(JSON.stringify({
      s: event,
      a: data,
      t: this.rpcToken,
      c: 0,
      f: '..',
      l: false
    }), this.frameOrigin);
  }

  tryCreateUrl(url, fallbackSchema) {
    try {
      return new URL(url);
    } catch (_) {
      return new URL(`${fallbackSchema}://${url}`);
    }
  }

  handleOsapi(osapi) {
    const parser = document.createElement('textarea');
    parser.innerHTML = osapi;
    const params = this.tryCreateUrl(parser.value, "http");

    if (params.searchParams.has('parent')) {
      params.searchParams.set('parent', `${window.location.origin}${window.location.pathname}`);
    }

    const hashPair = params.hash.substr(1).split('=');

    if (hashPair[0] === 'rpctoken') {
      this.rpcToken = hashPair[1];
    }

    const result = params.toString();
    return result;
  }

  run() {
    const payload = {
      app_name: this.name,
      app_base: this.category
    };
    this.dmm.run(payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroyed$)).subscribe(response => this.handleResponse(response));
  }

  attached() {
    var _this2 = this;

    return (0,D_Code_php_dmm_netgame_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const searchParams = _this2.activatedRoute.snapshot.queryParams;

      if (searchParams.category && searchParams.name) {
        _this2.name = searchParams.name;
        _this2.category = searchParams.category;
      } else {
        if (_this2.setting.gameCategory && _this2.setting.game) {
          _this2.category = _this2.setting.gameCategory;
          _this2.name = _this2.setting.game;

          _this2.router.navigate(['/play'], {
            queryParams: {
              name,
              category: _this2.setting.gameCategory
            }
          });
        } else {
          return _this2.router.navigate(['/game-list']);
        }
      }

      if (_this2.category !== 'general' && _this2.category !== 'adult' || _this2.name.length > 64 || _this2.category !== 'general' && _this2.setting.category === 'general') {
        return _this2.router.navigate(['/game-list']);
      }

      _this2.run();
    })();
  }

  requestPayment(payload) {
    var _this3 = this;

    return (0,D_Code_php_dmm_netgame_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const transactionUrl = new URL(payload.data[0].transactionUrl);
      const paymentPayload = {
        app_name: _this3.name,
        app_base: _this3.category,
        app_id: _this3.gadgetInfo.app_id,
        version: transactionUrl.host === _this3.newTransactionHost ? 'new' : 'old',
        payment_id: payload.data[0].paymentId
      };
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.firstValueFrom)(_this3.dmm.requestPayment(paymentPayload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(_this3.destroyed$)));

      if (result.code !== _types_dmm__WEBPACK_IMPORTED_MODULE_6__.OpCode.OK) {
        _this3.rpcMessage('dmm.requestPaymentCallback', 500, result.data);

        return;
      }

      const paymentDialog = _this3.dialog.open(_components_dialogs_payment_payment_component__WEBPACK_IMPORTED_MODULE_4__.PaymentComponent, {
        disableClose: true,
        width: '600px',
        data: [result.data, paymentPayload]
      });

      paymentDialog.afterClosed().subscribe( /*#__PURE__*/function () {
        var _ref2 = (0,D_Code_php_dmm_netgame_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
          if (result.code !== _types_dmm__WEBPACK_IMPORTED_MODULE_6__.OpCode.OK) {
            _this3.rpcMessage('dmm.requestPaymentCallback', 500, JSON.parse(result.data));

            return;
          }

          _this3.rpcMessage('dmm.requestPaymentCallback', 200, {
            amount: result.data.amount,
            response_code: result.data.response_code,
            payment_id: result.data.payment_id
          });

          return;
        });

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }

  ngOnInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.fromEvent)(window, 'message').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroyed$)).subscribe(e => this.handleMessage(e));
    this.response$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroyed$)).subscribe(response => this.handleResponse(response));
    this.attached();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
    clearInterval(this.updateStTimer);
  }

};

PlayComponent.ctorParameters = () => [{
  type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialog
}, {
  type: _services_setting_service__WEBPACK_IMPORTED_MODULE_5__.SettingService
}, {
  type: src_app_services_dmm_service__WEBPACK_IMPORTED_MODULE_8__.DmmService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_20__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute
}];

PlayComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_22__.Component)({
  selector: 'app-play',
  template: _play_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_play_component_sass_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PlayComponent);


/***/ }),

/***/ 4059:
/*!*******************************************************!*\
  !*** ./src/app/routes/settings/settings.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.component.html?ngResource */ 4448);
/* harmony import */ var _settings_component_sass_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.component.sass?ngResource */ 4062);
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/setting.service */ 4207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





let SettingsComponent = class SettingsComponent {
    constructor(setting) {
        this.setting = setting;
    }
    ngOnInit() {
    }
    changeSetting(key, event) {
        this.setting[key] = event.checked;
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _services_setting_service__WEBPACK_IMPORTED_MODULE_2__.SettingService }
];
SettingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-settings',
        template: _settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_settings_component_sass_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SettingsComponent);



/***/ }),

/***/ 9063:
/*!*****************************************!*\
  !*** ./src/app/services/dmm.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DmmService": () => (/* binding */ DmmService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _setting_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.service */ 4207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _types_dmm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/dmm */ 3326);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5474);







let DmmService = class DmmService {
    constructor(setting, http) {
        this.setting = setting;
        this.http = http;
        this.responseText = {
            // tslint:disable-next-line: object-literal-key-quotes
            '0': '载入成功',
            '-1': '似乎输入了错误的数据',
            '-2': '服务器网络通信故障',
            '-10': '没找到DMM验证信息',
            '-11': '没找到验证信息',
            '-12': '似乎DMM修改了数据格式',
            '-13': 'DMM要求更改用户密码',
            '-14': '对DMM输入了错误的数据',
            '-15': '需要先安装这个游戏',
            '-16': '这个游戏已经安装过了',
            '-17': '验证信息已经过期',
            '-18': '无效的用户名和密码',
            '-19': 'DMM强制要求页面重定向',
            '-20': '需要完善账号信息',
            '-100': '浏览器与服务器通信失败',
            '-101': '丢失了登录凭据, 需重新登录',
            '-110': '登录器服务端回报了无效的数据',
        };
        this.url = 'http://zazck.s1001.xrea.com/services/1562817725000/api.php';
        this.emiter = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    createFormData(input) {
        const result = new FormData();
        if (input) {
            Object.keys(input).forEach((k) => {
                const v = input[k];
                result.append(k, ((v === true) || (v === false)) ? +v : v);
            });
        }
        const cookies = this.setting.cookies;
        if (cookies) {
            result.append('cookies', JSON.stringify(cookies));
        }
        else {
            result.append('cookies', '[]');
        }
        return result;
    }
    request(input, init) {
        const { body, method } = init;
        this.http.post;
        return (this.http[method])(input, body)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
                code: _types_dmm__WEBPACK_IMPORTED_MODULE_1__.OpCode.CLIENT_NETWORK_ERROR,
                data: this.responseText[_types_dmm__WEBPACK_IMPORTED_MODULE_1__.OpCode.CLIENT_NETWORK_ERROR],
                cookies: [],
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((result) => {
            if (result.cookies) {
                this.setting.cookies = result.cookies;
            }
            this.emiter.next(this.responseText[result.code]);
            if (result.code === _types_dmm__WEBPACK_IMPORTED_MODULE_1__.OpCode.DMM_TOKEN_EXPIRED) {
                this.setting.cookies = [];
                this.setting.authenticated = false;
            }
        }));
    }
    login(payload, exchange) {
        const data = this.createFormData(payload);
        data.append('method', exchange ? 'login_exchange' : 'login');
        return this.request(this.url, {
            method: 'post',
            body: data,
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((result) => {
            if (result.code !== _types_dmm__WEBPACK_IMPORTED_MODULE_1__.OpCode.OK) {
                return;
            }
            if (payload.save_login_id) {
                this.setting.loginID = payload.login_id;
            }
            else {
                this.setting.loginID = null;
            }
            if (payload.save_password) {
                this.setting.password = payload.password;
            }
            else {
                this.setting.password = null;
            }
            if (payload.use_auto_login) {
                this.setting.autoLogin = true;
            }
            else {
                this.setting.autoLogin = null;
            }
            if (exchange) {
                this.setting.category = 'exchange';
            }
            else {
                this.setting.category = 'general';
            }
            this.setting.authenticated = true;
        }));
    }
    logout() {
        const data = this.createFormData();
        data.append('method', 'logout');
        return this.request(this.url, {
            method: 'post',
            body: data,
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((result) => {
            if (result.code === _types_dmm__WEBPACK_IMPORTED_MODULE_1__.OpCode.OK) {
                this.setting.authenticated = false;
            }
        }));
    }
    install(payload) {
        if (!this.setting.cookies) {
            return;
        }
        const data = this.createFormData(payload);
        data.append('method', 'install');
        return this.request(this.url, {
            method: 'post',
            body: data,
        });
    }
    run(payload) {
        if (!this.setting.cookies) {
            return;
        }
        const data = this.createFormData(payload);
        data.append('method', 'run');
        return this.request(this.url, {
            method: 'post',
            body: data,
        });
    }
    updateST(payload) {
        if (!this.setting.cookies) {
            return;
        }
        const data = this.createFormData(payload);
        data.append('method', 'update_st');
        return this.request(this.url, {
            method: 'post',
            body: data,
        });
    }
    regist(payload) {
        if (!this.setting.cookies) {
            return;
        }
        const data = this.createFormData(payload);
        data.append('method', 'regist');
        return this.request(this.url, {
            method: 'post',
            body: data,
        });
    }
    requestPayment(payload) {
        if (!this.setting.cookies) {
            return;
        }
        const data = this.createFormData(payload);
        data.append('method', 'request_payment');
        return this.request(this.url, {
            method: 'post',
            body: data,
        });
    }
    paymentCommit(payload) {
        if (!this.setting.cookies) {
            return;
        }
        const data = this.createFormData(payload);
        data.append('method', 'payment_commit');
        return this.request(this.url, {
            method: 'post',
            body: data,
        });
    }
    paymentCancel(payload) {
        if (!this.setting.cookies) {
            return;
        }
        const data = this.createFormData(payload);
        data.append('method', 'payment_cancel');
        return this.request(this.url, {
            method: 'post',
            body: data,
        });
    }
};
DmmService.ctorParameters = () => [
    { type: _setting_service__WEBPACK_IMPORTED_MODULE_0__.SettingService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient }
];
DmmService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root',
    })
], DmmService);



/***/ }),

/***/ 4412:
/*!***********************************************!*\
  !*** ./src/app/services/game-list.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameListService": () => (/* binding */ GameListService)
/* harmony export */ });
/* harmony import */ var D_Code_php_dmm_netgame_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



let GameListService = class GameListService {
  constructor() {
    this.lists = {
      general: [],
      adult: []
    };
  }

  getList(category) {
    var _this = this;

    return (0,D_Code_php_dmm_netgame_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.lists[category].length === 0) {
        const response = yield fetch(`/assets/${category}.json`).catch(_ => new Response('[]'));
        _this.lists[category] = yield response.json();
      }

      return _this.lists[category];
    })();
  }

};

GameListService.ctorParameters = () => [];

GameListService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], GameListService);


/***/ }),

/***/ 4207:
/*!*********************************************!*\
  !*** ./src/app/services/setting.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingService": () => (/* binding */ SettingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let SettingService = class SettingService {
    constructor() { }
    /*
      autoLogin: boolean;
      autoRedirect: boolean;
      loginID: string;
      password: string;
      category: 'general' | 'exchange'; // 'adult'
      game: string;
      gameCategory: 'general' | 'adult';
      cookies: object;
      authenticated: boolean;
      autoRelogin: boolean;
    */
    //   get $1(): $2 {\n    return JSON.parse(localStorage.getItem('$1'));\n  }\n  set $1(v: $2) {\n    if (v === null) {\n      localStorage.removeItem('$1');\n    } else {\n      localStorage.setItem('$1', JSON.stringify(v));\n    }\n  }
    get autoLogin() {
        return JSON.parse(localStorage.getItem('autoLogin'));
    }
    set autoLogin(v) {
        if (v === null) {
            localStorage.removeItem('autoLogin');
        }
        else {
            localStorage.setItem('autoLogin', JSON.stringify(v));
        }
    }
    get autoRedirect() {
        return JSON.parse(localStorage.getItem('autoRedirect'));
    }
    set autoRedirect(v) {
        if (v === null) {
            localStorage.removeItem('autoRedirect');
        }
        else {
            localStorage.setItem('autoRedirect', JSON.stringify(v));
        }
    }
    get loginID() {
        return JSON.parse(localStorage.getItem('loginID'));
    }
    set loginID(v) {
        if (v === null) {
            localStorage.removeItem('loginID');
        }
        else {
            localStorage.setItem('loginID', JSON.stringify(v));
        }
    }
    get password() {
        return JSON.parse(localStorage.getItem('password'));
    }
    set password(v) {
        if (v === null) {
            localStorage.removeItem('password');
        }
        else {
            localStorage.setItem('password', JSON.stringify(v));
        }
    }
    get category() {
        return JSON.parse(localStorage.getItem('category'));
    }
    set category(v) {
        if (v === null) {
            localStorage.removeItem('category');
        }
        else {
            localStorage.setItem('category', JSON.stringify(v));
        }
    } // 'adult'
    get game() {
        return JSON.parse(localStorage.getItem('game'));
    }
    set game(v) {
        if (v === null) {
            localStorage.removeItem('game');
        }
        else {
            localStorage.setItem('game', JSON.stringify(v));
        }
    }
    get gameCategory() {
        return JSON.parse(localStorage.getItem('gameCategory'));
    }
    set gameCategory(v) {
        if (v === null) {
            localStorage.removeItem('gameCategory');
        }
        else {
            localStorage.setItem('gameCategory', JSON.stringify(v));
        }
    }
    get cookies() {
        return JSON.parse(localStorage.getItem('cookies'));
    }
    set cookies(v) {
        if (v === null) {
            localStorage.removeItem('cookies');
        }
        else {
            localStorage.setItem('cookies', JSON.stringify(v));
        }
    }
    get authenticated() {
        return JSON.parse(localStorage.getItem('authenticated'));
    }
    set authenticated(v) {
        if (v === null) {
            localStorage.removeItem('authenticated');
        }
        else {
            localStorage.setItem('authenticated', JSON.stringify(v));
        }
    }
    get autoRelogin() {
        return JSON.parse(localStorage.getItem('autoRelogin'));
    }
    set autoRelogin(v) {
        if (v === null) {
            localStorage.removeItem('autoRelogin');
        }
        else {
            localStorage.setItem('autoRelogin', JSON.stringify(v));
        }
    }
    get autoRetry() {
        return JSON.parse(localStorage.getItem('autoRetry'));
    }
    set autoRetry(v) {
        if (v === null) {
            localStorage.removeItem('autoRetry');
        }
        else {
            localStorage.setItem('autoRetry', JSON.stringify(v));
        }
    }
};
SettingService.ctorParameters = () => [];
SettingService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    })
], SettingService);



/***/ }),

/***/ 3326:
/*!******************************!*\
  !*** ./src/app/types/dmm.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpCode": () => (/* binding */ OpCode)
/* harmony export */ });
var OpCode;
(function (OpCode) {
    OpCode[OpCode["OK"] = 0] = "OK";
    OpCode[OpCode["INVALID_INPUT"] = -1] = "INVALID_INPUT";
    OpCode[OpCode["NETWORK_ERROR"] = -2] = "NETWORK_ERROR";
    OpCode[OpCode["DMM_TOKEN_NOT_FOUND"] = -10] = "DMM_TOKEN_NOT_FOUND";
    OpCode[OpCode["TOKEN_NOT_FOUND"] = -11] = "TOKEN_NOT_FOUND";
    OpCode[OpCode["DMM_METHOD_CHANGED"] = -12] = "DMM_METHOD_CHANGED";
    OpCode[OpCode["DMM_PASSWORD_RESET"] = -13] = "DMM_PASSWORD_RESET";
    OpCode[OpCode["DMM_INVALID_INPUT"] = -14] = "DMM_INVALID_INPUT";
    OpCode[OpCode["DMM_GAME_INSTALL_NEEDED"] = -15] = "DMM_GAME_INSTALL_NEEDED";
    OpCode[OpCode["DMM_GAME_ALREADY_INSTALLED"] = -16] = "DMM_GAME_ALREADY_INSTALLED";
    OpCode[OpCode["DMM_TOKEN_EXPIRED"] = -17] = "DMM_TOKEN_EXPIRED";
    OpCode[OpCode["DMM_INVALID_EMAIL_PASSWORD"] = -18] = "DMM_INVALID_EMAIL_PASSWORD";
    OpCode[OpCode["DMM_FORCE_REDIRECT"] = -19] = "DMM_FORCE_REDIRECT";
    OpCode[OpCode["DMM_REQUIRE_PROFILE"] = -20] = "DMM_REQUIRE_PROFILE";
    OpCode[OpCode["CLIENT_NETWORK_ERROR"] = -100] = "CLIENT_NETWORK_ERROR";
    OpCode[OpCode["CLIENT_COOKIES_LOST"] = -101] = "CLIENT_COOKIES_LOST";
    OpCode[OpCode["SERVER_INVALID_RESPONSE"] = -110] = "SERVER_INVALID_RESPONSE";
})(OpCode || (OpCode = {}));


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 8685,
	"./af.js": 8685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 2614,
	"./ar-kw.js": 2614,
	"./ar-ly": 8630,
	"./ar-ly.js": 8630,
	"./ar-ma": 8674,
	"./ar-ma.js": 8674,
	"./ar-sa": 9032,
	"./ar-sa.js": 9032,
	"./ar-tn": 4730,
	"./ar-tn.js": 4730,
	"./ar.js": 254,
	"./az": 3052,
	"./az.js": 3052,
	"./be": 150,
	"./be.js": 150,
	"./bg": 3069,
	"./bg.js": 3069,
	"./bm": 3466,
	"./bm.js": 3466,
	"./bn": 8516,
	"./bn.js": 8516,
	"./bo": 6273,
	"./bo.js": 6273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 9815,
	"./bs.js": 9815,
	"./ca": 3331,
	"./ca.js": 3331,
	"./cs": 1320,
	"./cs.js": 1320,
	"./cv": 2219,
	"./cv.js": 2219,
	"./cy": 8266,
	"./cy.js": 8266,
	"./da": 6427,
	"./da.js": 6427,
	"./de": 7435,
	"./de-at": 2871,
	"./de-at.js": 2871,
	"./de-ch": 2994,
	"./de-ch.js": 2994,
	"./de.js": 7435,
	"./dv": 2357,
	"./dv.js": 2357,
	"./el": 5649,
	"./el.js": 5649,
	"./en-SG": 8661,
	"./en-SG.js": 8661,
	"./en-au": 9961,
	"./en-au.js": 9961,
	"./en-ca": 9878,
	"./en-ca.js": 9878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 864,
	"./en-ie.js": 864,
	"./en-il": 1579,
	"./en-il.js": 1579,
	"./en-nz": 6181,
	"./en-nz.js": 6181,
	"./eo": 5291,
	"./eo.js": 5291,
	"./es": 4529,
	"./es-do": 3764,
	"./es-do.js": 3764,
	"./es-us": 3425,
	"./es-us.js": 3425,
	"./es.js": 4529,
	"./et": 5203,
	"./et.js": 5203,
	"./eu": 678,
	"./eu.js": 678,
	"./fa": 3483,
	"./fa.js": 3483,
	"./fi": 6262,
	"./fi.js": 6262,
	"./fo": 4555,
	"./fo.js": 4555,
	"./fr": 3131,
	"./fr-ca": 8239,
	"./fr-ca.js": 8239,
	"./fr-ch": 1702,
	"./fr-ch.js": 1702,
	"./fr.js": 3131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 3821,
	"./ga.js": 3821,
	"./gd": 1753,
	"./gd.js": 1753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 2809,
	"./gu.js": 2809,
	"./he": 5402,
	"./he.js": 5402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 410,
	"./hr.js": 410,
	"./hu": 8288,
	"./hu.js": 8288,
	"./hy-am": 7928,
	"./hy-am.js": 7928,
	"./id": 1334,
	"./id.js": 1334,
	"./is": 6959,
	"./is.js": 6959,
	"./it": 4864,
	"./it-ch": 1124,
	"./it-ch.js": 1124,
	"./it.js": 4864,
	"./ja": 6141,
	"./ja.js": 6141,
	"./jv": 9187,
	"./jv.js": 9187,
	"./ka": 2136,
	"./ka.js": 2136,
	"./kk": 4332,
	"./kk.js": 4332,
	"./km": 8607,
	"./km.js": 8607,
	"./kn": 4305,
	"./kn.js": 4305,
	"./ko": 234,
	"./ko.js": 234,
	"./ku": 6003,
	"./ku.js": 6003,
	"./ky": 5061,
	"./ky.js": 5061,
	"./lb": 2786,
	"./lb.js": 2786,
	"./lo": 6183,
	"./lo.js": 6183,
	"./lt": 29,
	"./lt.js": 29,
	"./lv": 4169,
	"./lv.js": 4169,
	"./me": 8577,
	"./me.js": 8577,
	"./mi": 8177,
	"./mi.js": 8177,
	"./mk": 337,
	"./mk.js": 337,
	"./ml": 5260,
	"./ml.js": 5260,
	"./mn": 2325,
	"./mn.js": 2325,
	"./mr": 4695,
	"./mr.js": 4695,
	"./ms": 5334,
	"./ms-my": 7151,
	"./ms-my.js": 7151,
	"./ms.js": 5334,
	"./mt": 3570,
	"./mt.js": 3570,
	"./my": 7963,
	"./my.js": 7963,
	"./nb": 8028,
	"./nb.js": 8028,
	"./ne": 6638,
	"./ne.js": 6638,
	"./nl": 302,
	"./nl-be": 6782,
	"./nl-be.js": 6782,
	"./nl.js": 302,
	"./nn": 3501,
	"./nn.js": 3501,
	"./pa-in": 869,
	"./pa-in.js": 869,
	"./pl": 5302,
	"./pl.js": 5302,
	"./pt": 9687,
	"./pt-br": 4884,
	"./pt-br.js": 4884,
	"./pt.js": 9687,
	"./ro": 5773,
	"./ro.js": 5773,
	"./ru": 3627,
	"./ru.js": 3627,
	"./sd": 355,
	"./sd.js": 355,
	"./se": 3427,
	"./se.js": 3427,
	"./si": 1848,
	"./si.js": 1848,
	"./sk": 4590,
	"./sk.js": 4590,
	"./sl": 184,
	"./sl.js": 184,
	"./sq": 6361,
	"./sq.js": 6361,
	"./sr": 8965,
	"./sr-cyrl": 1287,
	"./sr-cyrl.js": 1287,
	"./sr.js": 8965,
	"./ss": 5456,
	"./ss.js": 5456,
	"./sv": 451,
	"./sv.js": 451,
	"./sw": 7558,
	"./sw.js": 7558,
	"./ta": 1356,
	"./ta.js": 1356,
	"./te": 3693,
	"./te.js": 3693,
	"./tet": 1243,
	"./tet.js": 1243,
	"./tg": 2500,
	"./tg.js": 2500,
	"./th": 5768,
	"./th.js": 5768,
	"./tl-ph": 5780,
	"./tl-ph.js": 5780,
	"./tlh": 9590,
	"./tlh.js": 9590,
	"./tr": 3807,
	"./tr.js": 3807,
	"./tzl": 3857,
	"./tzl.js": 3857,
	"./tzm": 654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 654,
	"./ug-cn": 845,
	"./ug-cn.js": 845,
	"./uk": 9232,
	"./uk.js": 9232,
	"./ur": 7052,
	"./ur.js": 7052,
	"./uz": 7967,
	"./uz-latn": 2233,
	"./uz-latn.js": 2233,
	"./uz.js": 7967,
	"./vi": 8615,
	"./vi.js": 8615,
	"./x-pseudo": 2320,
	"./x-pseudo.js": 2320,
	"./yo": 1313,
	"./yo.js": 1313,
	"./zh-cn": 4490,
	"./zh-cn.js": 4490,
	"./zh-hk": 5910,
	"./zh-hk.js": 5910,
	"./zh-tw": 4223,
	"./zh-tw.js": 4223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ }),

/***/ 544:
/*!***********************************************!*\
  !*** ./src/app/app.component.sass?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = ".mat-sidenav-container {\n  height: 100%;\n}\n.mat-sidenav-container .mat-sidenav {\n  width: 256px;\n}\n.app-title {\n  margin-left: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjtBQUFFO0VBQ0UsWUFBQTtBQUVKO0FBQUE7RUFDRSxpQkFBQTtBQUdGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtc2lkZW5hdi1jb250YWluZXJcbiAgaGVpZ2h0OiAxMDAlXG4gIC5tYXQtc2lkZW5hdlxuICAgIHdpZHRoOiAyNTZweFxuXG4uYXBwLXRpdGxlXG4gIG1hcmdpbi1sZWZ0OiAyNHB4XG4iXX0= */";

/***/ }),

/***/ 2068:
/*!***********************************************************!*\
  !*** ./src/app/components/dialogs/dialog.sass?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".dialog-actions {\n  justify-content: flex-end;\n}\n\n.checkbox-wrapper {\n  line-height: 48px;\n  height: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjs7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQUVGIiwiZmlsZSI6ImRpYWxvZy5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy1hY3Rpb25zXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmRcblxuLmNoZWNrYm94LXdyYXBwZXJcbiAgbGluZS1oZWlnaHQ6IDQ4cHhcbiAgaGVpZ2h0OiA0OHB4XG4iXX0= */";

/***/ }),

/***/ 2177:
/*!******************************************************************************!*\
  !*** ./src/app/components/dialogs/install/install.component.sass?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN0YWxsLmNvbXBvbmVudC5zYXNzIn0= */";

/***/ }),

/***/ 1092:
/*!******************************************************************************!*\
  !*** ./src/app/components/dialogs/payment/payment.component.sass?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".payment-detail table {\n  margin: 0 0 0 auto;\n  border-spacing: 16px 2px;\n}\n.payment-detail table td:last-child {\n  text-align: right;\n}\n.item-info {\n  overflow: hidden;\n}\n.item-info > img {\n  float: left;\n  margin-right: 24px;\n  margin-bottom: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0FBQUo7QUFDSTtFQUNFLGlCQUFBO0FBQ047QUFDQTtFQUNFLGdCQUFBO0FBRUY7QUFERTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBR0oiLCJmaWxlIjoicGF5bWVudC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXltZW50LWRldGFpbFxuICB0YWJsZVxuICAgIG1hcmdpbjogMCAwIDAgYXV0b1xuICAgIGJvcmRlci1zcGFjaW5nOiAxNnB4IDJweFxuICAgIHRkOmxhc3QtY2hpbGRcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0XG5cbi5pdGVtLWluZm9cbiAgb3ZlcmZsb3c6IGhpZGRlblxuICA+IGltZ1xuICAgIGZsb2F0OiBsZWZ0XG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweFxuIl19 */";

/***/ }),

/***/ 5735:
/*!****************************************************************************!*\
  !*** ./src/app/components/dialogs/regist/regist.component.sass?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".radio-wrapper {\n  margin-bottom: 20px;\n}\n.radio-wrapper .radio-button {\n  margin-right: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7QUFBRTtFQUNFLGlCQUFBO0FBRUoiLCJmaWxlIjoicmVnaXN0LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhZGlvLXdyYXBwZXJcbiAgbWFyZ2luLWJvdHRvbTogMjBweFxuICAucmFkaW8tYnV0dG9uXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW1cbiJdfQ== */";

/***/ }),

/***/ 5256:
/*!**********************************************************************************!*\
  !*** ./src/app/components/dialogs/update-st/update-st.component.sass?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtc3QuY29tcG9uZW50LnNhc3MifQ== */";

/***/ }),

/***/ 2056:
/*!************************************************************************************!*\
  !*** ./src/app/components/game-info-list/game-info-list.component.sass?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".game-list-body > ul {\n  list-style: none;\n  padding: 0;\n  margin: 12px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 600px);\n  grid-gap: 12px;\n  gap: 12px;\n  justify-content: center;\n}\n.game-list-body > ul > li {\n  width: 600px;\n}\n.game-list-body .game-info {\n  display: flex;\n  flex-direction: row;\n  outline: none;\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n}\n.game-list-body .game-info::before {\n  transition: opacity 0.2s ease;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  content: \"\";\n  opacity: 0;\n}\n.game-list-body .game-info:hover::before {\n  opacity: 0.04;\n}\n.game-list-body .game-info .game-info-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.game-list-body .game-info .game-info-content h2 {\n  font-size: 1.25rem;\n  font-weight: 500;\n  margin: 0 12px;\n  line-height: 2rem;\n}\n.game-list-body .game-info .game-info-content h3 {\n  font-weight: 400;\n  font-size: 0.875rem;\n  margin: 0 12px;\n  line-height: 2rem;\n}\n.game-list-body .game-info-thumb {\n  width: 164px;\n  height: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUtaW5mby1saXN0LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwrQ0FBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsdUJBQUE7QUFBSjtBQUNJO0VBQ0UsWUFBQTtBQUNOO0FBQUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUVKO0FBREk7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBR047QUFETTtFQUNFLGFBQUE7QUFHUjtBQUZJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFJTjtBQUhNO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUtSO0FBSk07RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBTVI7QUFMRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBT0oiLCJmaWxlIjoiZ2FtZS1pbmZvLWxpc3QuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FtZS1saXN0LWJvZHlcbiAgPiB1bFxuICAgIGxpc3Qtc3R5bGU6IG5vbmVcbiAgICBwYWRkaW5nOiAwXG4gICAgbWFyZ2luOiAxMnB4XG4gICAgZGlzcGxheTogZ3JpZFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgNjAwcHgpXG4gICAgZ2FwOiAxMnB4XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbiAgICA+IGxpXG4gICAgICB3aWR0aDogNjAwcHhcbiAgLmdhbWUtaW5mb1xuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93XG4gICAgb3V0bGluZTogbm9uZVxuICAgIGNvbG9yOiBpbmhlcml0XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXG4gICAgY3Vyc29yOiBwb2ludGVyXG4gICAgJjo6YmVmb3JlXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZVxuICAgICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgICB3aWR0aDogMTAwJVxuICAgICAgaGVpZ2h0OiAxMDAlXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwXG4gICAgICBjb250ZW50OiAnJ1xuICAgICAgb3BhY2l0eTogMFxuICAgICY6aG92ZXJcbiAgICAgICY6OmJlZm9yZVxuICAgICAgICBvcGFjaXR5OiAuMDRcbiAgICAuZ2FtZS1pbmZvLWNvbnRlbnRcbiAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gICAgICBoMlxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW1cbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMFxuICAgICAgICBtYXJnaW46IDAgMTJweFxuICAgICAgICBsaW5lLWhlaWdodDogMnJlbVxuICAgICAgaDNcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMFxuICAgICAgICBmb250LXNpemU6IC44NzVyZW1cbiAgICAgICAgbWFyZ2luOiAwIDEycHhcbiAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW1cbiAgLmdhbWUtaW5mby10aHVtYlxuICAgIHdpZHRoOiAxNjRweFxuICAgIGhlaWdodDogOTBweFxuIl19 */";

/***/ }),

/***/ 6950:
/*!**************************************************************!*\
  !*** ./src/app/routes/about/about.component.sass?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".about-body {\n  width: 600px;\n  margin: 24px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBQ0YiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtYm9keVxuICB3aWR0aDogNjAwcHhcbiAgbWFyZ2luOiAyNHB4IGF1dG9cbiJdfQ== */";

/***/ }),

/***/ 3884:
/*!************************************************************!*\
  !*** ./src/app/routes/auth/auth.component.sass?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".login-category-selection {\n  width: 320px;\n  margin: 48px auto 0 auto;\n}\n.login-category-selection .login-input-box {\n  padding: 24px;\n  margin: 24px 0;\n}\n.login-category-selection .login-options {\n  list-style: none;\n  padding: 0;\n}\n.login-category-selection .login-options li {\n  margin-top: 16px;\n}\n.login-category-selection .login-action-button {\n  height: 48px;\n  font-size: 1rem;\n  width: 100%;\n}\n.tab-icon {\n  margin-right: 8px;\n}\n.full-width {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGguY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7QUFDRjtBQUFFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFFSjtBQURFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FBR0o7QUFGSTtFQUNFLGdCQUFBO0FBSU47QUFIRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUtKO0FBSEE7RUFDRSxpQkFBQTtBQU1GO0FBSkE7RUFDRSxXQUFBO0FBT0YiLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jYXRlZ29yeS1zZWxlY3Rpb25cbiAgd2lkdGg6IDMyMHB4XG4gIG1hcmdpbjogNDhweCBhdXRvIDAgYXV0b1xuICAubG9naW4taW5wdXQtYm94XG4gICAgcGFkZGluZzogMjRweFxuICAgIG1hcmdpbjogMjRweCAwXG4gIC5sb2dpbi1vcHRpb25zXG4gICAgbGlzdC1zdHlsZTogbm9uZVxuICAgIHBhZGRpbmc6IDBcbiAgICBsaVxuICAgICAgbWFyZ2luLXRvcDogMTZweFxuICAubG9naW4tYWN0aW9uLWJ1dHRvblxuICAgIGhlaWdodDogNDhweFxuICAgIGZvbnQtc2l6ZTogMXJlbVxuICAgIHdpZHRoOiAxMDAlXG5cbi50YWItaWNvblxuICBtYXJnaW4tcmlnaHQ6IDhweFxuXG4uZnVsbC13aWR0aFxuICB3aWR0aDogMTAwJVxuIl19 */";

/***/ }),

/***/ 4267:
/*!**********************************************************************!*\
  !*** ./src/app/routes/game-list/game-list.component.sass?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".no-list-overflow .mat-tab-body-content {\n  overflow: hidden;\n}\n\n.tab-icon {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUtbGlzdC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtBQUVGIiwiZmlsZSI6ImdhbWUtbGlzdC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1saXN0LW92ZXJmbG93IC5tYXQtdGFiLWJvZHktY29udGVudFxuICBvdmVyZmxvdzogaGlkZGVuXG5cbi50YWItaWNvblxuICBtYXJnaW4tcmlnaHQ6IDhweFxuIl19 */";

/***/ }),

/***/ 4061:
/*!************************************************************!*\
  !*** ./src/app/routes/play/play.component.sass?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".game-container {\n  transition: filter 0.3s;\n}\n\n.game_frame {\n  display: block;\n  border: 0;\n  margin: 24px auto;\n}\n\n.game_frame.pure {\n  position: fixed;\n  left: 0;\n  top: 0;\n  margin: 0;\n}\n\n.loading {\n  filter: brightness(0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXkuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUFFO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtBQUVKOztBQUFBO0VBQ0UsdUJBQUE7QUFHRiIsImZpbGUiOiJwbGF5LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbWUtY29udGFpbmVyXG4gIHRyYW5zaXRpb246IGZpbHRlciAwLjNzXG4gIC8vIGJhY2tncm91bmQ6IHdoaXRlXG5cbi5nYW1lX2ZyYW1lXG4gIGRpc3BsYXk6IGJsb2NrXG4gIGJvcmRlcjogMFxuICBtYXJnaW46IDI0cHggYXV0b1xuICAmLnB1cmVcbiAgICBwb3NpdGlvbjogZml4ZWRcbiAgICBsZWZ0OiAwXG4gICAgdG9wOiAwXG4gICAgbWFyZ2luOiAwXG5cbi5sb2FkaW5nXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjUpXG4iXX0= */";

/***/ }),

/***/ 4062:
/*!********************************************************************!*\
  !*** ./src/app/routes/settings/settings.component.sass?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".settings-body {\n  width: 320px;\n  margin: 24px auto;\n}\n.settings-body > div {\n  margin-top: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFBRTtFQUNFLGdCQUFBO0FBRUoiLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dGluZ3MtYm9keVxuICB3aWR0aDogMzIwcHhcbiAgbWFyZ2luOiAyNHB4IGF1dG9cbiAgPiBkaXZcbiAgICBtYXJnaW4tdG9wOiAyNHB4XG4iXX0= */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<mat-sidenav-container>\n  <mat-sidenav mode=\"over\" [(opened)]=\"opened\">\n    <div class=\"mat-sidenav-header\">\n      <h3 class=\"mat-sidenav-title\">站点导航</h3>\n      <h6 class=\"mat-sidenav-subtitle\">DMM网页游戏登录器</h6>\n    </div>\n    <mat-nav-list>\n      <a mat-list-item\n        [routerLink]=\"['/' + route.path]\"\n        *ngFor=\"let route of routes\"\n        routerLinkActive=\"active\"\n        (click)=\"opened = false\">\n        <mat-icon matListIcon>{{ route.data.icon }}</mat-icon>\n        <span matLine>{{ route.data.title }}</span>\n      </a>\n   </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar class=\"mat-elevation-z6\" color=\"primary\">\n      <button mat-icon-button (click)=\"opened = !opened\"><mat-icon>menu</mat-icon></button>\n      <span class=\"app-title\">{{ title }}</span>\n\n      <!-- This fills the remaining space of the current row -->\n      <span class=\"spacer\"></span>\n\n      <span><a mat-icon-button class=\"svg-icon\" href=\"https://github.com/zazck/php-dmm-netgame\" target=\"_blank\" aria-label=\"Github Repository\"><svg height=\"24\" class=\"octicon octicon-mark-github text-white\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"24\" aria-hidden=\"true\"><path fill-rule=\"evenodd\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z\"></path></svg></a></span>\n    </mat-toolbar>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n";

/***/ }),

/***/ 8295:
/*!******************************************************************************!*\
  !*** ./src/app/components/dialogs/install/install.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<h1 mat-dialog-title>安装游戏到账户</h1>\n<div mat-dialog-content>\n  <form #installForm=\"ngForm\">\n    <div class=\"checkbox-wrapper\">\n      <mat-checkbox [(ngModel)]=\"notification\" name=\"notification\">接收消息提醒</mat-checkbox>\n    </div>\n    <div class=\"checkbox-wrapper\">\n      <mat-checkbox [(ngModel)]=\"myapp\" name=\"myapp\">在个人资料里显示这个应用</mat-checkbox>\n    </div>\n  </form>\n</div>\n<div mat-dialog-actions class=\"dialog-actions\">\n  <button color=\"primary\" mat-button (click)=\"back()\">返回</button>\n  <button color=\"primary\" mat-button (click)=\"install()\" [disabled]=\"requesting\" cdkFocusInitial>\n    <ng-container *ngIf=\"requesting; else elseTemplate\">\n      <mat-spinner diameter=\"24\"></mat-spinner>\n    </ng-container>\n    <ng-template #elseTemplate>\n      安装\n    </ng-template>\n  </button>\n</div>\n";

/***/ }),

/***/ 7285:
/*!******************************************************************************!*\
  !*** ./src/app/components/dialogs/payment/payment.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<h1 mat-dialog-title>确认购买 | {{ detail.gameTitle }}</h1>\n<div class=\"item-info\">\n  <img [src]=\"detail.itemImage | safeResourceUrl\" width=\"180\" height=\"180\">\n  <h2>{{ detail.itemTitle }}</h2>\n  <p>{{ detail.itemDescription }}</p>\n</div>\n<div class=\"payment-detail\">\n  <table>\n    <tbody>\n      <tr>\n        <td>单价</td>\n        <td>{{ detail.itemPrice | number:'1.0-0' }}pt</td>\n      </tr>\n      <tr>\n        <td>数量</td>\n        <td>{{ detail.itemCount }}</td>\n      </tr>\n      <tr>\n        <td>总价</td>\n        <td>{{ detail.itemPrice * detail.itemCount | number:'1.0-0' }}pt</td>\n      </tr>\n      <tr>\n        <td>持有点数</td>\n        <td>{{ detail.point | number:'1.0-0' }}pt</td>\n      </tr>\n      <tr>\n        <td>结算点数</td>\n        <td>{{ detail.point - detail.itemPrice * detail.itemCount | number:'1.0-0' }}pt</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<div mat-dialog-actions class=\"dialog-actions\">\n  <button color=\"primary\" mat-button (click)=\"cancel()\" [disabled]=\"requesting\">取消</button>\n  <button\n    color=\"primary\"\n    mat-button\n    (click)=\"commit()\"\n    [disabled]=\"requesting || detail.itemPrice * detail.itemCount > detail.point\"\n    cdkFocusInitial>\n    {{ (detail.itemPrice * detail.itemCount > detail.point) ?  \"点数不足\" : \"确定\" }}\n  </button>\n</div>\n";

/***/ }),

/***/ 8892:
/*!****************************************************************************!*\
  !*** ./src/app/components/dialogs/regist/regist.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<h1 mat-dialog-title>完善用户资料</h1>\n<div mat-dialog-content>\n  <form #installForm=\"ngForm\">\n    <mat-form-field class=\"full-width\">\n      <input [(ngModel)]=\"nickname\" name=\"nickname\" matInput placeholder=\"昵称\" type=\"text\" autocomplete=\"nickname\">\n      <button mat-button matSuffix mat-icon-button aria-label=\"随机\" (click)=\"randomNickname()\">\n        <svg style=\"width:1em;height:24px\" viewBox=\"0 0 24 24\">\n          <path fill=\"#000000\" d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5M17,15A2,2 0 0,0 15,17A2,2 0 0,0 17,19A2,2 0 0,0 19,17A2,2 0 0,0 17,15Z\" />\n        </svg>\n      </button>\n    </mat-form-field>\n    <div class=\"radio-wrapper\">\n      <mat-radio-group [(ngModel)]=\"gender\" name=\"gender\" aria-label=\"性别\">\n        <mat-radio-button class=\"radio-button\" value=\"male\">男性</mat-radio-button>\n        <mat-radio-button class=\"radio-button\" value=\"female\">女性</mat-radio-button>\n      </mat-radio-group>\n    </div>\n    <div>\n      <mat-form-field>\n        <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker\" placeholder=\"出生日期\" [value]=\"birthday\"  (dateChange)=\"birthday = $event.value\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n    </div>\n    <div class=\"checkbox-wrapper\">\n      <mat-checkbox [(ngModel)]=\"isGeneralChecked\" name=\"isGeneralChecked\">订阅DMM GAMES邮件杂志</mat-checkbox>\n    </div>\n    <div class=\"checkbox-wrapper\">\n      <mat-checkbox [(ngModel)]=\"isAdultChecked\" name=\"isAdultChecked\">订阅DMM GAMES成人向邮件杂志</mat-checkbox>\n    </div>\n  </form>\n</div>\n<div mat-dialog-actions class=\"dialog-actions\">\n  <button color=\"primary\" mat-button (click)=\"back()\">返回</button>\n  <button color=\"primary\" mat-button (click)=\"regist()\" [disabled]=\"requesting\" cdkFocusInitial>\n    <ng-container *ngIf=\"requesting; else elseTemplate\">\n      <mat-spinner diameter=\"24\"></mat-spinner>\n    </ng-container>\n    <ng-template #elseTemplate>\n      确定\n    </ng-template>\n  </button>\n</div>\n";

/***/ }),

/***/ 7960:
/*!**********************************************************************************!*\
  !*** ./src/app/components/dialogs/update-st/update-st.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div mat-dialog-content>\n  安全凭据已过期, 请刷新页面\n</div>\n<div mat-dialog-actions class=\"dialog-actions\">\n  <button color=\"primary\" mat-button (click)=\"back()\">返回</button>\n  <button color=\"primary\" mat-button (click)=\"refresh()\" cdkFocusInitial>确定</button>\n</div>\n";

/***/ }),

/***/ 1937:
/*!************************************************************************************!*\
  !*** ./src/app/components/game-info-list/game-info-list.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"game-list-body\">\n  <ul>\n    <li *ngFor=\"let info of list\">\n      <div class=\"mat-elevation-z2\">\n        <a matRipple href=\"javascript:void(0);\" [routerLink]=\"[ '/play' ]\" [queryParams]=\"getQueryParamsFrom(info)\" class=\"game-info mat-theme-surface-primary\">\n          <div class=\"game-info-thumb\" [ngStyle]=\"getThumb(info)\"></div>\n          <div class=\"game-info-content\">\n            <h2>{{info.title}}</h2>\n            <h3>{{info.comment}}</h3>\n          </div>\n        </a>\n      </div>\n    </li>\n  </ul>\n</div>\n";

/***/ }),

/***/ 9838:
/*!**************************************************************!*\
  !*** ./src/app/routes/about/about.component.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"about-body\">\n  <h1>php-dmm-netgame-web</h1>\n\n  <h2>可能会有的问题以及解答</h2>\n  <p>问: 提示对DMM输入了错误的数据?</p>\n  <p>答: 如果刷新页面/重新登陆无效, 请尝试在设置页面清除Cookies并重新登陆</p>\n  <p>问: 完善不了账号信息/无法购买课金道具?</p>\n  <p>答: 这部分功能尚未经过完整测试, 请将具体联系方式回复至贴吧以协助开发(谨慎起见不提供链接)</p>\n\n  <h2>php-dmm-netgame-web-angular</h2>\n  <p>项目启动日期: 2019-06-26</p>\n  <p>初版竣工日期: 2019-07-11</p>\n  <p>历经难关:</p>\n  <ul>\n    <li>Angular 8</li>\n    <li>Angular Material</li>\n    <li>DMM RPC</li>\n    <li>样本收集(失败告终)</li>\n    <li>域名注册</li>\n    <li>功能测试</li>\n  </ul>\n\n  <h2>php-dmm-netgame-web-aurelia</h2>\n  <p>项目启动日期: 2019-06-08</p>\n  <p>初版竣工日期: 2019-06-24</p>\n  <p>历经难关:</p>\n  <ul>\n    <li>PHP</li>\n    <li>Composer</li>\n    <li>GuzzleHTTP</li>\n    <li>DMM多方法登录</li>\n    <li>Cookies转发</li>\n    <li>DMM双站点同时登陆</li>\n    <li>DMM返回结果解析</li>\n    <li>Aurelia</li>\n    <li>TypeScript</li>\n    <li>Material Components Web</li>\n    <li>舰队collection 2019年 春季活动</li>\n    <li>地球OL</li>\n  </ul>\n\n  <p>玩的愉快 :)</p>\n</div>\n";

/***/ }),

/***/ 2814:
/*!************************************************************!*\
  !*** ./src/app/routes/auth/auth.component.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"login-category-selection\">\n  <ng-container *ngIf=\"!setting.authenticated; else elseTemplate\">\n    <div mat-tab-nav-bar mat-align-tabs=\"center\">\n      <span mat-tab-link (click)=\"category = 0\" [active]=\"category === 0\">\n        <mat-icon class=\"tab-icon\">local_florist</mat-icon>\n        全年龄\n      </span>\n      <span mat-tab-link (click)=\"category = 1\" [active]=\"category === 1\">\n        <mat-icon class=\"tab-icon\">local_bar</mat-icon>\n        成人向\n      </span>\n    </div>\n    <form *ngIf=\"!setting.authenticated\" #loginForm=\"ngForm\">\n      <div class=\"login-input-box mat-elevation-z2\">\n        <mat-form-field class=\"full-width\">\n          <input [(ngModel)]=\"loginPayload.loginID\" name=\"login_id\" matInput placeholder=\"DMM 用户邮箱\" type=\"text\" autocomplete=\"username\">\n        </mat-form-field>\n        <mat-form-field class=\"full-width\">\n          <input [(ngModel)]=\"loginPayload.password\" name=\"password\" matInput placeholder=\"DMM 用户密码\" type=\"password\" autocomplete=\"current-password\">\n        </mat-form-field>\n        <ul class=\"login-options\">\n          <li>\n            <mat-checkbox [(ngModel)]=\"loginPayload.saveLoginID\" name=\"save_login_id\">记住账号</mat-checkbox>\n          </li>\n          <li>\n            <mat-checkbox [(ngModel)]=\"loginPayload.savePassword\" name=\"save_password\">记住密码</mat-checkbox>\n          </li>\n          <li>\n            <mat-checkbox [(ngModel)]=\"loginPayload.autoLogin\" name=\"use_auto_login\">自动登录</mat-checkbox>\n          </li>\n        </ul>\n      </div>\n      <button class=\"login-action-button\" mat-raised-button color=\"primary\" (click)=\"login()\" [disabled]=\"requesting\">\n        <ng-container *ngIf=\"requesting; else loginElseTemplate\">\n          <mat-spinner diameter=\"24\"></mat-spinner>\n        </ng-container>\n        <ng-template #loginElseTemplate>\n          登录\n        </ng-template>\n      </button>\n    </form>\n  </ng-container>\n  <ng-template #elseTemplate>\n    <button class=\"login-action-button\" mat-raised-button color=\"primary\" (click)=\"logout()\" [disabled]=\"requesting\">\n      <ng-container *ngIf=\"requesting; else logoutElseTemplate\">\n        <mat-spinner diameter=\"24\"></mat-spinner>\n      </ng-container>\n      <ng-template #logoutElseTemplate>\n        更换账号\n      </ng-template>\n    </button>\n  </ng-template>\n</div>\n";

/***/ }),

/***/ 9529:
/*!**********************************************************************!*\
  !*** ./src/app/routes/game-list/game-list.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<ng-container *ngIf=\"category; else elseTemplate\">\n  <mat-tab-group class=\"no-list-overflow\" mat-align-tabs=\"center\">\n    <mat-tab>\n      <ng-template mat-tab-label>\n        <mat-icon class=\"tab-icon\">local_florist</mat-icon> 全年龄\n      </ng-template>\n      <app-game-info-list class=\"game-list-body\" [list]=\"generalList\" category=\"general\"></app-game-info-list>\n    </mat-tab>\n    <mat-tab>\n      <ng-template mat-tab-label>\n        <mat-icon class=\"tab-icon\">local_bar</mat-icon> 成人向\n      </ng-template>\n      <app-game-info-list class=\"game-list-body\" [list]=\"adultList\" category=\"adult\"></app-game-info-list>\n    </mat-tab>\n  </mat-tab-group>\n</ng-container>\n<ng-template #elseTemplate>\n  <app-game-info-list class=\"game-list-body\" [list]=\"generalList\" category=\"general\"></app-game-info-list>\n</ng-template>\n";

/***/ }),

/***/ 8271:
/*!************************************************************!*\
  !*** ./src/app/routes/play/play.component.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"game-container\" class.bind=\"loading ? 'loading' : ''\">\n  <iframe id=\"game_frame\" class=\"game_frame\" *ngIf=\"osapi\" [class.pure]=\"pure && 'pure'\" [src]=\"osapi | safeResourceUrl\" [width]=\"iframeWidth\" [height]=\"iframeHeight\" scrolling=\"no\" allowfullscreen='true'></iframe>\n</div>\n";

/***/ }),

/***/ 4448:
/*!********************************************************************!*\
  !*** ./src/app/routes/settings/settings.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"settings-body\">\n  <div><mat-slide-toggle [checked]=\"setting.autoRedirect\" (change)=\"changeSetting('autoRedirect', $event)\">自动跳转到OSAPI框架页</mat-slide-toggle></div>\n  <div><button color=\"primary\" mat-raised-button (click)=\"setting.cookies = []\">清除Cookies</button></div>\n</div>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map