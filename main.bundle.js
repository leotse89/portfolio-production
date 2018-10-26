webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = "#about-me{\n\tpadding: 2rem 0;\n\tbackground-color: #FFF;\n\tcolor: #000;\n\tbackground-size: cover;\n    background-position: center center;\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"small-12 page-heading-wrapper\">\n\t<img src=\"./assets/img/header/2.jpg\" width=\"100%\">\n\t<h1 class=\"page-heading\">About</h1>\n</div>\n\n<section id=\"about-me\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"small-12 columns\">\n\t\t\t\t<h3>About Me</h3>\n\t\t\t\t<p>\n\t\t\t\t\tLeo was born in Guang Zhou and educated in Hong Kong and Canada. He received a Diploma of Technology with distinction in <a target=\"_blank\" href=\"//www.bcit.ca/study/programs/6405dipma\">Digital Design & Development</a> from <a target=\"_blank\" href=\"//www.bcit.ca\">BCIT</a> (British Columbia Institute of Technology) in Burnaby, BC.\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\tAfter having worked in the digital agency industry for a year and a half in Vancouver BC, he has earned the abilities to create any PHP-based web applications and websites using both front-end and back-end web development frameworks and techniques.\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\tWhile living an <span data-tooltip aria-haspopup=\"true\" class=\"has-tip top\" data-disable-hover=\"false\" data-click-open=\"true\" tabindex=\"2\" title=\"{{otaku}}\">Otaku</span> lifestyle, Leo is working hard toward web development and hoping to become an Unicorn Web Developer in the next couple of years.\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\tWhen Leo is not at home (or not in front of his computer), he enjoys spending time outdoor with his friends. You can find him eating hearty dishes in a wide range kinds of food in a restaurant.\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<section id=\"my-music\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"small-12 columns\">\n\t\t\t\t<h3>Music Lover</h3>\n\t\t\t\t<p>Music is always my energy source. I listen to all sorts of music whenever I am programming. </p>\n\t\t\t\t<iframe width=\"100%\" height=\"250\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/317985208&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=true\"></iframe>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = /** @class */ (function () {
    function AboutComponent(el, router, title) {
        this.el = el;
        this.otaku = 'A Japanese term that describes a person who is obsessed with Technology, Manga, Anime, and Video Games. In fact, an Otaku does not exercise nor socialize much as well. A true Otaku always stays home and do the stuffs he loves everyday.';
        router.events.subscribe(function (url) {
            title.setTitle('Leo Tse\'s Portfolio - About');
        });
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    var _a, _b, _c;
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object])
    ], AboutComponent);
    return AboutComponent;
}());

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'App Works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__works_works_component__ = __webpack_require__("./src/app/works/works.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__blog_blog_component__ = __webpack_require__("./src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resume_resume_component__ = __webpack_require__("./src/app/resume/resume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__page_not_found_page_not_found_component__ = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */] },
    { path: 'works', component: __WEBPACK_IMPORTED_MODULE_6__works_works_component__["a" /* WorksComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */] },
    { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_8__blog_blog_component__["a" /* BlogComponent */] },
    { path: 'resume', component: __WEBPACK_IMPORTED_MODULE_9__resume_resume_component__["a" /* ResumeComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__["a" /* ContactComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_11__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__works_works_component__["a" /* WorksComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__blog_blog_component__["a" /* BlogComponent */],
                __WEBPACK_IMPORTED_MODULE_9__resume_resume_component__["a" /* ResumeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_11__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/blog/blog.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"small-12 page-heading-wrapper\">\n\t<img src=\"./assets/img/header/5.jpg\" width=\"100%\">\n\t<h1 class=\"page-heading\">Blog</h1>\n</div>\n\n<section id=\"contact-me\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"medium-12 columns\">\n\t\t\t\t<h3>Instagram @leotse89</h3>\n\t\t\t\t<p>I don't usually blog. But when I do, I post it on Instagram!</p>\n\t\t\t</div>\n\t\t\t<div class=\"medium-12 columns\">\n\t\t\t\t<div class=\"insta-container\">\n\t\t\t\t\t<!-- LightWidget WIDGET --><script src=\"https://cdn.lightwidget.com/widgets/lightwidget.js\"></script><iframe src=\"//lightwidget.com/widgets/9ef8d97a389a5e18b14e2701bd28773c.html\" scrolling=\"no\" allowtransparency=\"true\" class=\"lightwidget-widget\" style=\"width:100%;border:0;overflow:hidden;height:1200px;\"></iframe>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogComponent = /** @class */ (function () {
    function BlogComponent(el, router, title) {
        this.el = el;
        router.events.subscribe(function (url) {
            title.setTitle('Leo Tse\'s Portfolio - Blog');
        });
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    var _a, _b, _c;
    BlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-blog',
            template: __webpack_require__("./src/app/blog/blog.component.html"),
            styles: [__webpack_require__("./src/app/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object])
    ], BlogComponent);
    return BlogComponent;
}());

//# sourceMappingURL=blog.component.js.map

/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = "#contact-me{\n\tpadding: 2rem 0;\n}"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"small-12 page-heading-wrapper\">\n\t<img src=\"./assets/img/header/3.jpg\" width=\"100%\">\n\t<h1 class=\"page-heading\">Contact</h1>\n</div>\n\n<section id=\"contact-me\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"medium-12 columns\">\n\t\t\t\t<h3>Contact Me</h3>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"medium-6 columns\">\n\t\t\t\t<p>\n\t\t\t\t\tI am currently looking for <span>a full-time opportunity</span> in North America. Please contact me if you want to hire a Full-Stack PHP Web Developer.\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\tThank you in advance!\n\t\t\t\t</p>\n\t\t\t\t<div id=\"map\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"medium-6 columns\">\n                <div class=\"email\">\n                \tEmail: <a class=\"contact-info-name\" href=\"mailto: leotse89@gmail.com\">leotse89@gmail.com</a>\n                </div>\n                <div class=\"phone\">\n                \tPhone: <a class=\"contact-info-name\" href=\"tel:7783169947\">+1-778-316-9947</a>\n                </div>\n                <div class=\"linkedin\">\n                \tLinkedIn: <a class=\"contact-info-name\" href=\"//www.linkedin.com/in/leo-tse-7273a733/\" target=\"_blank\">LinkedIn</a>\n                </div>\n                <div class=\"github\">\n                \tGithub: <a class=\"contact-info-name\" href=\"//github.com/leotse89\" target=\"_blank\">Github</a>\n                </div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = /** @class */ (function () {
    function ContactComponent(el, router, title) {
        this.el = el;
        router.events.subscribe(function (url) {
            title.setTitle('Leo Tse\'s Portfolio - Contact');
        });
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    var _a, _b, _c;
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object])
    ], ContactComponent);
    return ContactComponent;
}());

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "#home-msg-wrapper{\n    display: table;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    z-index: -1;\n    text-align: center;\n}\n\n#welcome-msg{\n    font-family: 'Oleo Script Swash Caps', cursive;\n    font-weight: bold;\n    font-size: 6em;\n    color: #FFF;\n    text-shadow: 1px 2px 5px rgba(168, 168, 168, 0.75);\n    display: table-cell;\n    vertical-align: middle;\n    line-height: 1;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"home-msg-wrapper\">\n\n\t<div id=\"welcome-msg\">Hello World.</div>\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(el, router, title) {
        this.el = el;
        router.events.subscribe(function (url) {
            title.setTitle('Leo Tse\'s Portfolio - A Full Stack PHP Web Developer\'s Dev Cave');
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        __WEBPACK_IMPORTED_MODULE_3_jquery___default()('#home-msg-wrapper').css('height', height + 'px');
        __WEBPACK_IMPORTED_MODULE_3_jquery___default()(window).on('resize', function () {
            height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            __WEBPACK_IMPORTED_MODULE_3_jquery___default()('#home-msg-wrapper').css('height', height + 'px');
        });
    };
    var _a, _b, _c;
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object])
    ], HomeComponent);
    return HomeComponent;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports) {

module.exports = ".testimonial-block-vertical{\n  padding: 2rem;\n}\n.testimonial-block-vertical-quote {\n  background: rgba(77, 210, 255, 0.25);\n  padding: 1rem;\n  border-radius: 0;\n  margin-bottom: 1.875rem;\n  position: relative;\n}\n.testimonial-block-vertical-quote p {\n  margin-bottom: 0;\n}\n.testimonial-block-vertical-quote::after {\n  content: '';\n  bottom: -1.25rem;\n  left: 2.25rem;\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 1.25rem 1.125rem 0 1.125rem;\n  border-color: rgba(77, 210, 255, 0.25) transparent transparent transparent;\n  position: absolute;\n}\n.testimonial-block-vertical-person {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  margin-left: 1.65rem;\n  -ms-flex-align: center;\n      -webkit-box-align: center;\n          align-items: center;\n}\n.testimonial-block-vertical-avatar {\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n}\n.testimonial-block-vertical-name {\n  text-transform: uppercase;\n  font-weight: 600;\n  margin-bottom: 0;\n  margin-left: 0.65rem;\n}\n.testimonial-block-vertical-info {\n  text-transform: uppercase;\n  font-size: 14px;\n  color: #8a8a8a;\n  margin-bottom: 0;\n  margin-left: 0.65rem;\n}"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"small-12 page-heading-wrapper\">\n\t<img src=\"./assets/img/header/6.jpg\" width=\"100%\">\n\t<h1 class=\"page-heading\">Error 404</h1>\n</div>\n\n<div class=\"container\">\n\t<div class=\"testimonial-block-vertical\">\n\t\t<div class=\"testimonial-block-vertical-quote\">\n\t\t\t<p>\n\t\t\t\tWell, this is awkward. The page you are looking for is lost in the desert. But first, please enjoy this Error 404 Remix.\n\t\t\t</p>\n\t\t</div>\n\t\t<div class=\"testimonial-block-vertical-person\">\n\t\t\t<img class=\"testimonial-block-vertical-avatar\" src=\"./assets/img/404-doge.jpg\" alt=\"\" />\n\t\t\t<div>\n\t\t\t  \t<p class=\"testimonial-block-vertical-name\">The 404 Doge</p>\n\t\t\t  \t<p class=\"testimonial-block-vertical-info\">Very Lost, Much Error!</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<iframe width=\"100%\" height=\"150\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/84240737&amp;auto_play=true&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=true\"></iframe>\n</div>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(el, router, title) {
        this.el = el;
        router.events.subscribe(function (url) {
            title.setTitle('Leo Tse\'s Portfolio - 404 Page Not Found');
        });
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    var _a, _b, _c;
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "./src/app/resume/resume.component.css":
/***/ (function(module, exports) {

module.exports = "/* \n * Credit Area: I modified this responsive resume that is created by Xiaoying Riley.\n * Template Name: Orbit - Responsive Resume/CV Template for Developers\n * Version: 1.0\n * Author: Xiaoying Riley\n * Twitter: @3rdwave_themes\n * License: Creative Commons Attribution 3.0 License\n * Website: http://themes.3rdwavemedia.com/\n*/\n*{\n  margin: 0;\n  padding: 0;\n}\nbody {\n  font-family: 'Roboto', sans-serif;\n  color: #545E6C;\n  background: #f5f5f5;\n  font-size: 14px;\n  padding: 30px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 700;\n}\na {\n  color: #2081b1;\n  -webkit-transition: all 0.4s ease-in-out;\n  -moz-transition: all 0.4s ease-in-out;\n  -ms-transition: all 0.4s ease-in-out;\n  -o-transition: all 0.4s ease-in-out;\n  text-decoration: none;\n}\na:hover {\n  color: #10171a;\n}\np {\n  line-height: 1.5;\n}\n.contact-info-name{\n  margin-left: 5px;\n  text-decoration: underline;\n}\n.wrapper{\n  background: #FFFFFF;\n  margin: 15px auto;\n  position: relative;\n  -webkit-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n}\n.sidebar-wrapper {\n  background: #333333;\n  position: absolute;\n  right: 0;\n  width: 240px;\n  height: 100%;\n  min-height: 800px;\n  color: #fff;\n}\n.sidebar-wrapper a {\n  color: #fff;\n}\n.sidebar-wrapper .profile-container {\n  padding: 30px;\n  background: #000;\n  text-align: center;\n  color: #fff;\n}\n.sidebar-wrapper .name {\n  font-size: 32px;\n  font-weight: 900;\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.sidebar-wrapper .tagline {\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 16px;\n  font-weight: 400;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.sidebar-wrapper .profile {\n  margin-bottom: 15px;\n}\n.sidebar-wrapper .contact-list .fa {\n  font-size: 18px;\n  vertical-align: middle;\n}\n.sidebar-wrapper .contact-list li {\n  margin-bottom: 15px;\n}\n.sidebar-wrapper .contact-list li:last-child {\n  margin-bottom: 0;\n}\n.sidebar-wrapper .contact-list .email .fa {\n  font-size: 14px;\n}\n.sidebar-wrapper .container-block {\n  padding: 30px;\n}\n.sidebar-wrapper .container-block-title {\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 700;\n  margin-top: 0;\n  margin-bottom: 15px;\n}\n.sidebar-wrapper .degree {\n  font-size: 14px;\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.sidebar-wrapper .education-container .item {\n  margin-bottom: 15px;\n}\n.sidebar-wrapper .education-container .item:last-child {\n  margin-bottom: 0;\n}\n.sidebar-wrapper .education-container .meta {\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 500;\n  margin-bottom: 0px;\n  margin-top: 0;\n}\n.sidebar-wrapper .education-container .time {\n  color: #a2a2a2;\n  font-weight: 500;\n  margin-bottom: 0px;\n}\n.sidebar-wrapper .languages-container .lang-desc {\n  color: rgba(255, 255, 255, 0.6);\n}\n.sidebar-wrapper .languages-list {\n  margin-bottom: 0;\n}\n.sidebar-wrapper .languages-list li {\n  margin-bottom: 10px;\n}\n.sidebar-wrapper .languages-list li:last-child {\n  margin-bottom: 0;\n}\n.sidebar-wrapper .interests-list {\n  margin-bottom: 0;\n}\n.sidebar-wrapper .interests-list li {\n  margin-bottom: 10px;\n}\n.sidebar-wrapper .interests-list li:last-child {\n  margin-bottom: 0;\n}\n.main-wrapper {\n  background: #fff;\n  padding: 60px;\n  padding-right: 300px;\n}\n.main-wrapper .section-title {\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 500;\n  color: #2e4049;\n  position: relative;\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n.main-wrapper .section-title .fa {\n  width: 30px;\n  height: 30px;\n  margin-right: 8px;\n  display: inline-block;\n  color: #fff;\n  border-radius: 50%;\n  background-clip: padding-box;\n  background: #333333;\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  position: relative;\n  top: -2px;\n}\n.main-wrapper .section {\n  margin-bottom: 60px;\n}\n.main-wrapper .experiences-section .item {\n  margin-bottom: 30px;\n}\n.main-wrapper .upper-row {\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 2px;\n}\n.main-wrapper .job-title {\n  color: #3F4650;\n  font-size: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  font-weight: 500;\n}\n.main-wrapper .time {\n  position: static;\n  display: block;\n  color: #a2a2a2;\n}\n.main-wrapper .company {\n  color: #97AAC3;\n}\n.main-wrapper .project-title {\n  font-size: 16px;\n  font-weight: 400;\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.main-wrapper .projects-section .intro {\n  margin-bottom: 20px;\n}\n.main-wrapper .projects-section .item {\n  margin-bottom: 15px;\n}\n.skillset .item {\n  margin-bottom: 15px;\n  overflow: hidden;\n}\n.skillset .level-title {\n  font-size: 14px;\n  margin-top: 0;\n  margin-bottom: 12px;\n}\n.skillset .level-bar {\n  height: 12px;\n  background: #f5f5f5;\n}\n.skillset .level-bar-inner {\n  height: 12px;\n  background: #333333;\n}\n.footer {\n  padding: 30px;\n  padding-top: 60px;\n}\n.footer .copyright {\n  line-height: 1.6;\n  color: #545E6C;\n  font-size: 13px;\n}\n.footer .fa-heart {\n  color: #fb866a;\n}\n@media (max-width: 767px) {\n  .sidebar-wrapper {\n    position: static;\n    width: inherit;\n  }\n  .wrapper{\n    margin: 0 auto;\n  }\n  .main-wrapper {\n    padding: 30px;\n  }\n  .main-wrapper .time {\n    position: static;\n    display: block;\n  }\n  .main-wrapper .upper-row {\n    margin-bottom: 0;\n  }\n}\n@media (min-width: 992px) {\n  .skillset .level-title {\n    display: inline-block;\n    float: left;\n    width: 30%;\n    margin-bottom: 0;\n  }\n  .skillset .level-bar {\n    display: inline-block;\n    width: 70%;\n    float: left;\n    position: relative;\n    top: 1px;\n  }\n}\n/* Custom CSS */\n.profile{\n  width: 100%;\n  max-width: 150px;\n  border-radius: 50%;\n}\n.list-unstyled{\n  list-style: none;\n}"

/***/ }),

/***/ "./src/app/resume/resume.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"small-12 page-heading-wrapper\">\n    <img src=\"./assets/img/header/1.jpg\" width=\"100%\">\n    <h1 class=\"page-heading\">Resume</h1>\n</div>\n\n<div class=\"wrapper container\">\n    <div class=\"sidebar-wrapper\">\n        <div class=\"profile-container\">\n            <img class=\"profile\" src=\"./assets/img/profile.jpg\" alt=\"\" />\n            <h1 class=\"name\">Leo Tse</h1>\n            <h3 class=\"tagline\">Full Stack PHP Developer & Designer</h3>\n        </div><!--//profile-container-->\n        \n        <div class=\"contact-container container-block\">\n            <ul class=\"list-unstyled contact-list\">\n                <li class=\"email\">\n                \t<i class=\"contact-info-icon fa fa-envelope\" aria-hidden=\"true\"></i><a class=\"contact-info-name\" href=\"mailto: leotse89@gmail.com\">leotse89@gmail.com</a>\n                </li>\n                <li class=\"phone\">\n                \t<i class=\"contact-info-icon fa fa-phone\" aria-hidden=\"true\"></i><a class=\"contact-info-name\" href=\"tel:7783169947\">778-316-9947</a>\n                </li>\n                <li class=\"website\">\n                \t<i class=\"contact-info-icon fa fa-globe\" aria-hidden=\"true\"></i><a class=\"contact-info-name\" href=\"./\" target=\"_blank\">leot.info</a>\n                </li>\n                <li class=\"linkedin\">\n                \t<i class=\"contact-info-icon fa fa-linkedin\" aria-hidden=\"true\"></i><a class=\"contact-info-name\" href=\"//www.linkedin.com/in/leo-tse-7273a733/\" target=\"_blank\">LinkedIn</a>\n                </li>\n                <li class=\"github\">\n                \t<i class=\"contact-info-icon fa fa-github\" aria-hidden=\"true\"></i><a class=\"contact-info-name\" href=\"//github.com/leotse89\" target=\"_blank\">Github</a>\n                </li>\n            </ul>\n        </div><!--//contact-container-->\n\n        <div class=\"interests-container container-block\">\n            <h2 class=\"container-block-title\">Interpersonal Skills</h2>\n            <ul class=\"list-unstyled interests-list\">\n                <li>Ability to work effectively and effeciently in a team / by myself</li>\n                <li>Easy-going and funny individual</li>\n                <li>Fast and easy to teach or learn</li>\n                <li>Great problem solving skills</li>\n                <li>Keen eyes on details</li>\n            </ul>\n        </div><!--//interpersonal skills-->\n\n        <div class=\"education-container container-block\">\n            <h2 class=\"container-block-title\">Education</h2>\n            <div class=\"item\">\n                <h4 class=\"degree\">Diploma of Technology</h4>\n                <h5 class=\"meta\">British Columbia Institute of Technology</h5>\n                <div class=\"time\">2011 - 2014</div>\n            </div><!--//item-->\n        </div><!--//education-container-->\n        \n        <div class=\"languages-container container-block\">\n            <h2 class=\"container-block-title\">Languages</h2>\n            <ul class=\"list-unstyled interests-list\">\n                <li>English <span class=\"lang-desc\">(Fluent)</span></li>\n                <li>Cantonese <span class=\"lang-desc\">(Native)</span></li>\n                <li>Mandarin <span class=\"lang-desc\">(Fluent)</span></li>\n            </ul>\n        </div><!--//interests-->\n        \n        <div class=\"interests-container container-block\">\n            <h2 class=\"container-block-title\">Interests</h2>\n            <ul class=\"list-unstyled interests-list\">\n            \t<li>Japanese Animes & Manga</li>\n            \t<li>Game of Thrones</li>\n            \t<li>Food Adventure</li>\n                <li>Video Gaming</li>\n                <li>Basketball</li>\n                <li>Technology</li>\n                <li>Music</li>\n            </ul>\n        </div><!--//interests-->\n        \n    </div><!--//sidebar-wrapper-->\n\n    <div class=\"main-wrapper\">\n        \n        <section class=\"section summary-section\">\n            <h2 class=\"section-title\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i>Summary</h2>\n            <div class=\"summary\">\n                <p>I am a passionate and self-motivated Full-Stack PHP Web Developer & Designer with more than 1 year and a half of work experience in the web industry. I aim to stay sharp in my technology career while providing my skills for a company’s needs in between the real world and the digital world.</p>\n            </div><!--//summary-->\n        </section><!--//section-->\n        \n        <section class=\"section experiences-section\">\n            <h2 class=\"section-title\"><i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i>Experiences</h2>\n            \n            <div class=\"item\">\n                <div class=\"meta\">\n                    <div class=\"upper-row\">\n                        <h3 class=\"job-title\">Web Developer</h3>\n                    </div><!--//upper-row-->\n                    <div class=\"company\">Home Idol Building Supplies, Vancouver BC</div>\n                    <div class=\"time\">October 2017 - Present</div>\n                </div><!--//meta-->\n                <div class=\"details\">\n                    <ul>\n                        <li>Designed, developed, edited, and, maintained the company's Shopify e-commerce website.</li>\n                        <li>Learned about the Shopify's liquid syntax for its own way of web development.</li>\n                        <li>Migrated the company's Wordpress+ Woocommerce website to the new Shopify site.</li>\n                        <li>Tested, setup, and managed many external Shopify apps such as the iOS and Android mobile apps for the company's Shopify site.</li>\n                        <li>Made customized front-end changes on the existing theme such as the front page, product page, product collection page, and other pages on the website requested by the CEO.</li>\n                        <li>Managed the company's domains, Moneris payment gateway details.</li>\n                        <li>Worked with the marketing team for special sales events (such as coupon codes) on social media platforms such as Instagram, Facebook Page, Google Business, etc.</li>\n                        <li>Designed, created, and refined marketing graphics and product images with the marketing team occasionally.</li>\n                        <li>Researched keywords for the construction industry, and enhanced the website's SEO accordingly.</li>\n                        <li>Collected both online sales data on Shopify and website visitors' data on Google Analytics.</li>\n                        <li>Helped the marketing team with Instagram ads, Facebook ads, Craigslist ads, and Google text ads.</li>\n                        <li>Managed IT stuffs such as the internet modem/switch/router, the network printer, and the computers for both Vancouver and Richmond stores.</li>\n                        <li>Inspected, tested, and set up new till's hardware and software provided by AM/PM Service for both Vancouver and Richmond stores.</li>\n                        <li>Inspected, tested, and set up new pin pads provided by Moneris Solutions.</li>\n                        <li>Inspected, tested, and set up Wechat Pay/Ali Pay machine provided by IoT Pay.</li>\n                    </ul>\n                </div><!--//details-->\n            </div><!--//item-->\n\n            <div class=\"item\">\n                <div class=\"meta\">\n                    <div class=\"upper-row\">\n                        <h3 class=\"job-title\">Lead Web Developer & Designer</h3>\n                    </div><!--//upper-row-->\n                    <div class=\"company\">Evilnut Technology, Vancouver BC</div>\n                    <div class=\"time\">March 2016 - April 2017</div>\n                </div><!--//meta-->\n                <div class=\"details\">\n                    <ul>\n                    \t<li>Developed frontend and backend features for several LAMP (Linux, Apache, MySQL, and PHP) based \n    web applications.</li>\n    \t\t\t\t\t<li>Designed graphics and UI for several websites and PHP applications.</li>\n    \t\t\t\t\t<li>Used Wordpress and Magento 2 for some projects.</li>\n    \t\t\t\t\t<li>Worked with APIs (Paypal REST, Google Maps, Facebook, etc).</li>\n    \t\t\t\t\t<li>Maintained a web hosting server (CentOS with WHM & cPanel).</li>\n    \t\t\t\t\t<li>Migrated and backup websites and web applications to the hosting \n    \t\t\t\t\t    server.</li>\n    \t\t\t\t\t<li>Optimized new and existing websites for better performance.</li>\n    \t\t\t\t\t<li>Managed domains and emails for colleagues and customers.</li>\n    \t\t\t\t\t<li>Provided tech support and shared knowledge with colleagues and \n    \t\t\t\t\t    customers.</li>\n    \t\t\t\t\t<li>Collaborated with other developers and designers for some projects.</li>\n                    </ul>\n                </div><!--//details-->\n            </div><!--//item-->\n            \n            <div class=\"item\">\n                <div class=\"meta\">\n                    <div class=\"upper-row\">\n                        <h3 class=\"job-title\">IT Clerk</h3>\n                    </div><!--//upper-row-->\n                    <div class=\"company\">Guangson Consulting, Burnaby BC</div>\n                    <div class=\"time\">December 2014 - Feburary 2015</div>\n                </div><!--//meta-->\n                <div class=\"details\">\n                    <ul>\n                    \t<li>Maintained the company Drupal 7 website.</li>\n    \t\t\t\t\t<li>Supported colleagues for daily computer issues.</li>\n    \t\t\t\t\t<li>Configured and maintained the company’s network printers.</li>\n    \t\t\t\t\t<li>Managed the company’s cPanel server and email accounts.</li>\n    \t\t\t\t\t<li>Introduced better software tools for colleagues.</li>\n                    </ul>\n                </div><!--//details-->\n            </div><!--//item-->\n            \n        </section><!--//section-->\n        \n        <section class=\"skills-section section\">\n            <h2 class=\"section-title\"><i class=\"fa fa-rocket\" aria-hidden=\"true\"></i>Skills &amp; Proficiency</h2>\n            <div class=\"skillset\">        \n                <div class=\"item\">\n                    <h3 class=\"level-title\">HTML5 &amp; CSS3</h3>\n                    <div class=\"level-bar\">\n                        <div class=\"level-bar-inner\" data-level=\"100%\">\n                        </div>                                      \n                    </div><!--//level-bar-->                                 \n                </div><!--//item-->\n                \n                <div class=\"item\">\n                    <h3 class=\"level-title\">Javascript &amp; jQuery</h3>\n                    <div class=\"level-bar\">\n                        <div class=\"level-bar-inner\" data-level=\"95%\">\n                        </div>                                      \n                    </div><!--//level-bar-->                                 \n                </div><!--//item-->\n                \n                <div class=\"item\">\n                    <h3 class=\"level-title\">PHP</h3>\n                    <div class=\"level-bar\">\n                        <div class=\"level-bar-inner\" data-level=\"100%\">\n                        </div>                                      \n                    </div><!--//level-bar-->                                 \n                </div><!--//item-->\n                \n                <div class=\"item\">\n                    <h3 class=\"level-title\">Laravel 5</h3>\n                    <div class=\"level-bar\">\n                        <div class=\"level-bar-inner\" data-level=\"100%\">\n                        </div>                                      \n                    </div><!--//level-bar-->                                 \n                </div><!--//item-->\n\n                <div class=\"item\">\n                    <h3 class=\"level-title\">Boostrap 3</h3>\n                    <div class=\"level-bar\">\n                        <div class=\"level-bar-inner\" data-level=\"100%\">\n                        </div>                                      \n                    </div><!--//level-bar-->                                 \n                </div><!--//item-->\n\n                <div class=\"item\">\n                    <h3 class=\"level-title\">Wordpress</h3>\n                    <div class=\"level-bar\">\n                        <div class=\"level-bar-inner\" data-level=\"100%\">\n                        </div>                                      \n                    </div><!--//level-bar-->                                 \n                </div><!--//item-->\n\n                <div class=\"item\">\n                    <h3 class=\"level-title\">Sass &amp; Less</h3>\n                    <div class=\"level-bar\">\n                        <div class=\"level-bar-inner\" data-level=\"90%\">\n                        </div>                                      \n                    </div><!--//level-bar-->                                 \n                </div><!--//item-->\n\n                <div class=\"item\">\n                    <h3 class=\"level-title\">Magento 2</h3>\n                    <div class=\"level-bar\">\n                        <div class=\"level-bar-inner\" data-level=\"80%\">\n                        </div>                                      \n                    </div><!--//level-bar-->                                 \n                </div><!--//item-->\n                \n                <div class=\"item\">\n                    <h3 class=\"level-title\">Sketch, Illustrator &amp; Photoshop</h3>\n                    <div class=\"level-bar\">\n                        <div class=\"level-bar-inner\" data-level=\"95%\">\n                        </div>                                      \n                    </div><!--//level-bar-->                                 \n                </div><!--//item-->\n\n                <div class=\"item\">\n                    <h3 class=\"level-title\">Git (Github/Bitbucket)</h3>\n                    <div class=\"level-bar\">\n                        <div class=\"level-bar-inner\" data-level=\"95%\">\n                        </div>                                      \n                    </div><!--//level-bar-->                                 \n                </div><!--//item-->\n\n                <div class=\"item\">\n                    <h3 class=\"level-title\">Domain &amp; Email Management</h3>\n                    <div class=\"level-bar\">\n                        <div class=\"level-bar-inner\" data-level=\"100%\">\n                        </div>                                      \n                    </div><!--//level-bar-->                                 \n                </div><!--//item-->\n\n                <div class=\"item\">\n                    <h3 class=\"level-title\">WHM &amp; cPanel</h3>\n                    <div class=\"level-bar\">\n                        <div class=\"level-bar-inner\" data-level=\"90%\">\n                        </div>                                      \n                    </div><!--//level-bar-->                                 \n                </div><!--//item-->\n\n                <div class=\"item\">\n                    <h3 class=\"level-title\">Linux CentOS 7</h3>\n                    <div class=\"level-bar\">\n                        <div class=\"level-bar-inner\" data-level=\"80%\">\n                        </div>                                      \n                    </div><!--//level-bar-->                                 \n                </div><!--//item-->\n\n                <div class=\"item\">\n                    <h3 class=\"level-title\">Windows Server</h3>\n                    <div class=\"level-bar\">\n                        <div class=\"level-bar-inner\" data-level=\"60%\">\n                        </div>                                      \n                    </div><!--//level-bar-->                                 \n                </div><!--//item-->\n\n                <div class=\"item\">\n                    <h3 class=\"level-title\">Shopify</h3>\n                    <div class=\"level-bar\">\n                        <div class=\"level-bar-inner\" data-level=\"80%\">\n                        </div>                                      \n                    </div><!--//level-bar-->                                 \n                </div><!--//item-->\n\n                <div class=\"item\">\n                    <h3 class=\"level-title\">Angular 2</h3>\n                    <div class=\"level-bar\">\n                        <div class=\"level-bar-inner\" data-level=\"50%\">\n                        </div>                                      \n                    </div><!--//level-bar-->                                 \n                </div><!--//item-->\n                \n            </div>  \n        </section><!--//skills-section-->\n        \n    </div><!--//main-body-->\n</div>"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResumeComponent = /** @class */ (function () {
    function ResumeComponent(el, router, title) {
        this.el = el;
        router.events.subscribe(function (url) {
            title.setTitle('Leo Tse\'s Portfolio - Resume');
        });
    }
    ResumeComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery___default()('.level-bar-inner').each(function () {
            var itemWidth = __WEBPACK_IMPORTED_MODULE_3_jquery___default()(this).data('level');
            __WEBPACK_IMPORTED_MODULE_3_jquery___default()(this).animate({
                width: itemWidth
            }, 1000);
        });
    };
    var _a, _b, _c;
    ResumeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-resume',
            template: __webpack_require__("./src/app/resume/resume.component.html"),
            styles: [__webpack_require__("./src/app/resume/resume.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object])
    ], ResumeComponent);
    return ResumeComponent;
}());

