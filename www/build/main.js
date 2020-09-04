webpackJsonp([0],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.params = {};
        this.data = {};
        this.events = {};
        this.data = {
            label: {
                txtContact: 'Contact',
                txtContactUs: 'Contact Us',
                txtAboutUs: 'Contact information',
                txtPhone: 'Phone',
                txtGetInTouch: 'Get In Touch',
                txtAddress: 'Address',
                txtSendMessage: 'Send Message',
                txtFullName: 'Full Name',
                txtEmail: 'Email',
                txtMessage: 'Message',
                txtSend: 'Send',
                txtSendAMessage: 'Send A Message',
                txtFollow: 'Follow Us',
                txtFollowWidth: 'Follow Us Width!'
            },
            google_map: 'https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d27583.016935900032!2d105.83403782350675!3d21.036132526875356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x0%3A0x85839944f456f253!2zUXXhuqNuZyB0csaw4budbmcgQmEgxJDDrG5o!3m2!1d21.037447999999998!2d105.8360008!5e0!3m2!1svi!2s!4v1496303332325',
            about: 'Le Dr. Normand Bach est un orthodontiste d\'expérience qui prend toujours le temps de donner le meilleur service possible. Passionné, il explique à chacun de ses patients le fonctionnement de ses traitements. Les besoins et la personnalité sont différents pour chaque patient et le Dr. Bach offre une attention sur mesure à tout coup.  Les traitements d\'orthodontie sont parfois inévitables et, qu\'on se le dise, ce n\'est pas ce qui a de plus plaisant. Dr. Bach vous offrira toujours plusieurs options de traitements de sorte que votre expérience puisse être la plus agréable possible et la mieux adaptée à vos besoins.' +
                'Voici les traitements offerts:\n' +
                '\n' +
                '- Boitiers conventionnels auto-ligaturants\n' +
                '\n' +
                '- Boitiers transparents esthétiques\n' +
                '\n' +
                '- Invisalign.\n' +
                '\n' +
                'Avec ou sans chirurgie orthognatique (des mâchoires).\n' +
                'Il vous présente des explications claires et honnêtes sur votre malocclusion.\n' +
                '\n' +
                'Il possède une expertise à la fine pointe. Le fait d\'être professeur agrégé et chef du service d’orthodontie de 1er cycle de l’Université de Montréal en est un gage.\n' +
                '\n' +
                'Il est conférncier national et international, entre autre aux Journées dentaires du Québec, qui est une réunion annuelle de tous les dentistes du Québec.\n' +
                '\n' +
                'Il s’engage à une qualité de traitement à la hauteur de vos attentes pour tous ses patients.\n' +
                '\n' +
                'Orthodontiste Bach a obtenu son doctorat en médecine dentaire de l’Université de Montréal en 2002, puis un certificat de résidence multidisciplinaire de l’Hôpital Notre-Dame en 2003. Il a pratiqué la médecine dentaire durant deux ans avant d’effectuer une maîtrise en sciences et une spécialisation en orthodontie à l’Université́ de Montréal.\n' +
                '\n' +
                'Il est membre des associations québécoise, canadienne, américaine et internationale d’orthodontie, fellow du Collège Royal des Dentistes du Canada, membre de l’Angle Society of Orthodontists. Orthodontiste Bach a reçu le Faculty First Award de l’American Association of Orthodontists, Il est présentement professeur agrégé à l’Université́ de Montréal et chef du service d’orthodontie 1er cycle.',
            address1: 'Montréal\n' +
                '747 Rue Roy Est,\n' +
                'Montréal, Qc, H2L 1E1\n' +
                '(514) 340-2224',
            address2: 'Hoan Kiem, Ha Noi, Viet Nam',
            phone1: '(514) 340-2224',
            phone2: '+84 868271095',
            email1: 'info@orthodontistemontreal.com',
            email2: 'koodinh@gmail.com',
            open_time: '08:00 Am - 11:30 Am',
            close_time: '01:00 Pm - 04:00 Pm',
            txtWorkingTime: 'We work from Monday to Saturday weekly',
            workingTime: '9:00 AM - 4:00 PM'
        };
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"E:\Projects\orthodentiste_v5\src\pages\about\about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="skin skin-white">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>À propos</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content class="white">\n    <div class="white about-v1" *ngIf="data!=null">\n\n        <ion-row>\n            <ion-col text-center>\n                <ion-img src="./assets/imgs/dr.jpg" class="dr_image"></ion-img>\n            </ion-col>\n        </ion-row>\n\n        <div padding class="ani-right-to-left">\n            <div class="find-us mgt-30">\n                <!--<h4 class="fs-26 fw-600">{{data.label.txtGetInTouch}}</h4>-->\n                <p class="text-grey-4 mgb-40 about-text">{{data.about}}</p>\n                <div class="element-find text-grey-4 mgb-10">\n                    <ion-icon class="mgl-10 mgr-20" name="md-pin"></ion-icon>\n                    <p class="mgt-0 address-text">{{data.address1}}</p>\n                </div>\n                <div class="element-find text-grey-4 mgb-10">\n                    <ion-icon class="mgl-10 mgr-20" name="md-call"></ion-icon>\n                    <a href="tel:{{data.phone1}}" class="mgt-0">{{data.phone1}}</a>\n                </div>\n                <div class="element-find text-grey-4 mgb-10">\n                    <ion-icon class="mgl-10 mgr-20" name="md-mail"></ion-icon>\n                    <a href="mailto:{{data.email1}}" class="mgt-0">{{data.email1}}</a>\n                </div>\n                <!--<div class="element-find text-grey-4 mgb-10">-->\n                    <!--<ion-icon class="mgl-10 mgr-20" name="md-time"></ion-icon>-->\n                    <!--<p class="mgt-0">-->\n                        <!--<span class="block mgb-5">{{data.open_time}}</span>-->\n                        <!--<span class="block mgb-5">{{data.close_time}}</span>-->\n                    <!--</p>-->\n                <!--</div>-->\n            </div>\n\n            <div class="social mgt-40 ani-fade-out" *ngIf="false">\n                <h6>{{data.label.txtFollow}}:</h6>\n                <button ion-button only-icon clear class="text-grey-4">\n                    <ion-icon name="logo-facebook"></ion-icon>\n                </button>\n                <button ion-button only-icon clear class="text-grey-4">\n                    <ion-icon name="logo-twitter"></ion-icon>\n                </button>\n                <button ion-button only-icon clear class="text-grey-4">\n                    <ion-icon name="logo-instagram"></ion-icon>\n                </button>\n                <button ion-button only-icon clear class="text-grey-4">\n                    <ion-icon name="logo-google"></ion-icon>\n                </button>\n                <button ion-button only-icon clear class="text-grey-4">\n                    <ion-icon name="logo-pinterest"></ion-icon>\n                </button>\n                <button ion-button only-icon clear class="text-grey-4">\n                    <ion-icon name="logo-linkedin"></ion-icon>\n                </button>\n                <button ion-button only-icon clear class="text-grey-4">\n                    <ion-icon name="logo-dribbble"></ion-icon>\n                </button>\n            </div>\n        </div>\n    </div>\n</ion-content>\n\n\n'/*ion-inline-end:"E:\Projects\orthodentiste_v5\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalldrPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CalldrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalldrPage = /** @class */ (function () {
    function CalldrPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CalldrPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalldrPage');
    };
    CalldrPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-calldr',template:/*ion-inline-start:"E:\Projects\orthodentiste_v5\src\pages\calldr\calldr.html"*/'<!--\n  Generated template for the CalldrPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Calldr</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"E:\Projects\orthodentiste_v5\src\pages\calldr\calldr.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], CalldrPage);
    return CalldrPage;
}());

