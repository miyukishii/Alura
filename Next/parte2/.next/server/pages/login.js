"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoginScreen)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @skynexui/components */ \"@skynexui/components\");\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n// Cookies, Local Storage e Session Storage nada mais são do que métodos utilizados, via linguagem de programação, para armazenar informações no navegador do visitante do site.\nfunction LoginScreen() {\n    const [senha, setSenha] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (senha) {\n            nookies__WEBPACK_IMPORTED_MODULE_4___default().set(null, \"SENHA_SECRETA\", senha, {\n                maxAge: 30 * 24 * 60 * 60,\n                path: \"/\"\n            });\n            router.push(\"/area-logada\");\n        } else {\n            alert(\"Informe uma senha!\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        styleSheet: {\n            border: \"1px solid #F9703E\",\n            marginTop: \"20%\",\n            flexDirection: \"column\",\n            maxWidth: {\n                xs: \"100%\",\n                sm: \"400px\"\n            },\n            marginHorizontal: {\n                xs: \"16px\",\n                sm: \"auto\"\n            },\n            padding: \"32px\",\n            borderRadius: \"4px\",\n            boxShadow: \"1px 1px 5px 0 rgba(255,69,0,0.2)\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    styleSheet: {\n                        flexDirection: \"column\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n                        label: \"Qual \\xe9 a senha secreta?\",\n                        value: senha,\n                        onChange: (e)=>setSenha(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/miyuki/Alura/Alura/Next/parte2/pages/login.js\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/miyuki/Alura/Alura/Next/parte2/pages/login.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    type: \"submit\",\n                    label: \"Acessar\"\n                }, void 0, false, {\n                    fileName: \"/home/miyuki/Alura/Alura/Next/parte2/pages/login.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/miyuki/Alura/Alura/Next/parte2/pages/login.js\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/miyuki/Alura/Alura/Next/parte2/pages/login.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n} // Utilizamos o Nookies, que salva informação no cookie, ideal ser token, para o servidor ter acesso.\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYztBQUNzQjtBQUNoQztBQUM5QixnTEFBZ0w7QUFDakssU0FBU00sY0FBYztJQUNwQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1IscURBQWMsQ0FBQztJQUN6QyxNQUFNVSxTQUFTVCxzREFBU0E7SUFFeEIsTUFBTVUsZUFBZSxDQUFDQyxJQUFNO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2QsSUFBR04sT0FBTztZQUNSRixrREFBVyxDQUFDLElBQUksRUFBRSxpQkFBaUJFLE9BQU87Z0JBQ3hDUSxRQUFRLEtBQUssS0FBSyxLQUFLO2dCQUN2QkMsTUFBTTtZQUNSO1lBQ0FOLE9BQU9PLElBQUksQ0FBQztRQUNkLE9BQU87WUFDTEMsTUFBTTtRQUNSLENBQUM7SUFDTDtJQUVBLHFCQUNFLDhEQUFDaEIscURBQUdBO1FBQ0ZpQixZQUFZO1lBQ1ZDLFFBQVE7WUFDUkMsV0FBVztZQUNYQyxlQUFlO1lBQ2ZDLFVBQVU7Z0JBQUNDLElBQUk7Z0JBQVFDLElBQUk7WUFBTztZQUNsQ0Msa0JBQWtCO2dCQUFDRixJQUFJO2dCQUFRQyxJQUFJO1lBQU07WUFDekNFLFNBQVM7WUFDVEMsY0FBYztZQUNkQyxXQUFXO1FBQ2I7a0JBRUEsNEVBQUNDO1lBQUtDLFVBQVdwQjs7OEJBRWYsOERBQUNULHFEQUFHQTtvQkFDRmlCLFlBQVk7d0JBQUVHLGVBQWU7b0JBQVM7OEJBRXRDLDRFQUFDbkIsMkRBQVNBO3dCQUNSNkIsT0FBTTt3QkFDTkMsT0FBTzFCO3dCQUNQMkIsVUFBVSxDQUFDdEIsSUFBTUosU0FBU0ksRUFBRXVCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7OEJBSTVDLDhEQUFDN0Isd0RBQU1BO29CQUNMZ0MsTUFBSztvQkFDTEosT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEIsQ0FBQyxDQUVELHFHQUFxRyIsInNvdXJjZXMiOlsid2VicGFjazovL3BhcnRlMi8uL3BhZ2VzL2xvZ2luLmpzPzgxYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IEJveCwgVGV4dEZpZWxkLCBCdXR0b24gfSBmcm9tICdAc2t5bmV4dWkvY29tcG9uZW50cyc7XG5pbXBvcnQgbm9va2llcyBmcm9tICdub29raWVzJztcbi8vIENvb2tpZXMsIExvY2FsIFN0b3JhZ2UgZSBTZXNzaW9uIFN0b3JhZ2UgbmFkYSBtYWlzIHPDo28gZG8gcXVlIG3DqXRvZG9zIHV0aWxpemFkb3MsIHZpYSBsaW5ndWFnZW0gZGUgcHJvZ3JhbWHDp8OjbywgcGFyYSBhcm1hemVuYXIgaW5mb3JtYcOnw7VlcyBubyBuYXZlZ2Fkb3IgZG8gdmlzaXRhbnRlIGRvIHNpdGUuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpblNjcmVlbigpIHtcbiAgY29uc3QgW3NlbmhhLCBzZXRTZW5oYV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYoc2VuaGEpIHtcbiAgICAgICAgbm9va2llcy5zZXQobnVsbCwgJ1NFTkhBX1NFQ1JFVEEnLCBzZW5oYSwge1xuICAgICAgICAgIG1heEFnZTogMzAgKiAyNCAqIDYwICogNjAsXG4gICAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICB9KTtcbiAgICAgICAgcm91dGVyLnB1c2goJy9hcmVhLWxvZ2FkYScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoJ0luZm9ybWUgdW1hIHNlbmhhIScpO1xuICAgICAgfVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxCb3hcbiAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNGOTcwM0UnLFxuICAgICAgICBtYXJnaW5Ub3A6ICcyMCUnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgbWF4V2lkdGg6IHt4czogJzEwMCUnLCBzbTogJzQwMHB4J30sXG4gICAgICAgIG1hcmdpbkhvcml6b250YWw6IHt4czogJzE2cHgnLCBzbTogJ2F1dG8nfSxcbiAgICAgICAgcGFkZGluZzogJzMycHgnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgICAgICBib3hTaGFkb3c6ICcxcHggMXB4IDVweCAwIHJnYmEoMjU1LDY5LDAsMC4yKScsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXsgaGFuZGxlU3VibWl0IH0+XG5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN0eWxlU2hlZXQ9e3sgZmxleERpcmVjdGlvbjogJ2NvbHVtbicgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGxhYmVsPVwiUXVhbCDDqSBhIHNlbmhhIHNlY3JldGE/XCJcbiAgICAgICAgICAgIHZhbHVlPXtzZW5oYX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VuaGEoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICBsYWJlbD0nQWNlc3NhcicgXG4gICAgICAgIC8+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuLy8gVXRpbGl6YW1vcyBvIE5vb2tpZXMsIHF1ZSBzYWx2YSBpbmZvcm1hw6fDo28gbm8gY29va2llLCBpZGVhbCBzZXIgdG9rZW4sIHBhcmEgbyBzZXJ2aWRvciB0ZXIgYWNlc3NvLlxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUm91dGVyIiwiQm94IiwiVGV4dEZpZWxkIiwiQnV0dG9uIiwibm9va2llcyIsIkxvZ2luU2NyZWVuIiwic2VuaGEiLCJzZXRTZW5oYSIsInVzZVN0YXRlIiwicm91dGVyIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0IiwibWF4QWdlIiwicGF0aCIsInB1c2giLCJhbGVydCIsInN0eWxlU2hlZXQiLCJib3JkZXIiLCJtYXJnaW5Ub3AiLCJmbGV4RGlyZWN0aW9uIiwibWF4V2lkdGgiLCJ4cyIsInNtIiwibWFyZ2luSG9yaXpvbnRhbCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ "@skynexui/components":
/*!***************************************!*\
  !*** external "@skynexui/components" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@skynexui/components");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();