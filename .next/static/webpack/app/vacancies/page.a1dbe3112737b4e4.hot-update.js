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

/***/ "(app-pages-browser)/./src/app/vacancies/page.tsx":
/*!************************************!*\
  !*** ./src/app/vacancies/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _assets_icons_pack2_icon_arrow2_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/icons/pack2/icon-arrow2.svg */ \"(app-pages-browser)/./src/assets/icons/pack2/icon-arrow2.svg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/modal/modal */ \"(app-pages-browser)/./src/components/modal/modal.tsx\");\n/* harmony import */ var _components_modal_useModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/modal/useModal */ \"(app-pages-browser)/./src/components/modal/useModal.tsx\");\n/* harmony import */ var _app_vacancies_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/vacancies/data */ \"(app-pages-browser)/./src/app/vacancies/data.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Vacancies = ()=>{\n    _s();\n    const [modalOpen, setModalOpen, toggle] = (0,_components_modal_useModal__WEBPACK_IMPORTED_MODULE_4__.useModal)();\n    const [currentVacancy, setCurrentVacancy] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const openModalHandler = (id)=>{\n        toggle();\n        setCurrentVacancy(id);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-col flex-1 gap-24 md:gap-32 py-32 md:py-40\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"flex flex-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col md:flex-row container mx-auto px-4 lg:px-0 gap-8 py-4 md:py-16\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col flex-1 items-start justify-center gap-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col justify-start items-start gap-6 max-w-xl\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"text-6xl font-bold color-primary\",\n                                            children: _app_vacancies_data__WEBPACK_IMPORTED_MODULE_5__.dataPage.section1.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                            lineNumber: 25,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-lg\",\n                                            children: _app_vacancies_data__WEBPACK_IMPORTED_MODULE_5__.dataPage.section1.text\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                            lineNumber: 29,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"mailto:\".concat(_app_vacancies_data__WEBPACK_IMPORTED_MODULE_5__.dataPage.section1.email.link),\n                                            className: \"font-bold color-primary  duration-300\",\n                                            children: _app_vacancies_data__WEBPACK_IMPORTED_MODULE_5__.dataPage.section1.email.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-1 flex-col mx-auto gap-4 md:gap-6 w-full cursor-pointer justify-center\",\n                                children: _app_vacancies_data__WEBPACK_IMPORTED_MODULE_5__.dataPage.section1.list.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"modal-\".concat(index + 1),\n                                        className: \"bg-white rounded-md px-4 py-4 flex flex-row items-center justify-between group\",\n                                        onClick: ()=>openModalHandler(item.id),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"\",\n                                                children: item.title\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 37\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-8\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_icons_pack2_icon_arrow2_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                    className: \"-ml-2 -top-4 w-8 text-black duration-300 group-hover:ml-2 opacity-80\",\n                                                    onClick: toggle\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                                    lineNumber: 54,\n                                                    columnNumber: 41\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        ]\n                                    }, \"vacanciesList1-\".concat(index), true, {\n                                        fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 33\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, undefined),\n            modalOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modal_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                isActive: modalOpen,\n                title: \"Title\",\n                handleClose: toggle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col flex-1 px-8 py-12 gap-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-4xl flex-1 font-bold color-primary\",\n                            children: _app_vacancies_data__WEBPACK_IMPORTED_MODULE_5__.dataModal[currentVacancy].title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 25\n                        }, undefined),\n                        _app_vacancies_data__WEBPACK_IMPORTED_MODULE_5__.dataModal[currentVacancy].list.map((block, blockIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col gap-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-xl font-bold color-primary\",\n                                        children: block.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col flex-1 gap-2\",\n                                        children: block.list.map((list, listIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-lg\",\n                                                children: list.text\n                                            }, \"block-\".concat(blockIndex, \"-list-\").concat(listIndex), false, {\n                                                fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 41\n                                            }, undefined))\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, \"block-\".concat(blockIndex), true, {\n                                fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 29\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                lineNumber: 67,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Vacancies, \"EvzlFDZWfJaftBk0Sx/Ppk890wM=\", false, function() {\n    return [\n        _components_modal_useModal__WEBPACK_IMPORTED_MODULE_4__.useModal\n    ];\n});\n_c = Vacancies;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vacancies);\nvar _c;\n$RefreshReg$(_c, \"Vacancies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdmFjYW5jaWVzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFNEQ7QUFDN0I7QUFDYztBQUNRO0FBQ0k7QUFFekQsTUFBTU0sWUFBWTs7SUFDZCxNQUFNLENBQUNDLFdBQVdDLGNBQWNDLE9BQU8sR0FBR04sb0VBQVFBO0lBQ2xELE1BQU0sQ0FBQ08sZ0JBQWdCQyxrQkFBa0IsR0FBR1YsK0NBQVFBLENBQUM7SUFFckQsTUFBTVcsbUJBQW1CLENBQUNDO1FBQ3RCSjtRQUNBRSxrQkFBa0JFO0lBQ3RCO0lBRUEscUJBQ0k7OzBCQUNJLDhEQUFDQztnQkFBS0MsV0FBVzswQkFDYiw0RUFBQ0M7b0JBQVFELFdBQVc7OEJBQ2hCLDRFQUFDRTt3QkFBSUYsV0FBVzs7MENBQ1osOERBQUNFO2dDQUFJRixXQUFXOzBDQUNaLDRFQUFDRTtvQ0FBSUYsV0FBVzs7c0RBQ1osOERBQUNHOzRDQUFHSCxXQUFXO3NEQUNWVix5REFBUUEsQ0FBQ2MsUUFBUSxDQUFDQyxLQUFLOzs7Ozs7c0RBRzVCLDhEQUFDQzs0Q0FBRU4sV0FBVztzREFDVFYseURBQVFBLENBQUNjLFFBQVEsQ0FBQ0csSUFBSTs7Ozs7O3NEQUczQiw4REFBQ0M7NENBQUVDLE1BQU0sVUFBdUMsT0FBN0JuQix5REFBUUEsQ0FBQ2MsUUFBUSxDQUFDTSxLQUFLLENBQUNDLElBQUk7NENBQzVDWCxXQUFXO3NEQUNUVix5REFBUUEsQ0FBQ2MsUUFBUSxDQUFDTSxLQUFLLENBQUNMLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUsxQyw4REFBQ0g7Z0NBQ0dGLFdBQVc7MENBQ1ZWLHlEQUFRQSxDQUFDYyxRQUFRLENBQUNRLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUMvQiw4REFBQ2I7d0NBQ0dKLElBQUksU0FBbUIsT0FBVmlCLFFBQVE7d0NBQ3JCZixXQUFXO3dDQUVYZ0IsU0FBUyxJQUFNbkIsaUJBQWlCaUIsS0FBS2hCLEVBQUU7OzBEQUV2Qyw4REFBQ21CO2dEQUFLakIsV0FBVzswREFDWmMsS0FBS1QsS0FBSzs7Ozs7OzBEQUdmLDhEQUFDSDtnREFBSUYsV0FBVzswREFDWiw0RUFBQ2YsMkVBQVNBO29EQUNOZSxXQUFXO29EQUNYZ0IsU0FBU3RCOzs7Ozs7Ozs7Ozs7dUNBVlosa0JBQXdCLE9BQU5xQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQjlDdkIsMkJBQ0csOERBQUNMLCtEQUFLQTtnQkFBQytCLFVBQVUxQjtnQkFBV2EsT0FBTztnQkFBU2MsYUFBYXpCOzBCQUNyRCw0RUFBQ1E7b0JBQUlGLFdBQVc7O3NDQUVaLDhEQUFDb0I7NEJBQUdwQixXQUFXO3NDQUNWWCwwREFBUyxDQUFDTSxlQUFlLENBQUNVLEtBQUs7Ozs7Ozt3QkFHbkNoQiwwREFBUyxDQUFDTSxlQUFlLENBQUNpQixJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDUSxPQUFPQywyQkFDeEMsOERBQUNwQjtnQ0FBSUYsV0FBVzs7a0RBQ1osOERBQUN1Qjt3Q0FBR3ZCLFdBQVc7a0RBQ1ZxQixNQUFNaEIsS0FBSzs7Ozs7O2tEQUdoQiw4REFBQ0g7d0NBQUlGLFdBQVc7a0RBQ1hxQixNQUFNVCxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDRCxNQUFNWSwwQkFDbkIsOERBQUNsQjtnREFBZ0ROLFdBQVc7MERBQ3ZEWSxLQUFLTCxJQUFJOytDQUROLFNBQTRCaUIsT0FBbkJGLFlBQVcsVUFBa0IsT0FBVkU7Ozs7Ozs7Ozs7OytCQVBKLFNBQW9CLE9BQVhGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQmpGO0dBckZNL0I7O1FBQ3dDSCxnRUFBUUE7OztLQURoREc7QUF1Rk4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC92YWNhbmNpZXMvcGFnZS50c3g/ODY5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCBJY29uQXJyb3cgZnJvbSAnQC9hc3NldHMvaWNvbnMvcGFjazIvaWNvbi1hcnJvdzIuc3ZnJ1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiQC9jb21wb25lbnRzL21vZGFsL21vZGFsXCI7XHJcbmltcG9ydCB7dXNlTW9kYWx9IGZyb20gXCJAL2NvbXBvbmVudHMvbW9kYWwvdXNlTW9kYWxcIjtcclxuaW1wb3J0IHtkYXRhTW9kYWwsIGRhdGFQYWdlfSBmcm9tIFwiQC9hcHAvdmFjYW5jaWVzL2RhdGFcIjtcclxuXHJcbmNvbnN0IFZhY2FuY2llcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFttb2RhbE9wZW4sIHNldE1vZGFsT3BlbiwgdG9nZ2xlXSA9IHVzZU1vZGFsKClcclxuICAgIGNvbnN0IFtjdXJyZW50VmFjYW5jeSwgc2V0Q3VycmVudFZhY2FuY3ldID0gdXNlU3RhdGUoMClcclxuXHJcbiAgICBjb25zdCBvcGVuTW9kYWxIYW5kbGVyID0gKGlkKSA9PiB7XHJcbiAgICAgICAgdG9nZ2xlKClcclxuICAgICAgICBzZXRDdXJyZW50VmFjYW5jeShpZClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17J2ZsZXggZmxleC1jb2wgZmxleC0xIGdhcC0yNCBtZDpnYXAtMzIgcHktMzIgbWQ6cHktNDAnfT5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17J2ZsZXggZmxleC0xJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGNvbnRhaW5lciBteC1hdXRvIHB4LTQgbGc6cHgtMCBnYXAtOCBweS00IG1kOnB5LTE2J30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBmbGV4LWNvbCBmbGV4LTEgaXRlbXMtc3RhcnQganVzdGlmeS1jZW50ZXIgZ2FwLTgnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0IGdhcC02IG1heC13LXhsJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17J3RleHQtNnhsIGZvbnQtYm9sZCBjb2xvci1wcmltYXJ5J30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhUGFnZS5zZWN0aW9uMS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9eyd0ZXh0LWxnJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhUGFnZS5zZWN0aW9uMS50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YG1haWx0bzoke2RhdGFQYWdlLnNlY3Rpb24xLmVtYWlsLmxpbmt9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydmb250LWJvbGQgY29sb3ItcHJpbWFyeSAgZHVyYXRpb24tMzAwJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhUGFnZS5zZWN0aW9uMS5lbWFpbC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydmbGV4IGZsZXgtMSBmbGV4LWNvbCBteC1hdXRvIGdhcC00IG1kOmdhcC02IHctZnVsbCBjdXJzb3ItcG9pbnRlciBqdXN0aWZ5LWNlbnRlcid9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGFQYWdlLnNlY3Rpb24xLmxpc3QubWFwKChpdGVtLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgbW9kYWwtJHtpbmRleCArIDF9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnYmctd2hpdGUgcm91bmRlZC1tZCBweC00IHB5LTQgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdyb3VwJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgdmFjYW5jaWVzTGlzdDEtJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuTW9kYWxIYW5kbGVyKGl0ZW0uaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsnJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyd3LTgnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQXJyb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyctbWwtMiAtdG9wLTQgdy04IHRleHQtYmxhY2sgZHVyYXRpb24tMzAwIGdyb3VwLWhvdmVyOm1sLTIgb3BhY2l0eS04MCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgICAgICAge21vZGFsT3BlbiAmJlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsIGlzQWN0aXZlPXttb2RhbE9wZW59IHRpdGxlPXsnVGl0bGUnfSBoYW5kbGVDbG9zZT17dG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2ZsZXggZmxleC1jb2wgZmxleC0xIHB4LTggcHktMTIgZ2FwLTgnfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9eyd0ZXh0LTR4bCBmbGV4LTEgZm9udC1ib2xkIGNvbG9yLXByaW1hcnknfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhTW9kYWxbY3VycmVudFZhY2FuY3ldLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGFNb2RhbFtjdXJyZW50VmFjYW5jeV0ubGlzdC5tYXAoKGJsb2NrLCBibG9ja0luZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmbGV4IGZsZXgtY29sIGdhcC0zJ30ga2V5PXtgYmxvY2stJHtibG9ja0luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9eyd0ZXh0LXhsIGZvbnQtYm9sZCBjb2xvci1wcmltYXJ5J30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9jay50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2ZsZXggZmxleC1jb2wgZmxleC0xIGdhcC0yJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9jay5saXN0Lm1hcCgobGlzdCwgbGlzdEluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtgYmxvY2stJHtibG9ja0luZGV4fS1saXN0LSR7bGlzdEluZGV4fWB9IGNsYXNzTmFtZT17J3RleHQtbGcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdC50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmFjYW5jaWVzOyJdLCJuYW1lcyI6WyJJY29uQXJyb3ciLCJ1c2VTdGF0ZSIsIk1vZGFsIiwidXNlTW9kYWwiLCJkYXRhTW9kYWwiLCJkYXRhUGFnZSIsIlZhY2FuY2llcyIsIm1vZGFsT3BlbiIsInNldE1vZGFsT3BlbiIsInRvZ2dsZSIsImN1cnJlbnRWYWNhbmN5Iiwic2V0Q3VycmVudFZhY2FuY3kiLCJvcGVuTW9kYWxIYW5kbGVyIiwiaWQiLCJtYWluIiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsImRpdiIsImgxIiwic2VjdGlvbjEiLCJ0aXRsZSIsInAiLCJ0ZXh0IiwiYSIsImhyZWYiLCJlbWFpbCIsImxpbmsiLCJsaXN0IiwibWFwIiwiaXRlbSIsImluZGV4Iiwib25DbGljayIsInNwYW4iLCJpc0FjdGl2ZSIsImhhbmRsZUNsb3NlIiwiaDIiLCJibG9jayIsImJsb2NrSW5kZXgiLCJoMyIsImxpc3RJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/vacancies/page.tsx\n"));

/***/ })

});