//# sourceMappingURL=calldr.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowtogetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the HowtogetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HowtogetPage = /** @class */ (function () {
    function HowtogetPage(navCtrl, navParams, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.data = {};
        this.lat = 45.520819;
        this.lng = -73.571457;
        this.data = {
            label: {
                txtContact: 'Contact',
                txtContactUs: 'Contact Us',
                txtAboutUs: 'Contact information',
                txtPhone: 'Phone',
                txtGetInTouch: 'Get In Touch',
                txtAddress: 'Address',
                txtSendMessage: 'Send Message',
                txtFullName: 'Full Name',
                txtEmail: 'Email',
                txtMessage: 'Message',
                txtSend: 'Send',
                txtSendAMessage: 'Send A Message',
                txtFollow: 'Follow Us',
                txtFollowWidth: 'Follow Us Width!'
            },
            google_map: sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.466220079764!2d-73.57364518469937!3d45.52082283768483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91bca298817ab%3A0x39a40070b9bf676!2s747+Rue+Roy+E%2C+Montr%C3%A9al%2C+QC+H2X+1E1%2C+Canada!5e0!3m2!1sen!2sin!4v1556516068927!5m2!1sen!2sin'),
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            address1: '2b/324 Thuy Khue, Tay Ho, Ha Noi',
            address2: 'Hoan Kiem, Ha Noi, Viet Nam',
            phone1: '+84 868120192',
            phone2: '+84 868271095',
            email1: 'info@orthodontistemontreal.com',
            email2: 'koodinh@gmail.com',
            open_time: '08:00 Am - 11:30 Am',
            close_time: '01:00 Pm - 04:00 Pm',
            txtWorkingTime: 'We work from Monday to Saturday weekly',
            workingTime: '9:00 AM - 4:00 PM'
        };
    }
    HowtogetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HowtogetPage');
    };
    HowtogetPage.prototype.openNativeMapApp = function () {
        var lat = this.lat;
        var lng = this.lng;
        if ((navigator.platform.indexOf('iPhone') !== -1) ||
            (navigator.platform.indexOf('iPad') !== -1) ||
            (navigator.platform.indexOf('iPod') !== -1)) {
            window.open('maps://maps.google.com/maps?daddr=' + lat + ',' + lng + '&amp;ll=');
        }
        else {
            window.open('https://maps.google.com/maps?daddr=' + lat + ',' + lng + '&amp;ll=', '_system', 'location=yes');
        }
        // const start = [];
        // start.push(lat);
        // start.push(lng);
        //
        // const options: LaunchNavigatorOptions = {
        //     app: this.launchNavigator.APP.GOOGLE_MAPS
        // };
        // this.launchNavigator.navigate(start, options)
        //     .then(success => {
        //         console.log(success);
        //     }, error => {
        //         console.log(error);
        //     });
    };
    HowtogetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-howtoget',template:/*ion-inline-start:"E:\Projects\orthodentiste_v5\src\pages\howtoget\howtoget.html"*/'<!--\n  Generated template for the HowtogetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="skin skin-white">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Comment se rendre?</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="white">\n    <div class="white about-v1" *ngIf="data!=null">\n        <div class="map ani-left-to-right">\n            <iframe [src]="data.google_map" width="100%" height="100%" frameborder="0" style="border:0"\n                    id="newsframe"></iframe>\n        </div>\n    </div>\n\n    <button ion-button color="dark" block class="showOnMapBtn" (click)="openNativeMapApp()">Get direction</button>\n\n</ion-content>\n'/*ion-inline-end:"E:\Projects\orthodentiste_v5\src\pages\howtoget\howtoget.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], HowtogetPage);
    return HowtogetPage;
}());

//# sourceMappingURL=howtoget.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendmessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {HTTP} from "@ionic-native/http";

/**
 * Generated class for the SendmessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SendmessagePage = /** @class */ (function () {
    function SendmessagePage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.events = {};
        this.fullname = "";
        this.email = "";
        this.message = "";
    }
    SendmessagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SendmessagePage');
    };
    SendmessagePage.prototype.sendMessage = function () {
        var _this = this;
        var postData = {
            name: this.fullname,
            email: this.email,
            message: this.message,
        };
        this.api.loading();
        this.api.postRequest(__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */].METHODS.SENDEMAIL, postData).then(function (data) {
            _this.api.hideLoading();
            if (data && data.status) {
                //this.imgfile = data;
                console.log(data.status + "::abcd");
                console.log(data.data); // data received by server
                console.log(data.headers);
                _this.api.showToast(data.message);
                // this.navCtrl.pop();
                _this.fullname = "";
                _this.email = "";
                _this.message = "";
            }
            else {
                _this.api.showToast(data.message);
            }
        }).catch(function (error) {
            _this.api.hideLoading();
            console.log(error.status + "::efgh");
            console.log(error.error); // error message as string
            console.log(error.headers);
            _this.api.showToast(error.message);
        });
    };
    SendmessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-sendmessage',template:/*ion-inline-start:"E:\Projects\orthodentiste_v5\src\pages\sendmessage\sendmessage.html"*/'<!--\n  Generated template for the SendmessagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="skin skin-white">\n  <ion-navbar>\n	<button ion-button menuToggle>\n	  <ion-icon name="menu"></ion-icon>\n	</button>\n    <ion-title>Envoyer message</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="white">\n	<div class="white about-v1">\n		<div padding class="ani-right-to-left">\n			<div class="form-mess mgt-5 pdb-50 ani-bottom-to-top">\n				<h4 class="fs-26 fw-600">Envoyer message</h4>\n				<ion-list>\n				    <ion-item class="text-grey-5 grey-1 round">\n				      	<ion-input type="text" placeholder="Fullname" [(ngModel)]="fullname"></ion-input>\n				    </ion-item>\n				</ion-list>\n				<ion-list>\n				    <ion-item class="text-grey-5 grey-1 round">\n				      	<ion-input type="email" placeholder="Email" [(ngModel)]="email"></ion-input>\n				    </ion-item>\n				</ion-list>\n				<ion-list>\n				    <ion-item class="text-grey-5 grey-1 bdra-15">\n				      	<ion-textarea type="text" placeholder="Message" [(ngModel)]="message"></ion-textarea>\n				    </ion-item>\n				</ion-list>\n				<div class="text-right">\n					<button ion-button round icon-left class="pink text-white mgt-10" (click)="sendMessage()">\n						<ion-icon class="text-pink" name="send"></ion-icon>\n						Send\n					</button>\n				</div>\n			</div>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"E:\Projects\orthodentiste_v5\src\pages\sendmessage\sendmessage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], SendmessagePage);
    return SendmessagePage;
}());

