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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _assets_icons_pack2_icon_arrow2_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/icons/pack2/icon-arrow2.svg */ \"(app-pages-browser)/./src/assets/icons/pack2/icon-arrow2.svg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/modal/modal */ \"(app-pages-browser)/./src/components/modal/modal.tsx\");\n/* harmony import */ var _components_modal_useModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/modal/useModal */ \"(app-pages-browser)/./src/components/modal/useModal.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Vacancies = ()=>{\n    _s();\n    const [modalOpen, setModalOpen, toggle] = (0,_components_modal_useModal__WEBPACK_IMPORTED_MODULE_4__.useModal)();\n    const [currentModal, setCurrentModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const openModalHandler = (e)=>{\n        toggle();\n        setCurrentModal(e.target.id);\n    };\n    console.log(currentModal);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-col flex-1 gap-24 md:gap-32 py-32 md:py-40\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"flex flex-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col md:flex-row container mx-auto px-4 lg:px-0 gap-8 py-4 md:py-16\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col flex-1 items-start justify-center gap-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col justify-start items-start gap-6 max-w-xl\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"text-6xl font-bold color-primary\",\n                                            children: \"Ищем таланты\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                            lineNumber: 26,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-lg\",\n                                            children: \"Наше профессиональная команда планомерно расширяется и сейчас у нас в компании доступны следующие вакансии:\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-1 flex-col mx-auto gap-4 md:gap-6 w-full cursor-pointer\",\n                                children: [\n                                    {\n                                        title: \"Фронтенд-разработчик\"\n                                    },\n                                    {\n                                        title: \"Тестировщик\"\n                                    },\n                                    {\n                                        title: \"Проджект-менеджер\"\n                                    },\n                                    {\n                                        title: \"Продукт-менеджер\"\n                                    }\n                                ].map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"modal-\".concat(index + 1),\n                                        className: \"bg-white rounded-md px-4 py-4 flex flex-1 flex-row items-center justify-between group\",\n                                        onClick: openModalHandler,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"\",\n                                                children: item.title\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 37\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"relative w-8\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_icons_pack2_icon_arrow2_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                    className: \"absolute -left-2 -top-4 w-8 text-black opacity-80 duration-300 group-hover:left-2\",\n                                                    onClick: toggle\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 41\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        ]\n                                    }, \"vacanciesList1-\".concat(index), true, {\n                                        fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 33\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined),\n            modalOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modal_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                isActive: modalOpen,\n                title: \"Title\",\n                handleClose: toggle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col flex-1 px-8 py-12 gap-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl flex-1 font-bold color-primary\",\n                            children: \"Фронтенд-разработчик\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col gap-4 \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-xl font-bold color-primary\",\n                                    children: \" Описание: \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col flex-1 gap-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Разработка инновационной платформы для рынка строительных и сервисных компаний, работающих на особо опасных промышленных объектах (нефтяные компании, химические производства, производители минеральных удобрений). Продукт является уникальным It-решением для рынка строительных и сервисных услуг. Команда уже имеет успешный опыт создания цифровых продуктов для данной отрасли.\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Работаем по комфортным методологиям с современными инструментами (четко ставим задачи, без формализма и бюрократии, акцент всегда делаем на результат).\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Работаем по Agile с использованием SCRUM, KANBAN и т.п., адаптируем под потребности команд. Занимаемся рефакторингом кода, периодически отводим время для закрытия технического долга.\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Мы ищем в команду опытного Frontend разработчика - Middle/ Middle+ уровня с перспективой роста в компании в том числе в направлении Fullstack.\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                            lineNumber: 100,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                lineNumber: 71,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Vacancies, \"kswR0A6GXG8DzmkXtuKzyPaR4eQ=\", false, function() {\n    return [\n        _components_modal_useModal__WEBPACK_IMPORTED_MODULE_4__.useModal\n    ];\n});\n_c = Vacancies;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vacancies);\nvar _c;\n$RefreshReg$(_c, \"Vacancies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdmFjYW5jaWVzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUU0RDtBQUM3QjtBQUNjO0FBQ1E7QUFFckQsTUFBTUksWUFBWTs7SUFDZCxNQUFNLENBQUNDLFdBQVdDLGNBQWNDLE9BQU8sR0FBR0osb0VBQVFBO0lBQ2xELE1BQU0sQ0FBQ0ssY0FBY0MsZ0JBQWdCLEdBQUdSLCtDQUFRQTtJQUVoRCxNQUFNUyxtQkFBbUIsQ0FBQ0M7UUFDdEJKO1FBQ0FFLGdCQUFnQkUsRUFBRUMsTUFBTSxDQUFDQyxFQUFFO0lBQy9CO0lBRUFDLFFBQVFDLEdBQUcsQ0FBQ1A7SUFFWixxQkFDSTs7MEJBQ0ksOERBQUNRO2dCQUFLQyxXQUFXOzBCQUNiLDRFQUFDQztvQkFBUUQsV0FBVzs4QkFDaEIsNEVBQUNFO3dCQUFJRixXQUFXOzswQ0FDWiw4REFBQ0U7Z0NBQUlGLFdBQVc7MENBQ1osNEVBQUNFO29DQUFJRixXQUFXOztzREFDWiw4REFBQ0c7NENBQUdILFdBQVc7c0RBQW9DOzs7Ozs7c0RBSW5ELDhEQUFDSTs0Q0FBRUosV0FBVztzREFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBT2pDLDhEQUFDRTtnQ0FBSUYsV0FBVzswQ0FDWDtvQ0FBQzt3Q0FDRUssT0FBTztvQ0FDWDtvQ0FBRzt3Q0FDQ0EsT0FBTztvQ0FDWDtvQ0FBRzt3Q0FDQ0EsT0FBTztvQ0FDWDtvQ0FBRzt3Q0FDQ0EsT0FBTztvQ0FDWDtpQ0FBRSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ1YsOERBQUNOO3dDQUNHTixJQUFJLFNBQW1CLE9BQVZZLFFBQVE7d0NBQ3JCUixXQUFXO3dDQUVYUyxTQUFTaEI7OzBEQUVULDhEQUFDaUI7Z0RBQUtWLFdBQVc7MERBQ1pPLEtBQUtGLEtBQUs7Ozs7OzswREFHZiw4REFBQ0g7Z0RBQUlGLFdBQVc7MERBQ1osNEVBQUNqQiwyRUFBU0E7b0RBQ05pQixXQUFXO29EQUNYUyxTQUFTbkI7Ozs7Ozs7Ozs7Ozt1Q0FWWixrQkFBd0IsT0FBTmtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW9COUNwQiwyQkFDRyw4REFBQ0gsK0RBQUtBO2dCQUFDMEIsVUFBVXZCO2dCQUFXaUIsT0FBTztnQkFBU08sYUFBYXRCOzBCQUNyRCw0RUFBQ1k7b0JBQUlGLFdBQVc7O3NDQUVaLDhEQUFDYTs0QkFBR2IsV0FBVztzQ0FBMkM7Ozs7OztzQ0FFMUQsOERBQUNFOzRCQUFJRixXQUFXOzs4Q0FDWiw4REFBQ2M7b0NBQUdkLFdBQVc7OENBQW1DOzs7Ozs7OENBQ2xELDhEQUFDRTtvQ0FBSUYsV0FBVzs7c0RBQ1osOERBQUNJO3NEQUFFOzs7Ozs7c0RBUUgsOERBQUNBO3NEQUFFOzs7Ozs7c0RBTUgsOERBQUNBO3NEQUFFOzs7Ozs7c0RBT0gsOERBQUNBO3NEQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWW5DO0dBeEdNakI7O1FBQ3dDRCxnRUFBUUE7OztLQURoREM7QUEwR04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC92YWNhbmNpZXMvcGFnZS50c3g/ODY5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCBJY29uQXJyb3cgZnJvbSAnQC9hc3NldHMvaWNvbnMvcGFjazIvaWNvbi1hcnJvdzIuc3ZnJ1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiQC9jb21wb25lbnRzL21vZGFsL21vZGFsXCI7XHJcbmltcG9ydCB7dXNlTW9kYWx9IGZyb20gXCJAL2NvbXBvbmVudHMvbW9kYWwvdXNlTW9kYWxcIjtcclxuXHJcbmNvbnN0IFZhY2FuY2llcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFttb2RhbE9wZW4sIHNldE1vZGFsT3BlbiwgdG9nZ2xlXSA9IHVzZU1vZGFsKClcclxuICAgIGNvbnN0IFtjdXJyZW50TW9kYWwsIHNldEN1cnJlbnRNb2RhbF0gPSB1c2VTdGF0ZSgpXHJcblxyXG4gICAgY29uc3Qgb3Blbk1vZGFsSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgdG9nZ2xlKClcclxuICAgICAgICBzZXRDdXJyZW50TW9kYWwoZS50YXJnZXQuaWQpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coY3VycmVudE1vZGFsKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXsnZmxleCBmbGV4LWNvbCBmbGV4LTEgZ2FwLTI0IG1kOmdhcC0zMiBweS0zMiBtZDpweS00MCd9PlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXsnZmxleCBmbGV4LTEnfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2ZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgY29udGFpbmVyIG14LWF1dG8gcHgtNCBsZzpweC0wIGdhcC04IHB5LTQgbWQ6cHktMTYnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmbGV4IGZsZXgtY29sIGZsZXgtMSBpdGVtcy1zdGFydCBqdXN0aWZ5LWNlbnRlciBnYXAtOCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgZ2FwLTYgbWF4LXcteGwnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXsndGV4dC02eGwgZm9udC1ib2xkIGNvbG9yLXByaW1hcnknfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JjRidC10Lwg0YLQsNC70LDQvdGC0YtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9eyd0ZXh0LWxnJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCd0LDRiNC1INC/0YDQvtGE0LXRgdGB0LjQvtC90LDQu9GM0L3QsNGPINC60L7QvNCw0L3QtNCwINC/0LvQsNC90L7QvNC10YDQvdC+INGA0LDRgdGI0LjRgNGP0LXRgtGB0Y8g0Lgg0YHQtdC50YfQsNGBINGDINC90LDRgSDQsiDQutC+0LzQv9Cw0L3QuNC4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINC00L7RgdGC0YPQv9C90Ysg0YHQu9C10LTRg9GO0YnQuNC1INCy0LDQutCw0L3RgdC40Lg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmbGV4IGZsZXgtMSBmbGV4LWNvbCBteC1hdXRvIGdhcC00IG1kOmdhcC02IHctZnVsbCBjdXJzb3ItcG9pbnRlcid9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1t7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQpNGA0L7QvdGC0LXQvdC0LdGA0LDQt9GA0LDQsdC+0YLRh9C40LonXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQotC10YHRgtC40YDQvtCy0YnQuNC6J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0J/RgNC+0LTQttC10LrRgi3QvNC10L3QtdC00LbQtdGAJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0J/RgNC+0LTRg9C60YIt0LzQtdC90LXQtNC20LXRgCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dLm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YG1vZGFsLSR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2JnLXdoaXRlIHJvdW5kZWQtbWQgcHgtNCBweS00IGZsZXggZmxleC0xIGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ3JvdXAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2B2YWNhbmNpZXNMaXN0MS0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5Nb2RhbEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eycnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3JlbGF0aXZlIHctOCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25BcnJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2Fic29sdXRlIC1sZWZ0LTIgLXRvcC00IHctOCB0ZXh0LWJsYWNrIG9wYWNpdHktODAgZHVyYXRpb24tMzAwIGdyb3VwLWhvdmVyOmxlZnQtMid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgICAgICAge21vZGFsT3BlbiAmJlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsIGlzQWN0aXZlPXttb2RhbE9wZW59IHRpdGxlPXsnVGl0bGUnfSBoYW5kbGVDbG9zZT17dG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2ZsZXggZmxleC1jb2wgZmxleC0xIHB4LTggcHktMTIgZ2FwLTgnfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9eyd0ZXh0LTJ4bCBmbGV4LTEgZm9udC1ib2xkIGNvbG9yLXByaW1hcnknfT7QpNGA0L7QvdGC0LXQvdC0LdGA0LDQt9GA0LDQsdC+0YLRh9C40Lo8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmbGV4IGZsZXgtY29sIGdhcC00ICd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17J3RleHQteGwgZm9udC1ib2xkIGNvbG9yLXByaW1hcnknfT4g0J7Qv9C40YHQsNC90LjQtTogPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBmbGV4LWNvbCBmbGV4LTEgZ2FwLTQnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KDQsNC30YDQsNCx0L7RgtC60LAg0LjQvdC90L7QstCw0YbQuNC+0L3QvdC+0Lkg0L/Qu9Cw0YLRhNC+0YDQvNGLINC00LvRjyDRgNGL0L3QutCwINGB0YLRgNC+0LjRgtC10LvRjNC90YvRhVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQuCDRgdC10YDQstC40YHQvdGL0YUg0LrQvtC80L/QsNC90LjQuSwg0YDQsNCx0L7RgtCw0Y7RidC40YUg0L3QsCDQvtGB0L7QsdC+INC+0L/QsNGB0L3Ri9GFINC/0YDQvtC80YvRiNC70LXQvdC90YvRhSDQvtCx0YrQtdC60YLQsNGFICjQvdC10YTRgtGP0L3Ri9C1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINC60L7QvNC/0LDQvdC40LgsINGF0LjQvNC40YfQtdGB0LrQuNC1INC/0YDQvtC40LfQstC+0LTRgdGC0LLQsCwg0L/RgNC+0LjQt9Cy0L7QtNC40YLQtdC70Lgg0LzQuNC90LXRgNCw0LvRjNC90YvRhSDRg9C00L7QsdGA0LXQvdC40LkpLiDQn9GA0L7QtNGD0LrRglxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDRj9Cy0LvRj9C10YLRgdGPINGD0L3QuNC60LDQu9GM0L3Ri9C8IEl0LdGA0LXRiNC10L3QuNC10Lwg0LTQu9GPINGA0YvQvdC60LAg0YHRgtGA0L7QuNGC0LXQu9GM0L3Ri9GFINC4INGB0LXRgNCy0LjRgdC90YvRhSDRg9GB0LvRg9CzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQmtC+0LzQsNC90LTQsCDRg9C20LUg0LjQvNC10LXRgiDRg9GB0L/QtdGI0L3Ri9C5INC+0L/Ri9GCINGB0L7Qt9C00LDQvdC40Y8g0YbQuNGE0YDQvtCy0YvRhSDQv9GA0L7QtNGD0LrRgtC+0LJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0LTQu9GPINC00LDQvdC90L7QuSDQvtGC0YDQsNGB0LvQuC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCg0LDQsdC+0YLQsNC10Lwg0L/QviDQutC+0LzRhNC+0YDRgtC90YvQvCDQvNC10YLQvtC00L7Qu9C+0LPQuNGP0Lwg0YEg0YHQvtCy0YDQtdC80LXQvdC90YvQvNC4INC40L3RgdGC0YDRg9C80LXQvdGC0LDQvNC4ICjRh9C10YLQutC+INGB0YLQsNCy0LjQvFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQt9Cw0LTQsNGH0LgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCx0LXQtyDRhNC+0YDQvNCw0LvQuNC30LzQsCDQuCDQsdGO0YDQvtC60YDQsNGC0LjQuCwg0LDQutGG0LXQvdGCINCy0YHQtdCz0LTQsCDQtNC10LvQsNC10LxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0L3QsCDRgNC10LfRg9C70YzRgtCw0YIpLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KDQsNCx0L7RgtCw0LXQvCDQv9C+IEFnaWxlINGBINC40YHQv9C+0LvRjNC30L7QstCw0L3QuNC10LwgU0NSVU0sIEtBTkJBTiDQuCDRgi7Qvy4sINCw0LTQsNC/0YLQuNGA0YPQtdC8INC/0L7QtCDQv9C+0YLRgNC10LHQvdC+0YHRgtC4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINC60L7QvNCw0L3QtC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JfQsNC90LjQvNCw0LXQvNGB0Y8g0YDQtdGE0LDQutGC0L7RgNC40L3Qs9C+0Lwg0LrQvtC00LAsINC/0LXRgNC40L7QtNC40YfQtdGB0LrQuCDQvtGC0LLQvtC00LjQvCDQstGA0LXQvNGPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINC00LvRjyDQt9Cw0LrRgNGL0YLQuNGPINGC0LXRhdC90LjRh9C10YHQutC+0LPQviDQtNC+0LvQs9CwLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCc0Ysg0LjRidC10Lwg0LIg0LrQvtC80LDQvdC00YMg0L7Qv9GL0YLQvdC+0LPQviBGcm9udGVuZCDRgNCw0LfRgNCw0LHQvtGC0YfQuNC60LAgLSBNaWRkbGUvIE1pZGRsZSsg0YPRgNC+0LLQvdGPINGBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINC/0LXRgNGB0L/QtdC60YLQuNCy0L7QuVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDRgNC+0YHRgtCwINCyINC60L7QvNC/0LDQvdC40Lgg0LIg0YLQvtC8INGH0LjRgdC70LUg0LIg0L3QsNC/0YDQsNCy0LvQtdC90LjQuCBGdWxsc3RhY2suXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZhY2FuY2llczsiXSwibmFtZXMiOlsiSWNvbkFycm93IiwidXNlU3RhdGUiLCJNb2RhbCIsInVzZU1vZGFsIiwiVmFjYW5jaWVzIiwibW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwidG9nZ2xlIiwiY3VycmVudE1vZGFsIiwic2V0Q3VycmVudE1vZGFsIiwib3Blbk1vZGFsSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsImRpdiIsImgxIiwicCIsInRpdGxlIiwibWFwIiwiaXRlbSIsImluZGV4Iiwib25DbGljayIsInNwYW4iLCJpc0FjdGl2ZSIsImhhbmRsZUNsb3NlIiwiaDIiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/vacancies/page.tsx\n"));

/***/ })

});