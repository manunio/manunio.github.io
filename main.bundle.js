webpackJsonp([1,4],{

/***/ 342:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 342;


/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(452);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/manu/todo-app/src/main.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_data_service__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo__ = __webpack_require__(454);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(todoDataService) {
        this.todoDataService = todoDataService;
        //title = 'app works!';
        //..
        this.newTodo = new __WEBPACK_IMPORTED_MODULE_2__todo__["a" /* Todo */]();
    }
    AppComponent.prototype.addTodo = function () {
        this.todoDataService.addTodo(this.newTodo);
        this.newTodo = new __WEBPACK_IMPORTED_MODULE_2__todo__["a" /* Todo */]();
    };
    AppComponent.prototype.toggleTodoComplete = function (todo) {
        this.todoDataService.toggleTodoComplete(todo);
    };
    AppComponent.prototype.removeTodo = function (todo) {
        this.todoDataService.deleteTodoById(todo.id);
    };
    Object.defineProperty(AppComponent.prototype, "todos", {
        get: function () {
            return this.todoDataService.getAllTodos();
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(610),
            styles: [__webpack_require__(609)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__todo_data_service__["a" /* TodoDataService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__todo_data_service__["a" /* TodoDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__todo_data_service__["a" /* TodoDataService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/manu/todo-app/src/app.component.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(451);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/manu/todo-app/src/app.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoDataService = (function () {
    function TodoDataService() {
        this.lastId = 0;
        this.todos = [];
    }
    //simulate POST /todos
    TodoDataService.prototype.addTodo = function (todo) {
        if (!todo.id) {
            todo.id = ++this.lastId;
        }
        this.todos.push(todo);
        return this;
    };
    //simulate DELETE /todos/:id
    TodoDataService.prototype.deleteTodoById = function (id) {
        this.todos = this.todos
            .filter(function (todo) { return todo.id !== id; });
        return this;
    };
    //Simulate PUT /todos/:id
    TodoDataService.prototype.updateTodoById = function (id, values) {
        if (values === void 0) { values = {}; }
        var todo = this.getTodoById(id);
        if (!todo) {
            return null;
        }
        Object.assign(todo, values);
        return todo;
    };
    //Simulate GET /todos
    TodoDataService.prototype.getAllTodos = function () {
        return this.todos;
    };
    //Simulate GET /todos/:id
    TodoDataService.prototype.getTodoById = function (id) {
        return this.todos
            .filter(function (todo) { return todo.id === id; })
            .pop();
    };
    //Toggle todo complete
    TodoDataService.prototype.toggleTodoComplete = function (todo) {
        var updatedTodo = this.updateTodoById(todo.id, {
            complete: !todo.complete
        });
        return updatedTodo;
    };
    TodoDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], TodoDataService);
    return TodoDataService;
}());
//# sourceMappingURL=C:/Users/manu/todo-app/src/todo-data.service.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var Todo = (function () {
    function Todo(values) {
        if (values === void 0) { values = {}; }
        this.title = '';
        this.complete = false;
        Object.assign(this, values);
    }
    return Todo;
}());
//# sourceMappingURL=C:/Users/manu/todo-app/src/todo.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/manu/todo-app/src/environment.js.map

/***/ }),

/***/ 609:
/***/ (function(module, exports) {

module.exports = "html,\r\nbody {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\nbutton {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tbackground: none;\r\n\tfont-size: 100%;\r\n\tvertical-align: baseline;\r\n\tfont-family: inherit;\r\n\tfont-weight: inherit;\r\n\tcolor: inherit;\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\t     appearance: none;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nbody {\r\n\tfont: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n\tline-height: 1.4em;\r\n\tbackground: #f5f5f5;\r\n\tcolor: #4d4d4d;\r\n\tmin-width: 230px;\r\n\tmax-width: 550px;\r\n\tmargin: 0 auto;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n\tfont-weight: 300;\r\n}\r\n\r\n:focus {\r\n\toutline: 0;\r\n}\r\n\r\n.hidden {\r\n\tdisplay: none;\r\n}\r\n\r\n.todoapp {\r\n\tbackground: #fff;\r\n\tmargin: 130px 0 40px 0;\r\n\tposition: relative;\r\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\r\n\t            0 25px 50px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.todoapp input::-webkit-input-placeholder {\r\n\tfont-style: italic;\r\n\tfont-weight: 300;\r\n\tcolor: #e6e6e6;\r\n}\r\n\r\n.todoapp input::-moz-placeholder {\r\n\tfont-style: italic;\r\n\tfont-weight: 300;\r\n\tcolor: #e6e6e6;\r\n}\r\n\r\n.todoapp input::input-placeholder {\r\n\tfont-style: italic;\r\n\tfont-weight: 300;\r\n\tcolor: #e6e6e6;\r\n}\r\n\r\n.todoapp h1 {\r\n\tposition: absolute;\r\n\ttop: -155px;\r\n\twidth: 100%;\r\n\tfont-size: 100px;\r\n\tfont-weight: 100;\r\n\ttext-align: center;\r\n\tcolor: rgba(175, 47, 47, 0.15);\r\n\t-webkit-text-rendering: optimizeLegibility;\r\n\t-moz-text-rendering: optimizeLegibility;\r\n\ttext-rendering: optimizeLegibility;\r\n}\r\n\r\n.new-todo,\r\n.edit {\r\n\tposition: relative;\r\n\tmargin: 0;\r\n\twidth: 100%;\r\n\tfont-size: 24px;\r\n\tfont-family: inherit;\r\n\tfont-weight: inherit;\r\n\tline-height: 1.4em;\r\n\tborder: 0;\r\n\tcolor: inherit;\r\n\tpadding: 6px;\r\n\tborder: 1px solid #999;\r\n\tbox-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\r\n\tbox-sizing: border-box;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.new-todo {\r\n\tpadding: 16px 16px 16px 60px;\r\n\tborder: none;\r\n\tbackground: rgba(0, 0, 0, 0.003);\r\n\tbox-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\r\n}\r\n\r\n.main {\r\n\tposition: relative;\r\n\tz-index: 2;\r\n\tborder-top: 1px solid #e6e6e6;\r\n}\r\n\r\nlabel[for='toggle-all'] {\r\n\tdisplay: none;\r\n}\r\n\r\n.toggle-all {\r\n\tposition: absolute;\r\n\ttop: -55px;\r\n\tleft: -12px;\r\n\twidth: 60px;\r\n\theight: 34px;\r\n\ttext-align: center;\r\n\tborder: none; /* Mobile Safari */\r\n}\r\n\r\n.toggle-all:before {\r\n\tcontent: 'â¯';\r\n\tfont-size: 22px;\r\n\tcolor: #e6e6e6;\r\n\tpadding: 10px 27px 10px 27px;\r\n}\r\n\r\n.toggle-all:checked:before {\r\n\tcolor: #737373;\r\n}\r\n\r\n.todo-list {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tlist-style: none;\r\n}\r\n\r\n.todo-list li {\r\n\tposition: relative;\r\n\tfont-size: 24px;\r\n\tborder-bottom: 1px solid #ededed;\r\n}\r\n\r\n.todo-list li:last-child {\r\n\tborder-bottom: none;\r\n}\r\n\r\n.todo-list li.editing {\r\n\tborder-bottom: none;\r\n\tpadding: 0;\r\n}\r\n\r\n.todo-list li.editing .edit {\r\n\tdisplay: block;\r\n\twidth: 506px;\r\n\tpadding: 12px 16px;\r\n\tmargin: 0 0 0 43px;\r\n}\r\n\r\n.todo-list li.editing .view {\r\n\tdisplay: none;\r\n}\r\n\r\n.todo-list li .toggle {\r\n\ttext-align: center;\r\n\twidth: 40px;\r\n\t/* auto, since non-WebKit browsers doesn't support input styling */\r\n\theight: auto;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tmargin: auto 0;\r\n\tborder: none; /* Mobile Safari */\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\t     appearance: none;\r\n}\r\n\r\n.todo-list li .toggle:after {\r\n\tcontent: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\r\n}\r\n\r\n.todo-list li .toggle:checked:after {\r\n\tcontent: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\r\n}\r\n\r\n.todo-list li label {\r\n\tword-break: break-all;\r\n\tpadding: 15px 60px 15px 15px;\r\n\tmargin-left: 45px;\r\n\tdisplay: block;\r\n\tline-height: 1.2;\r\n\ttransition: color 0.4s;\r\n}\r\n\r\n.todo-list li.completed label {\r\n\tcolor: #d9d9d9;\r\n\ttext-decoration: line-through;\r\n}\r\n\r\n.todo-list li .destroy {\r\n\tdisplay: none;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 10px;\r\n\tbottom: 0;\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\tmargin: auto 0;\r\n\tfont-size: 30px;\r\n\tcolor: #cc9a9a;\r\n\tmargin-bottom: 11px;\r\n\ttransition: color 0.2s ease-out;\r\n}\r\n\r\n.todo-list li .destroy:hover {\r\n\tcolor: #af5b5e;\r\n}\r\n\r\n.todo-list li .destroy:after {\r\n\tcontent: 'Ã—';\r\n}\r\n\r\n.todo-list li:hover .destroy {\r\n\tdisplay: block;\r\n}\r\n\r\n.todo-list li .edit {\r\n\tdisplay: none;\r\n}\r\n\r\n.todo-list li.editing:last-child {\r\n\tmargin-bottom: -1px;\r\n}\r\n\r\n.footer {\r\n\tcolor: #777;\r\n\tpadding: 10px 15px;\r\n\theight: 20px;\r\n\ttext-align: center;\r\n\tborder-top: 1px solid #e6e6e6;\r\n}\r\n\r\n.footer:before {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\theight: 50px;\r\n\toverflow: hidden;\r\n\tbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\r\n\t            0 8px 0 -3px #f6f6f6,\r\n\t            0 9px 1px -3px rgba(0, 0, 0, 0.2),\r\n\t            0 16px 0 -6px #f6f6f6,\r\n\t            0 17px 2px -6px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.todo-count {\r\n\tfloat: left;\r\n\ttext-align: left;\r\n}\r\n\r\n.todo-count strong {\r\n\tfont-weight: 300;\r\n}\r\n\r\n.filters {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tlist-style: none;\r\n\tposition: absolute;\r\n\tright: 0;\r\n\tleft: 0;\r\n}\r\n\r\n.filters li {\r\n\tdisplay: inline;\r\n}\r\n\r\n.filters li a {\r\n\tcolor: inherit;\r\n\tmargin: 3px;\r\n\tpadding: 3px 7px;\r\n\ttext-decoration: none;\r\n\tborder: 1px solid transparent;\r\n\tborder-radius: 3px;\r\n}\r\n\r\n.filters li a:hover {\r\n\tborder-color: rgba(175, 47, 47, 0.1);\r\n}\r\n\r\n.filters li a.selected {\r\n\tborder-color: rgba(175, 47, 47, 0.2);\r\n}\r\n\r\n.clear-completed,\r\nhtml .clear-completed:active {\r\n\tfloat: right;\r\n\tposition: relative;\r\n\tline-height: 20px;\r\n\ttext-decoration: none;\r\n\tcursor: pointer;\r\n}\r\n\r\n.clear-completed:hover {\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.info {\r\n\tmargin: 65px auto 0;\r\n\tcolor: #bfbfbf;\r\n\tfont-size: 10px;\r\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\r\n\ttext-align: center;\r\n}\r\n\r\n.info p {\r\n\tline-height: 1;\r\n}\r\n\r\n.info a {\r\n\tcolor: inherit;\r\n\ttext-decoration: none;\r\n\tfont-weight: 400;\r\n}\r\n\r\n.info a:hover {\r\n\ttext-decoration: underline;\r\n}\r\n\r\n/*\r\n\tHack to remove background from Mobile Safari.\r\n\tCan't use it globally since it destroys checkboxes in Firefox\r\n*/\r\n@media screen and (-webkit-min-device-pixel-ratio:0) {\r\n\t.toggle-all,\r\n\t.todo-list li .toggle {\r\n\t\tbackground: none;\r\n\t}\r\n\r\n\t.todo-list li .toggle {\r\n\t\theight: 40px;\r\n\t}\r\n\r\n\t.toggle-all {\r\n\t\t-webkit-transform: rotate(90deg);\r\n\t\ttransform: rotate(90deg);\r\n\t\t-webkit-appearance: none;\r\n\t\t-moz-appearance: none;\r\n\t\t     appearance: none;\r\n\t}\r\n}\r\n\r\n@media (max-width: 430px) {\r\n\t.footer {\r\n\t\theight: 50px;\r\n\t}\r\n\r\n\t.filters {\r\n\t\tbottom: 10px;\r\n\t}\r\n}"

/***/ }),

/***/ 610:
/***/ (function(module, exports) {

module.exports = "<section class=\"todoapp\">\n  <header class=\"header\">\n    <h1>Todos</h1>\n    <input class=\"new-todo\" placeholder=\"What needs to be done?\" autofocus=\"\" [(ngModel)]=\"newTodo.title\" (keyup.enter)=\"addTodo()\">\n  </header>\n  <section class=\"main\" *ngIf=\"todos.length > 0\">\n    <ul class=\"todo-list\">\n      <li *ngFor=\"let todo of todos\" [class.completed]=\"todo.complete\">\n        <div class=\"view\">\n          <input class=\"toggle\" type=\"checkbox\" (click)=\"toggleTodoComplete(todo)\" [checked]=\"todo.complete\">\n          <label>{{todo.title}}</label>\n          <button class=\"destroy\" (click)=\"removeTodo(todo)\"></button>\n        </div>\n      </li>\n    </ul>\n  </section>\n  <footer class=\"footer\" *ngIf=\"todos.length > 0\">\n    <span class=\"todo-count\"><strong>{{todos.length}}</strong> {{todos.length == 1 ? 'item' : 'items'}} left</span>\n  </footer>\n</section>"

/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(343);


/***/ })

},[623]);
//# sourceMappingURL=main.bundle.map