//# sourceMappingURL=sendmessage.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendpicturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser_ngx__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SendpicturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SendpicturePage = /** @class */ (function () {
    function SendpicturePage(navCtrl, ngZone, navParams, camera, base64, api, iab, actionSheetController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.ngZone = ngZone;
        this.navParams = navParams;
        this.camera = camera;
        this.base64 = base64;
        this.api = api;
        this.iab = iab;
        this.actionSheetController = actionSheetController;
        this.events = {};
        this.fullname = "";
        this.email = "";
        this.message = "";
        this.picturesView = [
            {
                placeholder: 'picturetemplate/pic1.png',
                type: 'right_face',
            },
            {
                placeholder: 'picturetemplate/pic2.png',
                type: 'front_face'
            },
            {
                placeholder: 'picturetemplate/pic3.png',
                type: 'front_face_2'
            },
            {
                placeholder: 'picturetemplate/pic4.png',
                type: 'teeth1'
            },
            {
                placeholder: 'drnormandlogo.png',
                type: 'center_logo'
            },
            {
                placeholder: 'picturetemplate/pic5.png',
                type: 'teeth2'
            },
            {
                placeholder: 'picturetemplate/pic6.png',
                type: 'teeth3'
            },
            {
                placeholder: 'picturetemplate/pic7.png',
                type: 'teeth4'
            },
            {
                placeholder: 'picturetemplate/pic8.png',
                type: 'teeth5'
            }
        ];
        this.openLink = function () {
            try {
                var browser = _this.iab.create('https://orthodontistemontreal.com/video1', '_blank', 'location=no');
                browser.show();
            }
            catch (e) {
            }
        };
        this.takePicture = function (callBack) {
            var actionSheet = _this.actionSheetController.create({
                title: 'Choose option',
                buttons: [
                    {
                        text: 'Camera',
                        handler: function () {
                            _this.pickPhoto(_this.camera.PictureSourceType.CAMERA, callBack);
                            console.log('Camera clicked');
                        }
                    },
                    {
                        text: 'Photo Library',
                        handler: function () {
                            _this.pickPhoto(_this.camera.PictureSourceType.SAVEDPHOTOALBUM, callBack);
                            console.log('PHOTO LIBRARY clicked');
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            actionSheet.present();
        };
    }
    SendpicturePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SendpicturePage');
    };
    SendpicturePage.prototype.sendMessage = function () {
        var _this = this;
        var pictures = [];
        this.picturesView.map(function (data) {
            if (data.imgFile) {
                pictures.push({
                    picture: data.imgFile,
                    type: "image/png",
                    view_type: data.type,
                });
            }
        });
        var postData = {
            name: this.fullname,
            email: this.email,
            message: this.message,
            pictures: pictures
        };
        this.api.loading();
        this.api.postRequest(__WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */].METHODS.SENDEMAIL, postData).then(function (data) {
            _this.api.hideLoading();
            if (data && data.status) {
                console.log(data.status + "::abcd");
                console.log(data.data); // data received by server
                console.log(data.headers);
                _this.api.showToast(data.message);
                // this.navCtrl.pop();
                _this.ngZone.run(function () {
                    _this.fullname = "";
                    _this.email = "";
                    _this.message = "";
                    _this.picturesView.map(function (data) {
                        data.imgFile = null;
                    });
                });
            }
            else {
                _this.api.showToast(data.message);
            }
        }).catch(function (error) {
            _this.api.hideLoading();
            console.log(error.status + "::efgh");
            console.log(error.error); // error message as string
            console.log(error.headers);
            _this.api.showToast(error.message);
        });
    };
    SendpicturePage.prototype.capturePhotoForView = function (data, index) {
        var _this = this;
        this.takePicture(function (base64Image) {
            _this.picturesView[index]['imgFile'] = base64Image;
        });
    };
    SendpicturePage.prototype.pickPhoto = function (sourceType, callBack) {
        var options = {
            quality: 30,
            targetWidth: 500,
            targetHeight: 500,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: sourceType,
            mediaType: this.camera.MediaType.PICTURE,
            encodingType: this.camera.EncodingType.PNG
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            // this.base64.encodeFile(imageData).then((base64File: string) => {
            //     let base64Image = 'data:image/jpeg;base64,' + base64File;
            //     this.imgfile = base64Image;
            // }, (err) => {
            //     console.log(err);
            // });
            var base64Image = 'data:image/png;base64,' + imageData;
            if (callBack) {
                callBack(base64Image);
            }
            // this.imgfile = base64Image;
        }, function (err) {
            console.error(err);
            // Handle error
        });
    };
    SendpicturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-sendpicture',template:/*ion-inline-start:"E:\Projects\orthodentiste_v5\src\pages\sendpicture\sendpicture.html"*/'<!--\n  Generated template for the SendpicturePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="skin skin-white">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Envoyer photo</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="white" *ngIf="!showPreviewOverlay">\n\n\n    <div class="white about-v1">\n        <div padding class="ani-right-to-left">\n            <div class="form-mess mgt-5 pdb-50 ani-bottom-to-top">\n                <h4 class="fs-26 fw-600">Envoyer photo</h4>\n\n                <div class="instruction-link">\n                    <a href="#" (click)="openLink()">Instructions</a>\n                </div>\n                <ion-list>\n                    <ion-item class="text-grey-5 grey-1 round">\n                        <ion-input type="text" placeholder="Fullname" [(ngModel)]="fullname"></ion-input>\n                    </ion-item>\n                </ion-list>\n                <ion-list>\n                    <ion-item class="text-grey-5 grey-1 round">\n                        <ion-input type="email" placeholder="Email" [(ngModel)]="email"></ion-input>\n                    </ion-item>\n                </ion-list>\n                <ion-list>\n                    <ion-item class="text-grey-5 grey-1 bdra-15">\n                        <ion-textarea type="text" placeholder="Message" [(ngModel)]="message"></ion-textarea>\n                    </ion-item>\n                </ion-list>\n\n                <ion-grid>\n                    <ion-row>\n                        <ion-col col-4 class="picturetemplate" *ngFor="let data of picturesView; let i = index">\n                            <div class="box" *ngIf="data.type != \'center_logo\'">\n                                <img [src]="data.imgFile?data.imgFile:\'./assets/\'+data.placeholder"/>\n                                <button ion-button icon-only (click)="showActionSheet(i)">\n                                    <ion-icon class="text-pink" name="md-reverse-camera"></ion-icon>\n                                </button>\n                            </div>\n\n                            <div class="box transparent" *ngIf="data.type == \'center_logo\'">\n                                <img [src]="\'./assets/\'+data.placeholder"/>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n\n\n                <div class="text-right">\n                    <button ion-button round icon-left class="pink text-white mgt-10" (click)="sendMessage()">\n                        <ion-icon class="text-pink" name="send"></ion-icon>\n                        Send \n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>\n\n<div class="my-overlay" padding *ngIf="showPreviewOverlay">\n    <div class="imgbox" *ngIf="!pictureTaken && index == 6">\n        <img class="center-fit" src=\'assets/picturetemplate/teeth_right_occlusion.png\'>\n    </div>\n    <div class="imgbox" *ngIf="!pictureTaken && index == 7">\n        <img class="center-fit" src=\'assets/picturetemplate/teeth_front_occlusion.png\'>\n    </div>\n    <div class="imgbox" *ngIf="!pictureTaken && index == 8">\n        <img class="center-fit" src=\'assets/picturetemplate/teeth_left_occlusion.png\'>\n    </div>\n    <div class="imgbox" *ngIf="pictureTaken">\n        <img class="center-fit rotate-90" src="{{base64Image}}">\n    </div>\n\n    <div class="buttonbox" *ngIf="!pictureTaken" (click)="takePicturePreview()">\n      <img class="center-fit" src=\'assets/icon/btn_icon3.png\'>\n    </div>\n    <div class="cancelbutton" *ngIf="!pictureTaken" (click)="cancelCamera()">\n      <img class="center-fit" src=\'assets/icon/undo.png\'>\n    </div>\n  \n    <div class="checkbutton" *ngIf="pictureTaken" (click)="confirmPhoto()">\n      <ion-icon name="checkmark-circle-outline"></ion-icon>\n    </div>\n    <div class="crossbutton" *ngIf="pictureTaken" (click)="retakePhoto()">\n      <ion-icon name="close-circle"></ion-icon>\n    </div>\n</div>\n'/*ion-inline-end:"E:\Projects\orthodentiste_v5\src\pages\sendpicture\sendpicture.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64__["a" /* Base64 */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], SendpicturePage);
    return SendpicturePage;
}());

