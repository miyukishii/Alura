"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginScreen; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n// Cookies, Local Storage e Session Storage nada mais são do que métodos utilizados, via linguagem de programação, para armazenar informações no navegador do visitante do site.\nfunction LoginScreen() {\n    _s();\n    const [senha, setSenha] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (senha) {\n            nookies__WEBPACK_IMPORTED_MODULE_4___default().set(null, \"SENHA_SECRETA\", \"senha\", {\n                maxAge: 30 * 24 * 60 * 60,\n                path: \"/login\"\n            });\n            router.push(\"/area-logada\");\n        } else {\n            alert(\"Informe uma senha!\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        styleSheet: {\n            border: \"1px solid #F9703E\",\n            marginTop: \"20%\",\n            flexDirection: \"column\",\n            maxWidth: {\n                xs: \"100%\",\n                sm: \"400px\"\n            },\n            marginHorizontal: {\n                xs: \"16px\",\n                sm: \"auto\"\n            },\n            padding: \"32px\",\n            borderRadius: \"4px\",\n            boxShadow: \"1px 1px 5px 0 rgba(255,69,0,0.2)\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    styleSheet: {\n                        flexDirection: \"column\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n                        label: \"Qual \\xe9 a senha secreta?\",\n                        value: senha,\n                        onChange: (e)=>setSenha(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/miyuki/Alura/Alura/Next/parte2/pages/login.js\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/miyuki/Alura/Alura/Next/parte2/pages/login.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    type: \"submit\",\n                    label: \"Acessar\"\n                }, void 0, false, {\n                    fileName: \"/home/miyuki/Alura/Alura/Next/parte2/pages/login.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/miyuki/Alura/Alura/Next/parte2/pages/login.js\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/miyuki/Alura/Alura/Next/parte2/pages/login.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n} // Utilizamos o Nookies, que salva informação no cookie, ideal ser token, para o servidor ter acesso.\n_s(LoginScreen, \"oPtD04oc1aYw0y9jpQjwW+DFwOI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = LoginScreen;\nvar _c;\n$RefreshReg$(_c, \"LoginScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYztBQUNzQjtBQUNoQztBQUM5QixnTEFBZ0w7QUFDakssU0FBU00sY0FBYzs7SUFDcEMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdSLHFEQUFjLENBQUM7SUFDekMsTUFBTVUsU0FBU1Qsc0RBQVNBO0lBRXhCLE1BQU1VLGVBQWUsQ0FBQ0MsSUFBTTtRQUMxQkEsRUFBRUMsY0FBYztRQUNoQixJQUFJTixPQUFPO1lBQ1RGLGtEQUFXLENBQUMsSUFBSSxFQUFDLGlCQUFpQixTQUFTO2dCQUN6Q1UsUUFBUSxLQUFLLEtBQUssS0FBSztnQkFDdkJDLE1BQU07WUFDUjtZQUNBTixPQUFPTyxJQUFJLENBQUM7UUFDZCxPQUFPO1lBQ0xDLE1BQU07UUFDUixDQUFDO0lBQ0g7SUFFQSxxQkFDRSw4REFBQ2hCLHFEQUFHQTtRQUNGaUIsWUFBWTtZQUNWQyxRQUFRO1lBQ1JDLFdBQVc7WUFDWEMsZUFBZTtZQUNmQyxVQUFVO2dCQUFDQyxJQUFJO2dCQUFRQyxJQUFJO1lBQU87WUFDbENDLGtCQUFrQjtnQkFBQ0YsSUFBSTtnQkFBUUMsSUFBSTtZQUFNO1lBQ3pDRSxTQUFTO1lBQ1RDLGNBQWM7WUFDZEMsV0FBVztRQUNiO2tCQUVBLDRFQUFDQztZQUFLQyxVQUFXcEI7OzhCQUVmLDhEQUFDVCxxREFBR0E7b0JBQ0ZpQixZQUFZO3dCQUFFRyxlQUFlO29CQUFTOzhCQUV0Qyw0RUFBQ25CLDJEQUFTQTt3QkFDUjZCLE9BQU07d0JBQ05DLE9BQU8xQjt3QkFDUDJCLFVBQVUsQ0FBQ3RCLElBQU1KLFNBQVNJLEVBQUV1QixNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7OzhCQUk1Qyw4REFBQzdCLHdEQUFNQTtvQkFDTGdDLE1BQUs7b0JBQ0xKLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hCLENBQUMsQ0FFRCxxR0FBcUc7R0FuRDdFMUI7O1FBRVBMLGtEQUFTQTs7O0tBRkZLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZ2luLmpzPzgxYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IEJveCwgVGV4dEZpZWxkLCBCdXR0b24gfSBmcm9tICdAc2t5bmV4dWkvY29tcG9uZW50cyc7XG5pbXBvcnQgbm9va2llcyBmcm9tICdub29raWVzJztcbi8vIENvb2tpZXMsIExvY2FsIFN0b3JhZ2UgZSBTZXNzaW9uIFN0b3JhZ2UgbmFkYSBtYWlzIHPDo28gZG8gcXVlIG3DqXRvZG9zIHV0aWxpemFkb3MsIHZpYSBsaW5ndWFnZW0gZGUgcHJvZ3JhbWHDp8OjbywgcGFyYSBhcm1hemVuYXIgaW5mb3JtYcOnw7VlcyBubyBuYXZlZ2Fkb3IgZG8gdmlzaXRhbnRlIGRvIHNpdGUuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpblNjcmVlbigpIHtcbiAgY29uc3QgW3NlbmhhLCBzZXRTZW5oYV0gPSByZWFjdC51c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChzZW5oYSkge1xuICAgICAgbm9va2llcy5zZXQobnVsbCwnU0VOSEFfU0VDUkVUQScsICdzZW5oYScsIHtcbiAgICAgICAgbWF4QWdlOiAzMCAqIDI0ICogNjAgKiA2MCxcbiAgICAgICAgcGF0aDogJy9sb2dpbicsXG4gICAgICB9KTtcbiAgICAgIHJvdXRlci5wdXNoKCcvYXJlYS1sb2dhZGEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoJ0luZm9ybWUgdW1hIHNlbmhhIScpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybihcbiAgICA8Qm94XG4gICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjRjk3MDNFJyxcbiAgICAgICAgbWFyZ2luVG9wOiAnMjAlJyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIG1heFdpZHRoOiB7eHM6ICcxMDAlJywgc206ICc0MDBweCd9LFxuICAgICAgICBtYXJnaW5Ib3Jpem9udGFsOiB7eHM6ICcxNnB4Jywgc206ICdhdXRvJ30sXG4gICAgICAgIHBhZGRpbmc6ICczMnB4JyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICAgICAgYm94U2hhZG93OiAnMXB4IDFweCA1cHggMCByZ2JhKDI1NSw2OSwwLDAuMiknLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17IGhhbmRsZVN1Ym1pdCB9PlxuXG4gICAgICAgIDxCb3hcbiAgICAgICAgICBzdHlsZVNoZWV0PXt7IGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19XG4gICAgICAgID5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBsYWJlbD1cIlF1YWwgw6kgYSBzZW5oYSBzZWNyZXRhP1wiXG4gICAgICAgICAgICB2YWx1ZT17c2VuaGF9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlbmhhKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgbGFiZWw9J0FjZXNzYXInIFxuICAgICAgICAvPlxuICAgICAgPC9mb3JtPlxuICAgIDwvQm94PlxuICApXG59XG5cbi8vIFV0aWxpemFtb3MgbyBOb29raWVzLCBxdWUgc2FsdmEgaW5mb3JtYcOnw6NvIG5vIGNvb2tpZSwgaWRlYWwgc2VyIHRva2VuLCBwYXJhIG8gc2Vydmlkb3IgdGVyIGFjZXNzby5cbiJdLCJuYW1lcyI6WyJyZWFjdCIsInVzZVJvdXRlciIsIkJveCIsIlRleHRGaWVsZCIsIkJ1dHRvbiIsIm5vb2tpZXMiLCJMb2dpblNjcmVlbiIsInNlbmhhIiwic2V0U2VuaGEiLCJ1c2VTdGF0ZSIsInJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldCIsIm1heEFnZSIsInBhdGgiLCJwdXNoIiwiYWxlcnQiLCJzdHlsZVNoZWV0IiwiYm9yZGVyIiwibWFyZ2luVG9wIiwiZmxleERpcmVjdGlvbiIsIm1heFdpZHRoIiwieHMiLCJzbSIsIm1hcmdpbkhvcml6b250YWwiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n"));

/***/ })

});