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
exports.id = "pages/area-logada";
exports.ids = ["pages/area-logada"];
exports.modules = {

/***/ "./pages/area-logada.js":
/*!******************************!*\
  !*** ./pages/area-logada.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoggedScreen),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"@skynexui/components\");\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nasync function getServerSideProps(context) {\n    const cookies = nookies__WEBPACK_IMPORTED_MODULE_3___default().get(context);\n    // Basicamente queremos saber se o usuário está autorizado.\n    const SENHA_SECRETA = \"123456\";\n    const senha_informada = cookies.SENHA_SECRETA;\n    const isAuthorized = SENHA_SECRETA === senha_informada;\n    if (!isAuthorized) {\n        console.log(\"N\\xe3o autorizado!\");\n        return {\n            redirect: {\n                permanent: false,\n                destination: \"/login?status=401\"\n            }\n        };\n    }\n    console.log(\"Autorizado!\");\n    return {\n        props: {}\n    };\n}\nfunction LoggedScreen() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            border: \"1px solid #F9703E\",\n            flexDirection: \"column\",\n            maxWidth: \"400px\",\n            marginTop: \"20%\",\n            marginHorizontal: \"auto\",\n            padding: \"32px\",\n            borderRadius: \"4px\",\n            boxShadow: \"1px 1px 5px 0 rgba(255,69,0,0.2)\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                styleSheet: {\n                    marginVertical: \"32px\"\n                },\n                children: \"Voc\\xea acessou uma \\xe1rea protegida!\"\n            }, void 0, false, {\n                fileName: \"/home/miyuki/Alura/Alura/Next/parte2/pages/area-logada.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                label: \"Logout\",\n                onClick: ()=>{\n                    nookies__WEBPACK_IMPORTED_MODULE_3___default().destroy(null, \"SENHA_SECRETA\");\n                    router.push(\"/login\");\n                },\n                colorVariant: \"neutral\",\n                variant: \"secondary\"\n            }, void 0, false, {\n                fileName: \"/home/miyuki/Alura/Alura/Next/parte2/pages/area-logada.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/miyuki/Alura/Alura/Next/parte2/pages/area-logada.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcmVhLWxvZ2FkYS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF5RDtBQUNqQjtBQUNWO0FBRXZCLGVBQWVLLG1CQUFtQkMsT0FBTyxFQUFFO0lBQ2hELE1BQU1DLFVBQVVILGtEQUFXLENBQUNFO0lBQzVCLDJEQUEyRDtJQUMzRCxNQUFNRyxnQkFBZ0I7SUFDdEIsTUFBTUMsa0JBQWtCSCxRQUFRRSxhQUFhO0lBQzdDLE1BQU1FLGVBQWVGLGtCQUFrQkM7SUFFdkMsSUFBSSxDQUFDQyxjQUFjO1FBQ2pCQyxRQUFRQyxHQUFHLENBQUM7UUFDWixPQUFPO1lBQ0xDLFVBQVU7Z0JBQ1JDLFdBQVcsS0FBSztnQkFDaEJDLGFBQWE7WUFDZjtRQUNGO0lBQ0YsQ0FBQztJQUNESixRQUFRQyxHQUFHLENBQUM7SUFDWixPQUFPO1FBQ0xJLE9BQU8sQ0FBQztJQUNWO0FBQ0YsQ0FBQztBQUVjLFNBQVNDLGVBQWU7SUFDckMsTUFBTUMsU0FBU2hCLHNEQUFTQTtJQUN4QixxQkFDRSw4REFBQ0gscURBQUdBO1FBQ0ZvQixZQUFZO1lBQ1ZDLFFBQVE7WUFDUkMsZUFBZTtZQUNmQyxVQUFVO1lBQ1ZDLFdBQVc7WUFDWEMsa0JBQWtCO1lBQ2xCQyxTQUFTO1lBQ1RDLGNBQWM7WUFDZEMsV0FBVztRQUNiOzswQkFFQSw4REFBQzNCLHNEQUFJQTtnQkFBQ21CLFlBQVk7b0JBQUVTLGdCQUFnQjtnQkFBTzswQkFBRzs7Ozs7OzBCQUk5Qyw4REFBQzNCLHdEQUFNQTtnQkFDTDRCLE9BQU07Z0JBQ05DLFNBQVMsSUFBTTtvQkFDYjNCLHNEQUFlLENBQUMsSUFBSSxFQUFFO29CQUN0QmUsT0FBT2MsSUFBSSxDQUFDO2dCQUNkO2dCQUNBQyxjQUFlO2dCQUNmQyxTQUFVOzs7Ozs7Ozs7Ozs7QUFJbEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BhcnRlMi8uL3BhZ2VzL2FyZWEtbG9nYWRhLmpzP2Q2N2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBUZXh0LCBCdXR0b24gfSBmcm9tICdAc2t5bmV4dWkvY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgbm9va2llcyBmcm9tICdub29raWVzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IGNvb2tpZXMgPSBub29raWVzLmdldChjb250ZXh0KTtcbiAgLy8gQmFzaWNhbWVudGUgcXVlcmVtb3Mgc2FiZXIgc2UgbyB1c3XDoXJpbyBlc3TDoSBhdXRvcml6YWRvLlxuICBjb25zdCBTRU5IQV9TRUNSRVRBID0gJzEyMzQ1Nic7XG4gIGNvbnN0IHNlbmhhX2luZm9ybWFkYSA9IGNvb2tpZXMuU0VOSEFfU0VDUkVUQVxuICBjb25zdCBpc0F1dGhvcml6ZWQgPSBTRU5IQV9TRUNSRVRBID09PSBzZW5oYV9pbmZvcm1hZGE7XG5cbiAgaWYgKCFpc0F1dGhvcml6ZWQpIHtcbiAgICBjb25zb2xlLmxvZygnTsOjbyBhdXRvcml6YWRvIScpO1xuICAgIHJldHVybiB7XG4gICAgICByZWRpcmVjdDoge1xuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuICAgICAgICBkZXN0aW5hdGlvbjogJy9sb2dpbj9zdGF0dXM9NDAxJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zb2xlLmxvZygnQXV0b3JpemFkbyEnKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge31cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dnZWRTY3JlZW4oKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4oXG4gICAgPEJveFxuICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI0Y5NzAzRScsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBtYXhXaWR0aDogJzQwMHB4JyxcbiAgICAgICAgbWFyZ2luVG9wOiAnMjAlJyxcbiAgICAgICAgbWFyZ2luSG9yaXpvbnRhbDogJ2F1dG8nLFxuICAgICAgICBwYWRkaW5nOiAnMzJweCcsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgICAgIGJveFNoYWRvdzogJzFweCAxcHggNXB4IDAgcmdiYSgyNTUsNjksMCwwLjIpJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFRleHQgc3R5bGVTaGVldD17eyBtYXJnaW5WZXJ0aWNhbDogJzMycHgnIH19PlxuICAgICAgICBWb2PDqiBhY2Vzc291IHVtYSDDoXJlYSBwcm90ZWdpZGEhXG4gICAgICA8L1RleHQ+XG5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgbGFiZWw9J0xvZ291dCdcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIG5vb2tpZXMuZGVzdHJveShudWxsLCAnU0VOSEFfU0VDUkVUQScpO1xuICAgICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKVxuICAgICAgICB9fVxuICAgICAgICBjb2xvclZhcmlhbnQgPSAnbmV1dHJhbCdcbiAgICAgICAgdmFyaWFudCA9ICdzZWNvbmRhcnknXG4gICAgICAvPlxuICAgIDwvQm94PlxuICApXG59XG4iXSwibmFtZXMiOlsiQm94IiwiVGV4dCIsIkJ1dHRvbiIsInVzZVJvdXRlciIsIm5vb2tpZXMiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwiY29va2llcyIsImdldCIsIlNFTkhBX1NFQ1JFVEEiLCJzZW5oYV9pbmZvcm1hZGEiLCJpc0F1dGhvcml6ZWQiLCJjb25zb2xlIiwibG9nIiwicmVkaXJlY3QiLCJwZXJtYW5lbnQiLCJkZXN0aW5hdGlvbiIsInByb3BzIiwiTG9nZ2VkU2NyZWVuIiwicm91dGVyIiwic3R5bGVTaGVldCIsImJvcmRlciIsImZsZXhEaXJlY3Rpb24iLCJtYXhXaWR0aCIsIm1hcmdpblRvcCIsIm1hcmdpbkhvcml6b250YWwiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwibWFyZ2luVmVydGljYWwiLCJsYWJlbCIsIm9uQ2xpY2siLCJkZXN0cm95IiwicHVzaCIsImNvbG9yVmFyaWFudCIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/area-logada.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/area-logada.js"));
module.exports = __webpack_exports__;

})();