//# sourceMappingURL=sendpicture.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAppointmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MyAppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyAppointmentPage = /** @class */ (function () {
    function MyAppointmentPage(navCtrl, navParams, calendar, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.calendar = calendar;
        this.api = api;
        this.title = "";
        this.location = "";
        this.eventTime = {
            start: "",
            end: ""
        };
        this.eventDate = {
            start: "",
            end: ""
        };
        this.hasReadWritePermission = true;
    }
    MyAppointmentPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.calendar.hasReadWritePermission().then(function (res) {
            _this.hasReadWritePermission = true;
        }).catch(function (error) {
            _this.calendar.requestReadWritePermission().then(function (res) {
                _this.hasReadWritePermission = true;
            }).catch(function (error) {
            });
        });
        console.log('ionViewDidLoad MyAppointmentPage');
    };
    MyAppointmentPage.prototype.createEvent = function () {
        var _this = this;
        if (!this.title) {
            this.api.showToast("Enter event title");
        }
        else if (!this.location) {
            this.api.showToast("Enter event location");
        }
        else if (!this.eventDate.start || !this.eventTime.start) {
            this.api.showToast("Enter event start date time");
        }
        else if (!this.eventDate.end || !this.eventTime.end) {
            this.api.showToast("Enter event end date time");
        }
        else {
            var startDate = __WEBPACK_IMPORTED_MODULE_3_moment___default()(this.eventDate.start + " " + this.eventTime.start, "YYYY-MM-DD H:mm").toDate();
            var endDate = __WEBPACK_IMPORTED_MODULE_3_moment___default()(this.eventDate.end + " " + this.eventTime.end, "YYYY-MM-DD H:mm").toDate();
            var calOptions = this.calendar.getCalendarOptions();
            calOptions.firstReminderMinutes = 60 * 24;
            calOptions.secondReminderMinutes = 60 * 1;
            this.calendar.createEventWithOptions(this.title, this.location, "", startDate, endDate, calOptions).then(function (res) {
                _this.api.showToast("Event created successfully");
                _this.eventDate.start = "";
                _this.eventDate.end = "";
                _this.eventTime.start = "";
                _this.eventTime.end = "";
                _this.title = "";
                _this.location = "";
            }).catch(function (error) {
                _this.api.showToast(error.message);
            });
        }
    };
    MyAppointmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-my-appointment',template:/*ion-inline-start:"E:\Projects\orthodentiste_v5\src\pages\my-appointment\my-appointment.html"*/'<!--\n  Generated template for the MyAppointmentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="skin skin-white">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Mon Rendez-vous</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="white">\n    <div class="white about-v1">\n        <p text-center *ngIf="!hasReadWritePermission">\n            Permission not allowed for add appointment.\n        </p>\n\n        <div padding class="ani-right-to-left" *ngIf="hasReadWritePermission">\n            <div class="form-mess mgt-10 pdb-50 ani-bottom-to-top">\n\n                <h4 class="fs-26 fw-600">\n                    Mon Rendez-vous\n                </h4>\n\n                <ion-list>\n                    <ion-item class="text-grey-5 grey-1 round">\n                        <ion-input type="text" placeholder="Title" [(ngModel)]="title"></ion-input>\n                    </ion-item>\n                </ion-list>\n\n                <ion-list>\n                    <ion-item class="text-grey-5 grey-1 round dropdown">\n                        <ion-select [(ngModel)]="location" placeholder="Select location">\n                            <ion-option value="Dorval">Dorval</ion-option>\n                            <ion-option value="Montréal">Montréal</ion-option>\n                            <ion-option value="St-Leonard">St-Leonard</ion-option>\n                        </ion-select>\n                    </ion-item>\n\n\n                </ion-list>\n\n                <ion-list>\n                    <ion-item class="text-grey-5 grey-1 bdra-15 round">\n                        <ion-datetime placeholder="Start Date" displayFormat="DD-MM-YYYY" pickerFormat="MMMM DDDD YYYY"\n                                      [(ngModel)]="eventDate.start"></ion-datetime>\n                    </ion-item>\n                </ion-list>\n\n                <ion-list>\n                    <ion-item class="text-grey-5 grey-1 bdra-15 round">\n                        <ion-datetime placeholder="Start Time" displayFormat="h:mm A" pickerFormat="h mm A"\n                                      [(ngModel)]="eventTime.start"></ion-datetime>\n                    </ion-item>\n                </ion-list>\n\n                <ion-list>\n                    <ion-item class="text-grey-5 grey-1 bdra-15 round">\n                        <ion-datetime placeholder="End Date" displayFormat="DD-MM-YYYY" pickerFormat="MMMM DDDD YYYY"\n                                      [(ngModel)]="eventDate.end"></ion-datetime>\n                    </ion-item>\n                </ion-list>\n\n                <ion-list>\n                    <ion-item class="text-grey-5 grey-1 bdra-15 round">\n                        <ion-datetime placeholder="End Time" displayFormat="h:mm A" pickerFormat="h mm A"\n                                      [(ngModel)]="eventTime.end"></ion-datetime>\n                    </ion-item>\n                </ion-list>\n\n                <div class="text-right">\n                    <button ion-button round icon-left class="pink text-white mgt-10" (click)="createEvent()">\n                        Add\n                    </button>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n</ion-content>\n\n\n'/*ion-inline-end:"E:\Projects\orthodentiste_v5\src\pages\my-appointment\my-appointment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__["a" /* Calendar */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */]])
    ], MyAppointmentPage);
    return MyAppointmentPage;
}());

