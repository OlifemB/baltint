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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _assets_icons_pack2_icon_arrow2_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/icons/pack2/icon-arrow2.svg */ \"(app-pages-browser)/./src/assets/icons/pack2/icon-arrow2.svg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/modal/modal */ \"(app-pages-browser)/./src/components/modal/modal.tsx\");\n/* harmony import */ var _components_modal_useModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/modal/useModal */ \"(app-pages-browser)/./src/components/modal/useModal.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Vacancies = ()=>{\n    _s();\n    const [modalOpen, setModalOpen, toggle] = (0,_components_modal_useModal__WEBPACK_IMPORTED_MODULE_4__.useModal)();\n    const [currentModal, setCurrentModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const openModalHandler = (e)=>{\n        toggle();\n        setCurrentModal(e.target.id);\n    };\n    console.log(currentModal);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-col flex-1 gap-24 md:gap-32 py-32 md:py-40\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"flex flex-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col md:flex-row container mx-auto px-4 lg:px-0 gap-8 py-4 md:py-16\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col flex-1 items-start justify-center gap-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col justify-start items-start gap-6 max-w-xl\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"text-6xl font-bold color-primary\",\n                                            children: \"Ищем таланты\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                            lineNumber: 26,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-lg\",\n                                            children: \"Наше профессиональная команда планомерно расширяется и сейчас у нас в компании доступны следующие вакансии:\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-1 flex-col mx-auto gap-4 md:gap-6 w-full cursor-pointer\",\n                                children: [\n                                    {\n                                        title: \"Фронтенд-разработчик\"\n                                    },\n                                    {\n                                        title: \"Тестировщик\"\n                                    },\n                                    {\n                                        title: \"Проджект-менеджер\"\n                                    },\n                                    {\n                                        title: \"Продукт-менеджер\"\n                                    }\n                                ].map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"modal-\".concat(index + 1),\n                                        className: \"bg-white rounded-md px-4 py-4 flex flex-1 flex-row items-center justify-between group\",\n                                        onClick: openModalHandler,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"\",\n                                                children: item.title\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 37\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"relative w-8\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_icons_pack2_icon_arrow2_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                    className: \"absolute -left-2 -top-4 w-8 text-black opacity-80 duration-300 group-hover:left-2\",\n                                                    onClick: toggle\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 41\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        ]\n                                    }, \"vacanciesList1-\".concat(index), true, {\n                                        fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 33\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined),\n            modalOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modal_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                isActive: modalOpen,\n                title: \"Title\",\n                handleClose: toggle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col flex-1 p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl flex-1\",\n                            children: \"Фронтенд-разработчик\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-xl\",\n                                    children: \" Описание: \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col flex-1 gap-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Разработка инновационной платформы для рынка строительных и сервисных компаний, работающих на особо опасных промышленных объектах (нефтяные компании, химические производства, производители минеральных удобрений). Продукт является уникальным It-решением для рынка строительных и сервисных услуг. Команда уже имеет успешный опыт создания цифровых продуктов для данной отрасли.\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Работаем по комфортным методологиям с современными инструментами (четко ставим задачи, без формализма и бюрократии, акцент всегда делаем на результат).\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Работаем по Agile с использованием SCRUM, KANBAN и т.п., адаптируем под потребности команд. Занимаемся рефакторингом кода, периодически отводим время для закрытия технического долга.\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Мы ищем в команду опытного Frontend разработчика - Middle/ Middle+ уровня с перспективой роста в компании в том числе в направлении Fullstack.\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                lineNumber: 71,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Vacancies, \"kswR0A6GXG8DzmkXtuKzyPaR4eQ=\", false, function() {\n    return [\n        _components_modal_useModal__WEBPACK_IMPORTED_MODULE_4__.useModal\n    ];\n});\n_c = Vacancies;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vacancies);\nvar _c;\n$RefreshReg$(_c, \"Vacancies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdmFjYW5jaWVzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUU0RDtBQUM3QjtBQUNjO0FBQ1E7QUFFckQsTUFBTUksWUFBWTs7SUFDZCxNQUFNLENBQUNDLFdBQVdDLGNBQWNDLE9BQU8sR0FBR0osb0VBQVFBO0lBQ2xELE1BQU0sQ0FBQ0ssY0FBY0MsZ0JBQWdCLEdBQUdSLCtDQUFRQTtJQUVoRCxNQUFNUyxtQkFBbUIsQ0FBQ0M7UUFDdEJKO1FBQ0FFLGdCQUFnQkUsRUFBRUMsTUFBTSxDQUFDQyxFQUFFO0lBQy9CO0lBRUFDLFFBQVFDLEdBQUcsQ0FBQ1A7SUFFWixxQkFDSTs7MEJBQ0ksOERBQUNRO2dCQUFLQyxXQUFXOzBCQUNiLDRFQUFDQztvQkFBUUQsV0FBVzs4QkFDaEIsNEVBQUNFO3dCQUFJRixXQUFXOzswQ0FDWiw4REFBQ0U7Z0NBQUlGLFdBQVc7MENBQ1osNEVBQUNFO29DQUFJRixXQUFXOztzREFDWiw4REFBQ0c7NENBQUdILFdBQVc7c0RBQW9DOzs7Ozs7c0RBSW5ELDhEQUFDSTs0Q0FBRUosV0FBVztzREFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBT2pDLDhEQUFDRTtnQ0FBSUYsV0FBVzswQ0FDWDtvQ0FBQzt3Q0FDRUssT0FBTztvQ0FDWDtvQ0FBRzt3Q0FDQ0EsT0FBTztvQ0FDWDtvQ0FBRzt3Q0FDQ0EsT0FBTztvQ0FDWDtvQ0FBRzt3Q0FDQ0EsT0FBTztvQ0FDWDtpQ0FBRSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ1YsOERBQUNOO3dDQUNHTixJQUFJLFNBQW1CLE9BQVZZLFFBQVE7d0NBQ3JCUixXQUFXO3dDQUVYUyxTQUFTaEI7OzBEQUVULDhEQUFDaUI7Z0RBQUtWLFdBQVc7MERBQ1pPLEtBQUtGLEtBQUs7Ozs7OzswREFHZiw4REFBQ0g7Z0RBQUlGLFdBQVc7MERBQ1osNEVBQUNqQiwyRUFBU0E7b0RBQ05pQixXQUFXO29EQUNYUyxTQUFTbkI7Ozs7Ozs7Ozs7Ozt1Q0FWWixrQkFBd0IsT0FBTmtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW9COUNwQiwyQkFDRyw4REFBQ0gsK0RBQUtBO2dCQUFDMEIsVUFBVXZCO2dCQUFXaUIsT0FBTztnQkFBU08sYUFBYXRCOzBCQUNyRCw0RUFBQ1k7b0JBQUlGLFdBQVc7O3NDQUNaLDhEQUFDYTs0QkFBR2IsV0FBVztzQ0FBbUI7Ozs7OztzQ0FDbEMsOERBQUNFOzs4Q0FDRyw4REFBQ1k7b0NBQUdkLFdBQVc7OENBQVc7Ozs7Ozs4Q0FDMUIsOERBQUNFO29DQUFJRixXQUFXOztzREFDWiw4REFBQ0k7c0RBQUU7Ozs7OztzREFRSCw4REFBQ0E7c0RBQUU7Ozs7OztzREFNSCw4REFBQ0E7c0RBQUU7Ozs7OztzREFPSCw4REFBQ0E7c0RBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZbkM7R0F0R01qQjs7UUFDd0NELGdFQUFRQTs7O0tBRGhEQztBQXdHTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3ZhY2FuY2llcy9wYWdlLnRzeD84NjlkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IEljb25BcnJvdyBmcm9tICdAL2Fzc2V0cy9pY29ucy9wYWNrMi9pY29uLWFycm93Mi5zdmcnXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJAL2NvbXBvbmVudHMvbW9kYWwvbW9kYWxcIjtcclxuaW1wb3J0IHt1c2VNb2RhbH0gZnJvbSBcIkAvY29tcG9uZW50cy9tb2RhbC91c2VNb2RhbFwiO1xyXG5cclxuY29uc3QgVmFjYW5jaWVzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuLCB0b2dnbGVdID0gdXNlTW9kYWwoKVxyXG4gICAgY29uc3QgW2N1cnJlbnRNb2RhbCwgc2V0Q3VycmVudE1vZGFsXSA9IHVzZVN0YXRlKClcclxuXHJcbiAgICBjb25zdCBvcGVuTW9kYWxIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICB0b2dnbGUoKVxyXG4gICAgICAgIHNldEN1cnJlbnRNb2RhbChlLnRhcmdldC5pZClcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50TW9kYWwpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9eydmbGV4IGZsZXgtY29sIGZsZXgtMSBnYXAtMjQgbWQ6Z2FwLTMyIHB5LTMyIG1kOnB5LTQwJ30+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9eydmbGV4IGZsZXgtMSd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBjb250YWluZXIgbXgtYXV0byBweC00IGxnOnB4LTAgZ2FwLTggcHktNCBtZDpweS0xNid9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2ZsZXggZmxleC1jb2wgZmxleC0xIGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyIGdhcC04J30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2ZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1zdGFydCBnYXAtNiBtYXgtdy14bCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9eyd0ZXh0LTZ4bCBmb250LWJvbGQgY29sb3ItcHJpbWFyeSd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQmNGJ0LXQvCDRgtCw0LvQsNC90YLRi1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17J3RleHQtbGcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J3QsNGI0LUg0L/RgNC+0YTQtdGB0YHQuNC+0L3QsNC70YzQvdCw0Y8g0LrQvtC80LDQvdC00LAg0L/Qu9Cw0L3QvtC80LXRgNC90L4g0YDQsNGB0YjQuNGA0Y/QtdGC0YHRjyDQuCDRgdC10LnRh9Cw0YEg0YMg0L3QsNGBINCyINC60L7QvNC/0LDQvdC40LhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0LTQvtGB0YLRg9C/0L3RiyDRgdC70LXQtNGD0Y7RidC40LUg0LLQsNC60LDQvdGB0LjQuDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2ZsZXggZmxleC0xIGZsZXgtY29sIG14LWF1dG8gZ2FwLTQgbWQ6Z2FwLTYgdy1mdWxsIGN1cnNvci1wb2ludGVyJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7W3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9Ck0YDQvtC90YLQtdC90LQt0YDQsNC30YDQsNCx0L7RgtGH0LjQuidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9Ci0LXRgdGC0LjRgNC+0LLRidC40LonXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQn9GA0L7QtNC20LXQutGCLdC80LXQvdC10LTQttC10YAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQn9GA0L7QtNGD0LrRgi3QvNC10L3QtdC00LbQtdGAJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV0ubWFwKChpdGVtLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgbW9kYWwtJHtpbmRleCArIDF9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnYmctd2hpdGUgcm91bmRlZC1tZCBweC00IHB5LTQgZmxleCBmbGV4LTEgZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBncm91cCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YHZhY2FuY2llc0xpc3QxLSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b3Blbk1vZGFsSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Jyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncmVsYXRpdmUgdy04J30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkFycm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnYWJzb2x1dGUgLWxlZnQtMiAtdG9wLTQgdy04IHRleHQtYmxhY2sgb3BhY2l0eS04MCBkdXJhdGlvbi0zMDAgZ3JvdXAtaG92ZXI6bGVmdC0yJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcblxyXG4gICAgICAgICAgICB7bW9kYWxPcGVuICYmXHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgaXNBY3RpdmU9e21vZGFsT3Blbn0gdGl0bGU9eydUaXRsZSd9IGhhbmRsZUNsb3NlPXt0b2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBmbGV4LWNvbCBmbGV4LTEgcC00J30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9eyd0ZXh0LTJ4bCBmbGV4LTEnfT7QpNGA0L7QvdGC0LXQvdC0LdGA0LDQt9GA0LDQsdC+0YLRh9C40Lo8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17J3RleHQteGwnfT4g0J7Qv9C40YHQsNC90LjQtTogPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBmbGV4LWNvbCBmbGV4LTEgZ2FwLTInfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KDQsNC30YDQsNCx0L7RgtC60LAg0LjQvdC90L7QstCw0YbQuNC+0L3QvdC+0Lkg0L/Qu9Cw0YLRhNC+0YDQvNGLINC00LvRjyDRgNGL0L3QutCwINGB0YLRgNC+0LjRgtC10LvRjNC90YvRhVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQuCDRgdC10YDQstC40YHQvdGL0YUg0LrQvtC80L/QsNC90LjQuSwg0YDQsNCx0L7RgtCw0Y7RidC40YUg0L3QsCDQvtGB0L7QsdC+INC+0L/QsNGB0L3Ri9GFINC/0YDQvtC80YvRiNC70LXQvdC90YvRhSDQvtCx0YrQtdC60YLQsNGFICjQvdC10YTRgtGP0L3Ri9C1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINC60L7QvNC/0LDQvdC40LgsINGF0LjQvNC40YfQtdGB0LrQuNC1INC/0YDQvtC40LfQstC+0LTRgdGC0LLQsCwg0L/RgNC+0LjQt9Cy0L7QtNC40YLQtdC70Lgg0LzQuNC90LXRgNCw0LvRjNC90YvRhSDRg9C00L7QsdGA0LXQvdC40LkpLiDQn9GA0L7QtNGD0LrRglxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDRj9Cy0LvRj9C10YLRgdGPINGD0L3QuNC60LDQu9GM0L3Ri9C8IEl0LdGA0LXRiNC10L3QuNC10Lwg0LTQu9GPINGA0YvQvdC60LAg0YHRgtGA0L7QuNGC0LXQu9GM0L3Ri9GFINC4INGB0LXRgNCy0LjRgdC90YvRhSDRg9GB0LvRg9CzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQmtC+0LzQsNC90LTQsCDRg9C20LUg0LjQvNC10LXRgiDRg9GB0L/QtdGI0L3Ri9C5INC+0L/Ri9GCINGB0L7Qt9C00LDQvdC40Y8g0YbQuNGE0YDQvtCy0YvRhSDQv9GA0L7QtNGD0LrRgtC+0LJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0LTQu9GPINC00LDQvdC90L7QuSDQvtGC0YDQsNGB0LvQuC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCg0LDQsdC+0YLQsNC10Lwg0L/QviDQutC+0LzRhNC+0YDRgtC90YvQvCDQvNC10YLQvtC00L7Qu9C+0LPQuNGP0Lwg0YEg0YHQvtCy0YDQtdC80LXQvdC90YvQvNC4INC40L3RgdGC0YDRg9C80LXQvdGC0LDQvNC4ICjRh9C10YLQutC+INGB0YLQsNCy0LjQvFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQt9Cw0LTQsNGH0LgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCx0LXQtyDRhNC+0YDQvNCw0LvQuNC30LzQsCDQuCDQsdGO0YDQvtC60YDQsNGC0LjQuCwg0LDQutGG0LXQvdGCINCy0YHQtdCz0LTQsCDQtNC10LvQsNC10LxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0L3QsCDRgNC10LfRg9C70YzRgtCw0YIpLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KDQsNCx0L7RgtCw0LXQvCDQv9C+IEFnaWxlINGBINC40YHQv9C+0LvRjNC30L7QstCw0L3QuNC10LwgU0NSVU0sIEtBTkJBTiDQuCDRgi7Qvy4sINCw0LTQsNC/0YLQuNGA0YPQtdC8INC/0L7QtCDQv9C+0YLRgNC10LHQvdC+0YHRgtC4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINC60L7QvNCw0L3QtC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JfQsNC90LjQvNCw0LXQvNGB0Y8g0YDQtdGE0LDQutGC0L7RgNC40L3Qs9C+0Lwg0LrQvtC00LAsINC/0LXRgNC40L7QtNC40YfQtdGB0LrQuCDQvtGC0LLQvtC00LjQvCDQstGA0LXQvNGPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINC00LvRjyDQt9Cw0LrRgNGL0YLQuNGPINGC0LXRhdC90LjRh9C10YHQutC+0LPQviDQtNC+0LvQs9CwLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCc0Ysg0LjRidC10Lwg0LIg0LrQvtC80LDQvdC00YMg0L7Qv9GL0YLQvdC+0LPQviBGcm9udGVuZCDRgNCw0LfRgNCw0LHQvtGC0YfQuNC60LAgLSBNaWRkbGUvIE1pZGRsZSsg0YPRgNC+0LLQvdGPINGBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINC/0LXRgNGB0L/QtdC60YLQuNCy0L7QuVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDRgNC+0YHRgtCwINCyINC60L7QvNC/0LDQvdC40Lgg0LIg0YLQvtC8INGH0LjRgdC70LUg0LIg0L3QsNC/0YDQsNCy0LvQtdC90LjQuCBGdWxsc3RhY2suXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZhY2FuY2llczsiXSwibmFtZXMiOlsiSWNvbkFycm93IiwidXNlU3RhdGUiLCJNb2RhbCIsInVzZU1vZGFsIiwiVmFjYW5jaWVzIiwibW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwidG9nZ2xlIiwiY3VycmVudE1vZGFsIiwic2V0Q3VycmVudE1vZGFsIiwib3Blbk1vZGFsSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsImRpdiIsImgxIiwicCIsInRpdGxlIiwibWFwIiwiaXRlbSIsImluZGV4Iiwib25DbGljayIsInNwYW4iLCJpc0FjdGl2ZSIsImhhbmRsZUNsb3NlIiwiaDIiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/vacancies/page.tsx\n"));

/***/ })

});