//# sourceMappingURL=resume.component.js.map

/***/ }),

/***/ "./src/app/works/works.component.css":
/***/ (function(module, exports) {

module.exports = "#filters {\n\tmargin:2% 1% 1% 1%;\n\tpadding:0;\n\tlist-style:none;\n}\n\n#filters li {\n\tfloat:left;\n}\n\n#filters li span {\n\tdisplay: block;\n\tpadding:5px 20px;\t\t\n\ttext-decoration:none;\n\tcolor:#666;\n\tcursor: pointer;\n}\n\n#filters li span.active {\n\tbackground: #000;\n\tcolor:#fff;\n}\n\n#portfoliolist .portfolio {\n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\t-o-box-sizing: border-box;\n\twidth:23%;\n\tmargin:1%;\n\tdisplay:none;\n\tfloat:left;\n\toverflow:hidden;\n}\n\n.portfolio-wrapper {\n\toverflow:hidden;\n\tposition: relative !important;\n\tbackground: #666;\n\tcursor:pointer;\n}\n\n.portfolio img {\n\tmax-width:100%;\n\tposition: relative;\n\ttop:0;\n-webkit-transition: all 600ms cubic-bezier(0.645, 0.045, 0.355, 1);\ntransition:         all 600ms cubic-bezier(0.645, 0.045, 0.355, 1);\t\t\n}\n\n.portfolio .label {\n\tposition: absolute;\n\twidth: 100%;\n\theight:40px;\n\tbottom:-40px;\n-webkit-transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\ntransition:         all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n\n.portfolio .label-bg {\n\tbackground: #000;\n\twidth: 100%;\n\theight:100%;\n\tposition: absolute;\n\ttop:0;\n\tleft:0;\n}\n\n.portfolio .label-text {\n\tcolor:#fff;\n\tposition: relative;\n\tz-index:500;\n\tpadding:5px 8px;\n}\n\n.portfolio .text-category {\n\tdisplay:block;\n\tfont-size:9px;\n}\n\n.portfolio:hover .label {\n    bottom:0;\n}\n\n.portfolio:hover img {\n    top:-30px;\n}\n\n@media only screen and (max-width: 991px) {\n\t#portfoliolist .portfolio {\n\t\twidth:48%;\n\t\tmargin:1%;\n\t}\n}"

/***/ }),