//# sourceMappingURL=my-appointment.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferPatientPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ReferPatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReferPatientPage = /** @class */ (function () {
    function ReferPatientPage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.name = "";
        this.phoneNumber = "";
        this.email = "";
    }
    ReferPatientPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReferPatientPage');
    };
    ReferPatientPage.prototype.sendInvitation = function () {
        var _this = this;
        var postData = {
            name: this.name,
            phone: this.phoneNumber,
            email: this.email
        };
        this.api.loading();
        this.api.postRequest(__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */].METHODS.SENDINVITATION, postData).then(function (data) {
            _this.api.hideLoading();
            if (data && data.status) {
                _this.api.showToast(data.message);
                _this.name = "";
                _this.email = "";
                _this.phoneNumber = "";
            }
            else {
                _this.api.showToast(data.message);
            }
        }).catch(function (error) {
            _this.api.hideLoading();
            _this.api.showToast(error.message);
        });
    };
    ReferPatientPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-refer-patient',template:/*ion-inline-start:"E:\Projects\orthodentiste_v5\src\pages\refer-patient\refer-patient.html"*/'<!--\n  Generated template for the ReferPatientPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="skin skin-white">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Référer un patient</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content class="white">\n\n\n    <div class="white about-v1">\n        <div padding class="ani-right-to-left">\n            <div class="form-mess mgt-5 pdb-50 ani-bottom-to-top">\n                <h4 class="fs-26 fw-600">Référer un patient</h4>\n                <ion-list>\n                    <ion-item class="text-grey-5 grey-1 round">\n                        <ion-label>Name</ion-label>\n                        <ion-input type="text" [(ngModel)]="name"></ion-input>\n                    </ion-item>\n                </ion-list>\n\n                <ion-list>\n                    <ion-item class="text-grey-5 grey-1 round">\n                        <ion-label>Phone Number</ion-label>\n                        <ion-input type="text" [(ngModel)]="phoneNumber"></ion-input>\n                    </ion-item>\n                </ion-list>\n\n                <ion-list>\n                    <ion-item class="text-grey-5 grey-1 round">\n                        <ion-label>Email</ion-label>\n                        <ion-input type="text" [(ngModel)]="email"></ion-input>\n                    </ion-item>\n                </ion-list>\n\n                <div class="text-right">\n                    <button ion-button round icon-left class="pink text-white mgt-10" (click)="sendInvitation()">\n                        <ion-icon class="text-pink" name="send"></ion-icon>\n                        Send Invitation\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>\n\n\n'/*ion-inline-end:"E:\Projects\orthodentiste_v5\src\pages\refer-patient\refer-patient.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], ReferPatientPage);
    return ReferPatientPage;
}());

//# sourceMappingURL=refer-patient.js.map

/***/ }),

