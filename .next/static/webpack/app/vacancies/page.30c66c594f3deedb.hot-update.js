"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/vacancies/page",{

/***/ "(app-pages-browser)/./src/components/modal/modal.tsx":
/*!****************************************!*\
  !*** ./src/components/modal/modal.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_icons_pack2_icon_close_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/icons/pack2/icon-close.svg */ \"(app-pages-browser)/./src/assets/icons/pack2/icon-close.svg\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst Modal = (param)=>{\n    let { children, isActive, title, handleClose } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: handleClose,\n        className: \"fixed px-12 z-10 inset-0 overflow-y-auto backdrop-blur-lg bg-black/50 flex flex-col items-center justify-center\",\n        \"aria-labelledby\": \"modal-title\",\n        role: \"dialog\",\n        \"aria-modal\": \"true\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative max-w-[90vw] bg-white rounded-xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_icons_pack2_icon_close_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"absolute right-8 top-8 w-6 h-6 text-black cursor-pointer opacity-80 hover:opacity-100 duration-300\",\n                    onClick: handleClose\n                }, void 0, false, {\n                    fileName: \"C:\\\\App\\\\baltint\\\\src\\\\components\\\\modal\\\\modal.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, undefined),\n                children\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\App\\\\baltint\\\\src\\\\components\\\\modal\\\\modal.tsx\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\App\\\\baltint\\\\src\\\\components\\\\modal\\\\modal.tsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL21vZGFsL21vZGFsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFHMEI7QUFFaUM7QUFTM0QsTUFBTUUsUUFBMEI7UUFBQyxFQUFDQyxRQUFRLEVBQUNDLFFBQVEsRUFBR0MsS0FBSyxFQUFFQyxXQUFXLEVBQUM7SUFFckUscUJBQ0ksOERBQUNDO1FBQ0dDLFNBQVNGO1FBQ1RHLFdBQVc7UUFDWEMsbUJBQWdCO1FBQ2hCQyxNQUFLO1FBQ0xDLGNBQVc7a0JBR1gsNEVBQUNMO1lBQUlFLFdBQVU7OzhCQUVYLDhEQUFDUiwwRUFBU0E7b0JBQ05RLFdBQVc7b0JBQ1hELFNBQVNGOzs7Ozs7Z0JBRVpIOzs7Ozs7Ozs7Ozs7QUFJakI7S0FyQk1EO0FBdUJOLCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL21vZGFsL21vZGFsLnRzeD9mMTJjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7UmVhY3ROb2RlfSBmcm9tIFwiQC9jb21tb24vdHlwZXNcIjtcclxuaW1wb3J0IEljb25DbG9zZSBmcm9tICdAL2Fzc2V0cy9pY29ucy9wYWNrMi9pY29uLWNsb3NlLnN2ZydcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1vZGFsIHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGUsXHJcbiAgICBpc0FjdGl2ZTogYm9vbGVhbixcclxuICAgIHRpdGxlOiBzdHJpbmcsXHJcbiAgICBoYW5kbGVDbG9zZTogRnVuY3Rpb25cclxufVxyXG5cclxuY29uc3QgTW9kYWw6IFJlYWN0LkZDPElNb2RhbD4gPSAoe2NoaWxkcmVuLGlzQWN0aXZlLCAgdGl0bGUsIGhhbmRsZUNsb3NlfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImZpeGVkIHB4LTEyIHotMTAgaW5zZXQtMCBvdmVyZmxvdy15LWF1dG8gYmFja2Ryb3AtYmx1ci1sZyBiZy1ibGFjay81MCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwifVxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC10aXRsZVwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgICAgICBhcmlhLW1vZGFsPVwidHJ1ZVwiXHJcbiAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYXgtdy1bOTB2d10gYmctd2hpdGUgcm91bmRlZC14bFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxJY29uQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydhYnNvbHV0ZSByaWdodC04IHRvcC04IHctNiBoLTYgdGV4dC1ibGFjayBjdXJzb3ItcG9pbnRlciBvcGFjaXR5LTgwIGhvdmVyOm9wYWNpdHktMTAwIGR1cmF0aW9uLTMwMCd9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWwiXSwibmFtZXMiOlsiUmVhY3QiLCJJY29uQ2xvc2UiLCJNb2RhbCIsImNoaWxkcmVuIiwiaXNBY3RpdmUiLCJ0aXRsZSIsImhhbmRsZUNsb3NlIiwiZGl2Iiwib25DbGljayIsImNsYXNzTmFtZSIsImFyaWEtbGFiZWxsZWRieSIsInJvbGUiLCJhcmlhLW1vZGFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/modal/modal.tsx\n"));

/***/ })

});