/***/ "./src/app/works/works.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"small-12 page-heading-wrapper\">\n\t<img src=\"./assets/img/header/4.jpg\" width=\"100%\">\n\t<h1 class=\"page-heading\">Works</h1>\n</div>\n\n<div class=\"container\">\n\t<ul id=\"filters\" class=\"clearfix\">\n\t\t<li><span class=\"filter active\" data-filter=\".website, .webapp, .design\">All</span></li>\n\t\t<li><span class=\"filter\" data-filter=\".website\">Web Site</span></li>\n\t\t<li><span class=\"filter\" data-filter=\".webapp\">Web App</span></li>\n\t\t<li><span class=\"filter\" data-filter=\".design\">Design</span></li>\n\t</ul>\n\n\t<div id=\"portfoliolist\">\n\n\t\t<div *ngFor=\"let work of works\" class=\"portfolio {{work.type}}\">\n\t\t\t<div class=\"portfolio-wrapper\">\t\t\t\t\n\t\t\t\t<img src=\"./assets/img/works/{{work.id}}/cover.jpg\" alt=\"{{work.name}}\" />\n\t\t\t\t<div class=\"label\">\n\t\t\t\t\t<div class=\"label-text\">\n\t\t\t\t\t\t<a class=\"text-title\" target=\"_blank\" href=\"{{work.site}}\" rel=\"nofollow\">{{work.name}}</a>\n\t\t\t\t\t\t<span class=\"text-category\">{{work.shortDesc}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"label-bg\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\t\n\n\t</div>\n\n</div>"