/***/ 168:
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
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 213:
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
webpackEmptyAsyncContext.id = 213;

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calldr_calldr__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__howtoget_howtoget__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sendmessage_sendmessage__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sendpicture_sendpicture__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__my_appointment_my_appointment__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__refer_patient_refer_patient__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, callNumber) {
        this.navCtrl = navCtrl;
        this.callNumber = callNumber;
        // used for an example of ngFor and navigation
        this.pages = [
            // {
            //     title: 'Home',
            //     component: HomePage,
            //     icon: 'md-home'
            // },
            {
                title: 'À propos',
                component: __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */],
                icon: 'md-list-box',
                image: 'texting-smartphone.jpg'
            },
            {
                title: 'Comment se rendre',
                component: __WEBPACK_IMPORTED_MODULE_4__howtoget_howtoget__["a" /* HowtogetPage */],
                icon: 'md-navigate',
                image: 'map-kit.jpg'
            },
            {
                title: 'Appeller Dr Bach',
                component: __WEBPACK_IMPORTED_MODULE_3__calldr_calldr__["a" /* CalldrPage */],
                icon: 'md-call',
                image: 'smartphonecall.jpg',
                type: 'call'
            },
            {
                title: 'Envoyer message',
                component: __WEBPACK_IMPORTED_MODULE_5__sendmessage_sendmessage__["a" /* SendmessagePage */],
                icon: 'md-text',
                image: 'data-security.jpg'
            },
            {
                title: 'Envoyer photo',
                component: __WEBPACK_IMPORTED_MODULE_6__sendpicture_sendpicture__["a" /* SendpicturePage */],
                icon: 'md-reverse-camera',
                image: 'selfie-smartphone.jpg'
            },
            {
                title: 'Mon Rendez-vous',
                component: __WEBPACK_IMPORTED_MODULE_8__my_appointment_my_appointment__["a" /* MyAppointmentPage */],
                icon: 'md-calendar',
                image: 'appointment.jpg'
            },
            {
                title: 'Référer un patient',
                component: __WEBPACK_IMPORTED_MODULE_9__refer_patient_refer_patient__["a" /* ReferPatientPage */],
                icon: 'md-person-add',
                image: 'referfriend.jpg'
            }
        ];
    }
    HomePage.prototype.openPage = function (page) {
        if (page.type == "call") {
            this.callNumber.callNumber("1-514-340-2224", true)
                .then(function (res) { return console.log('Launched dialer!', res); })
                .catch(function (err) { return console.log('Error launching dialer', err); });
        }
        else {
            this.navCtrl.setRoot(page.component);
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\Projects\orthodentiste_v5\src\pages\home\home.html"*/'<ion-header class="skin skin-white">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Home</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="white">\n\n\n    <div class="custom-button-container">\n        <div class="custom-button layout" *ngFor="let tree of pages, let i = index" (click)="openPage(tree)">\n            <img class="button-image" [src]="\'./assets/dashboardimgs/\'+tree.image"/>\n            <div class="button-text text-white uppercase spacing-1 fw-600 fs-16">\n                {{tree.title}}\n            </div>\n        </div>\n        <div class="custom-button"></div>\n        <div class="custom-button"></div>\n        <div class="custom-button"></div>\n    </div>\n\n\n    <ion-card class="card-more-content bdra-5" *ngFor="let tree of pages, let i = index" style="display: none">\n        <div class="active" class="wrapper" (click)="openPage(tree)">\n            <div class="thumb">\n                <img src="./assets/imgs/{{\'bg\' + (i + 1) + \'.png\'}}"/>\n\n                <ion-card-content class="black-opct text-white">\n                    <ion-card-title class="text-white uppercase spacing-1 fw-600 fs-16">{{tree.title}}</ion-card-title>\n                    <!--<span class="info-stt text-white inline-block"><ion-icon name="md-stats"></ion-icon></span>-->\n                </ion-card-content>\n\n                <ion-item class="btn-open-more transparent">\n                    <ion-label class="text-white">\n                        <ion-icon name="{{tree.icon}}"></ion-icon>\n                        <!--<ion-icon name="md-list"></ion-icon>-->\n                    </ion-label>\n                </ion-item>\n            </div>\n\n            <ion-list class="tree mgb-0" *ngFor="let item of tree.group, let i = index">\n                <ion-row>\n                    <button ion-item class="fs-14">\n                        <ion-label class="text-grey-5">\n                            <ion-icon class="fs-22 text-grey-5 mgt-10" name="{{item.icon}}"\n                                      style="margin-top: -3px!important"></ion-icon>\n                            {{item.title}}\n                        </ion-label>\n                    </button>\n                </ion-row>\n            </ion-list>\n\n        </div>\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"E:\Projects\orthodentiste_v5\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__["a" /* CallNumber */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(494);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about_module__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_calldr_calldr_module__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_howtoget_howtoget_module__ = __webpack_require__(824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sendmessage_sendmessage_module__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_sendpicture_sendpicture_module__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_my_appointment_my_appointment_module__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_refer_patient_refer_patient_module__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_base64__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_http__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_call_number__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_api_api__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_http__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_calendar__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_in_app_browser_ngx__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_camera_preview__ = __webpack_require__(830);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















 //import in app.module.ts








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about_module__["a" /* AboutPageModule */],
                __WEBPACK_IMPORTED_MODULE_7__pages_calldr_calldr_module__["a" /* CalldrPageModule */],
                __WEBPACK_IMPORTED_MODULE_8__pages_howtoget_howtoget_module__["a" /* HowtogetPageModule */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sendmessage_sendmessage_module__["a" /* SendmessagePageModule */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sendpicture_sendpicture_module__["a" /* SendpicturePageModule */],
                __WEBPACK_IMPORTED_MODULE_11__pages_my_appointment_my_appointment_module__["a" /* MyAppointmentPageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_refer_patient_refer_patient_module__["a" /* ReferPatientPageModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_19__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_calendar__["a" /* Calendar */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_camera_preview__["a" /* CameraPreview */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_calldr_calldr__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_howtoget_howtoget__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_sendmessage_sendmessage__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sendpicture_sendpicture__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_my_appointment_my_appointment__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_refer_patient_refer_patient__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_call_number__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = /** @class */ (function () {
    function MyApp(callNumber, platform, statusBar, splashScreen) {
        this.callNumber = callNumber;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            {
                title: 'accueil',
                component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                icon: 'md-home'
            },
            {
                title: 'à propos',
                component: __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                icon: 'md-list-box'
            },
            {
                title: 'comment se rendre?',
                component: __WEBPACK_IMPORTED_MODULE_7__pages_howtoget_howtoget__["a" /* HowtogetPage */],
                icon: 'md-navigate'
            },
            {
                title: 'appeller Dr Bach',
                component: __WEBPACK_IMPORTED_MODULE_6__pages_calldr_calldr__["a" /* CalldrPage */],
                icon: 'md-call',
                type: 'call'
            },
            {
                title: 'envoyer message',
                component: __WEBPACK_IMPORTED_MODULE_8__pages_sendmessage_sendmessage__["a" /* SendmessagePage */],
                icon: 'md-text'
            },
            {
                title: 'envoyer photos',
                component: __WEBPACK_IMPORTED_MODULE_9__pages_sendpicture_sendpicture__["a" /* SendpicturePage */],
                icon: 'md-reverse-camera'
            },
            {
                title: 'mon Rendez-vous',
                component: __WEBPACK_IMPORTED_MODULE_10__pages_my_appointment_my_appointment__["a" /* MyAppointmentPage */],
                icon: 'md-calendar'
            },
            {
                title: 'référer un patient',
                component: __WEBPACK_IMPORTED_MODULE_11__pages_refer_patient_refer_patient__["a" /* ReferPatientPage */],
                icon: 'md-person-add'
            }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        if (page.type == "call") {
            this.callNumber.callNumber("1-514-340-2224", true)
                .then(function (res) { return console.log('Launched dialer!', res); })
                .catch(function (err) { return console.log('Error launching dialer', err); });
        }
        else {
            this.nav.setRoot(page.component);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\Projects\orthodentiste_v5\src\app\app.html"*/'  <ion-menu class="skin skin-grey-1" [content]="content" id="menu-avatar">\n\n    <ion-content class="white">\n\n      <div class="info-user mgb-30 pdt-50 pdb-20 black-opct" *ngIf="false">\n<!--         <button menuClose (click)="logout()" ion-button clear only-icon small class="user-setting text-grey-1">\n          <ion-icon name="md-log-out"></ion-icon>\n        </button> -->\n        <div class="bg-img"><img src="./assets/imgs/bg9.jpg" alt=""></div>\n        <div class="wrapper-avt mgl-15 mgr-10">\n          <img src="./assets/imgs/avt1.jpg" alt="">\n        </div>\n        <div class="main-info">\n          <h2 class="user-name fs-20 fw-600 mg-0 text-white">Koodinh</h2>\n          <button ion-button clear small class="pd-0 mg-0 text-left text-black">koodinh@gmail.com</button>\n        </div>\n      </div>\n\n      <ion-list no-lines class="lst-menu">\n        <span class="">\n          <ion-item class="transparent uppercase mgt-20 fs-14 fw-400 spacing-1">\n            Tableau de bord\n          </ion-item>\n\n          <button menuClose="menu-avatar" ion-item icon-left *ngFor="let sub of pages" class="transparent" (click)="openPage(sub)">\n            <ion-icon name="{{sub.icon}}" item-left></ion-icon>\n            {{sub.title}}\n          </button>\n        </span>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"E:\Projects\orthodentiste_v5\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_12__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(260);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import {HttpClient, HttpRequest} from '@angular/common/http';




/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiProvider = /** @class */ (function () {
    function ApiProvider(http, platform, loadingCtrl, toastCtrl) {
        this.http = http;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.APIBASEURL = "http://app.orthodontistemontreal.ca/";
        console.log('Hello ApiProvider Provider');
    }
    ApiProvider.prototype.isDevice = function () {
        if (this.platform.is('core') || this.platform.is('mobileweb')) {
            return false;
        }
        else {
            return true;
        }
    };
    ApiProvider.prototype.showToast = function (msg, duration) {
        if (duration === void 0) { duration = 3000; }
        this.toast = this.toastCtrl.create({
            message: msg,
            duration: duration,
            position: 'Bottom'
        });
        this.toast.present();
    };
    ApiProvider.prototype.callHttpGet = function (url, headers) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
            _this.http.get(url, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    ApiProvider.prototype.callHttpPost = function (url, body, headers) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
            _this.http.post(url, body, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log("POST Reponse " + JSON.stringify(data));
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    ApiProvider.prototype.postRequest = function (methodName, postData) {
        if (postData === void 0) { postData = {}; }
        var ref = this;
        var url = this.getBaseApiUrl() + methodName;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.callHttpPost(url, postData, {});
    };
    ApiProvider.prototype.getRequest = function (methodName, param) {
        if (param === void 0) { param = {}; }
        var ref = this;
        var url = this.getBaseApiUrl() + methodName + "?" + this.generateQueryString(param);
        var headers = {};
        return this.callHttpGet(url, headers);
    };
    ApiProvider.prototype.getBaseApiUrl = function () {
        if (this.isDevice()) {
            return this.APIBASEURL;
        }
        return "http://localhost:8100/api/";
    };
    ApiProvider.prototype.generateQueryString = function (obj) {
        var str = [];
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        }
        return str.join("&");
    };
    ApiProvider.prototype.loading = function (msg) {
        if (msg === void 0) { msg = null; }
        this.loader = this.loadingCtrl.create({
            content: msg ? msg : ''
        });
        this.loader.present();
    };
    ApiProvider.prototype.hideLoading = function () {
        if (this.loader) {
            this.loader.dismiss();
            this.loader = null;
        }
    };
    ApiProvider.METHODS = {
        SENDEMAIL: "app_mail/sendemail.php",
        SENDINVITATION: "app_mail/sendinvitation.php",
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 820:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 356,
	"./af.js": 356,
	"./ar": 357,
	"./ar-dz": 358,
	"./ar-dz.js": 358,
	"./ar-kw": 359,
	"./ar-kw.js": 359,
	"./ar-ly": 360,
	"./ar-ly.js": 360,
	"./ar-ma": 361,
	"./ar-ma.js": 361,
	"./ar-sa": 362,
	"./ar-sa.js": 362,
	"./ar-tn": 363,
	"./ar-tn.js": 363,
	"./ar.js": 357,
	"./az": 364,
	"./az.js": 364,
	"./be": 365,
	"./be.js": 365,
	"./bg": 366,
	"./bg.js": 366,
	"./bm": 367,
	"./bm.js": 367,
	"./bn": 368,
	"./bn.js": 368,
	"./bo": 369,
	"./bo.js": 369,
	"./br": 370,
	"./br.js": 370,
	"./bs": 371,
	"./bs.js": 371,
	"./ca": 372,
	"./ca.js": 372,
	"./cs": 373,
	"./cs.js": 373,
	"./cv": 374,
	"./cv.js": 374,
	"./cy": 375,
	"./cy.js": 375,
	"./da": 376,
	"./da.js": 376,
	"./de": 377,
	"./de-at": 378,
	"./de-at.js": 378,
	"./de-ch": 379,
	"./de-ch.js": 379,
	"./de.js": 377,
	"./dv": 380,
	"./dv.js": 380,
	"./el": 381,
	"./el.js": 381,
	"./en-au": 382,
	"./en-au.js": 382,
	"./en-ca": 383,
	"./en-ca.js": 383,
	"./en-gb": 384,
	"./en-gb.js": 384,
	"./en-ie": 385,
	"./en-ie.js": 385,
	"./en-il": 386,
	"./en-il.js": 386,
	"./en-in": 387,
	"./en-in.js": 387,
	"./en-nz": 388,
	"./en-nz.js": 388,
	"./en-sg": 389,
	"./en-sg.js": 389,
	"./eo": 390,
	"./eo.js": 390,
	"./es": 391,
	"./es-do": 392,
	"./es-do.js": 392,
	"./es-us": 393,
	"./es-us.js": 393,
	"./es.js": 391,
	"./et": 394,
	"./et.js": 394,
	"./eu": 395,
	"./eu.js": 395,
	"./fa": 396,
	"./fa.js": 396,
	"./fi": 397,
	"./fi.js": 397,
	"./fil": 398,
	"./fil.js": 398,
	"./fo": 399,
	"./fo.js": 399,
	"./fr": 400,
	"./fr-ca": 401,
	"./fr-ca.js": 401,
	"./fr-ch": 402,
	"./fr-ch.js": 402,
	"./fr.js": 400,
	"./fy": 403,
	"./fy.js": 403,
	"./ga": 404,
	"./ga.js": 404,
	"./gd": 405,
	"./gd.js": 405,
	"./gl": 406,
	"./gl.js": 406,
	"./gom-deva": 407,
	"./gom-deva.js": 407,
	"./gom-latn": 408,
	"./gom-latn.js": 408,
	"./gu": 409,
	"./gu.js": 409,
	"./he": 410,
	"./he.js": 410,
	"./hi": 411,
	"./hi.js": 411,
	"./hr": 412,
	"./hr.js": 412,
	"./hu": 413,
	"./hu.js": 413,
	"./hy-am": 414,
	"./hy-am.js": 414,
	"./id": 415,
	"./id.js": 415,
	"./is": 416,
	"./is.js": 416,
	"./it": 417,
	"./it-ch": 418,
	"./it-ch.js": 418,
	"./it.js": 417,
	"./ja": 419,
	"./ja.js": 419,
	"./jv": 420,
	"./jv.js": 420,
	"./ka": 421,
	"./ka.js": 421,
	"./kk": 422,
	"./kk.js": 422,
	"./km": 423,
	"./km.js": 423,
	"./kn": 424,
	"./kn.js": 424,
	"./ko": 425,
	"./ko.js": 425,
	"./ku": 426,
	"./ku.js": 426,
	"./ky": 427,
	"./ky.js": 427,
	"./lb": 428,
	"./lb.js": 428,
	"./lo": 429,
	"./lo.js": 429,
	"./lt": 430,
	"./lt.js": 430,
	"./lv": 431,
	"./lv.js": 431,
	"./me": 432,
	"./me.js": 432,
	"./mi": 433,
	"./mi.js": 433,
	"./mk": 434,
	"./mk.js": 434,
	"./ml": 435,
	"./ml.js": 435,
	"./mn": 436,
	"./mn.js": 436,
	"./mr": 437,
	"./mr.js": 437,
	"./ms": 438,
	"./ms-my": 439,
	"./ms-my.js": 439,
	"./ms.js": 438,
	"./mt": 440,
	"./mt.js": 440,
	"./my": 441,
	"./my.js": 441,
	"./nb": 442,
	"./nb.js": 442,
	"./ne": 443,
	"./ne.js": 443,
	"./nl": 444,
	"./nl-be": 445,
	"./nl-be.js": 445,
	"./nl.js": 444,
	"./nn": 446,
	"./nn.js": 446,
	"./oc-lnc": 447,
	"./oc-lnc.js": 447,
	"./pa-in": 448,
	"./pa-in.js": 448,
	"./pl": 449,
	"./pl.js": 449,
	"./pt": 450,
	"./pt-br": 451,
	"./pt-br.js": 451,
	"./pt.js": 450,
	"./ro": 452,
	"./ro.js": 452,
	"./ru": 453,
	"./ru.js": 453,
	"./sd": 454,
	"./sd.js": 454,
	"./se": 455,
	"./se.js": 455,
	"./si": 456,
	"./si.js": 456,
	"./sk": 457,
	"./sk.js": 457,
	"./sl": 458,
	"./sl.js": 458,
	"./sq": 459,
	"./sq.js": 459,
	"./sr": 460,
	"./sr-cyrl": 461,
	"./sr-cyrl.js": 461,
	"./sr.js": 460,
	"./ss": 462,
	"./ss.js": 462,
	"./sv": 463,
	"./sv.js": 463,
	"./sw": 464,
	"./sw.js": 464,
	"./ta": 465,
	"./ta.js": 465,
	"./te": 466,
	"./te.js": 466,
	"./tet": 467,
	"./tet.js": 467,
	"./tg": 468,
	"./tg.js": 468,
	"./th": 469,
	"./th.js": 469,
	"./tk": 470,
	"./tk.js": 470,
	"./tl-ph": 471,
	"./tl-ph.js": 471,
	"./tlh": 472,
	"./tlh.js": 472,
	"./tr": 473,
	"./tr.js": 473,
	"./tzl": 474,
	"./tzl.js": 474,
	"./tzm": 475,
	"./tzm-latn": 476,
	"./tzm-latn.js": 476,
	"./tzm.js": 475,
	"./ug-cn": 477,
	"./ug-cn.js": 477,
	"./uk": 478,
	"./uk.js": 478,
	"./ur": 479,
	"./ur.js": 479,
	"./uz": 480,
	"./uz-latn": 481,
	"./uz-latn.js": 481,
	"./uz.js": 480,
	"./vi": 482,
	"./vi.js": 482,
	"./x-pseudo": 483,
	"./x-pseudo.js": 483,
	"./yo": 484,
	"./yo.js": 484,
	"./zh-cn": 485,
	"./zh-cn.js": 485,
	"./zh-hk": 486,
	"./zh-hk.js": 486,
	"./zh-mo": 487,
	"./zh-mo.js": 487,
	"./zh-tw": 488,
	"./zh-tw.js": 488
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 820;

/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"E:\Projects\orthodentiste_v5\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\Projects\orthodentiste_v5\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalldrPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calldr__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CalldrPageModule = /** @class */ (function () {
    function CalldrPageModule() {
    }
    CalldrPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__calldr__["a" /* CalldrPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__calldr__["a" /* CalldrPage */]),
            ],
        })
    ], CalldrPageModule);
    return CalldrPageModule;
}());

//# sourceMappingURL=calldr.module.js.map

/***/ }),

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowtogetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__howtoget__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HowtogetPageModule = /** @class */ (function () {
    function HowtogetPageModule() {
    }
    HowtogetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__howtoget__["a" /* HowtogetPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__howtoget__["a" /* HowtogetPage */]),
            ],
        })
    ], HowtogetPageModule);
    return HowtogetPageModule;
}());

//# sourceMappingURL=howtoget.module.js.map

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendmessagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sendmessage__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SendmessagePageModule = /** @class */ (function () {
    function SendmessagePageModule() {
    }
    SendmessagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sendmessage__["a" /* SendmessagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sendmessage__["a" /* SendmessagePage */]),
            ],
        })
    ], SendmessagePageModule);
    return SendmessagePageModule;
}());

//# sourceMappingURL=sendmessage.module.js.map

/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendpicturePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sendpicture__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SendpicturePageModule = /** @class */ (function () {
    function SendpicturePageModule() {
    }
    SendpicturePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sendpicture__["a" /* SendpicturePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sendpicture__["a" /* SendpicturePage */]),
            ],
        })
    ], SendpicturePageModule);
    return SendpicturePageModule;
}());

//# sourceMappingURL=sendpicture.module.js.map

/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAppointmentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_appointment__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyAppointmentPageModule = /** @class */ (function () {
    function MyAppointmentPageModule() {
    }
    MyAppointmentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_appointment__["a" /* MyAppointmentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_appointment__["a" /* MyAppointmentPage */]),
            ],
        })
    ], MyAppointmentPageModule);
    return MyAppointmentPageModule;
}());

//# sourceMappingURL=my-appointment.module.js.map

/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferPatientPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__refer_patient__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReferPatientPageModule = /** @class */ (function () {
    function ReferPatientPageModule() {
    }
    ReferPatientPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__refer_patient__["a" /* ReferPatientPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__refer_patient__["a" /* ReferPatientPage */]),
            ],
        })
    ], ReferPatientPageModule);
    return ReferPatientPageModule;
}());

//# sourceMappingURL=refer-patient.module.js.map

/***/ })

},[489]);
//# sourceMappingURL=main.js.map