/***/ }),

/***/ "./src/app/works/works.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorksComponent = /** @class */ (function () {
    function WorksComponent(el, router, title) {
        this.el = el;
        this.works = [
            { "id": 1, "shortDesc": "Foundation 5", "type": "website", "name": "eGiant Media", "site": "//egiantmedia.com/" },
            { "id": 2, "shortDesc": "Foundation 5, Logo Design, Business Card", "type": "website webapp design", "name": "Global Fortune Group", "site": "//globalfortunegroup.com/" },
            { "id": 3, "shortDesc": "Wordpress, Web Design", "type": "website design", "name": "Evilnut Creative Technology", "site": "//www.evilnut.ca/" },
            { "id": 4, "shortDesc": "Wordpress", "type": "website", "name": "IO Academy", "site": "//www.ioeducate.com/" },
            { "id": 5, "shortDesc": "Laravel 5, Bootstrap 3", "type": "website webapp", "name": "Ticket Canada", "site": "https://ticketcanada.ca/" },
            { "id": 6, "shortDesc": "Laravel 5, Bootstrap 3", "type": "webapp", "name": "Papa Bus", "site": "https://papabus.ca/" },
            { "id": 7, "shortDesc": "Shopify, Web Design, E-commerce, SEO", "type": "website design", "name": "Home Idol Building Supply", "site": "//homeidol.com" },
            { "id": 8, "shortDesc": "Laravel 5, Bootstrap 3", "type": "website webapp", "name": "Chii Food", "site": "https://www.chiifood.com/" },
            { "id": 9, "shortDesc": "Logo Design", "type": "design", "name": "Moo\'s Art Studio", "site": "//moosartstudio.com/" },
            { "id": 10, "shortDesc": "Wordpress", "type": "website", "name": "JC.MM Consulting", "site": "//www.jccanada.com/" },
            { "id": 11, "shortDesc": "Wordpress, Logo Design", "type": "website design", "name": "GW2 Renovation", "site": "//gw2renovation.com/" },
            { "id": 12, "shortDesc": "Laravel 5, Icon Design", "type": "website webapp design", "name": "Vancouver Coastal Health", "site": "//learndev.vch.ca/vch/public/hurt-or-sick-at-work" },
        ];
        router.events.subscribe(function (url) {
            title.setTitle('Leo Tse\'s Portfolio - Works');
        });
    }
    WorksComponent.prototype.ngOnInit = function () {
    };
    var _a, _b, _c;
    WorksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-works',
            template: __webpack_require__("./src/app/works/works.component.html"),
            styles: [__webpack_require__("./src/app/works/works.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object])
    ], WorksComponent);
    return WorksComponent;
}());

//# sourceMappingURL=works.component.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");



if (!/localhost/.test(document.location.host)) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map