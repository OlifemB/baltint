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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _assets_icons_pack2_icon_arrow2_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/icons/pack2/icon-arrow2.svg */ \"(app-pages-browser)/./src/assets/icons/pack2/icon-arrow2.svg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/modal/modal */ \"(app-pages-browser)/./src/components/modal/modal.tsx\");\n/* harmony import */ var _components_modal_useModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/modal/useModal */ \"(app-pages-browser)/./src/components/modal/useModal.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Vacancies = ()=>{\n    _s();\n    const [modalOpen, setModalOpen, toggle] = (0,_components_modal_useModal__WEBPACK_IMPORTED_MODULE_4__.useModal)();\n    const [currentModal, setCurrentModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const openModalHandler = (e)=>{\n        toggle();\n        setCurrentModal(e.target.id);\n    };\n    console.log(currentModal);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-col flex-1 gap-24 md:gap-32 py-32 md:py-40\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"flex flex-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col md:flex-row container mx-auto px-4 lg:px-0 gap-8 py-4 md:py-16\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col flex-1 items-start justify-center gap-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col justify-start items-start gap-6 max-w-xl\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"text-6xl font-bold color-primary\",\n                                            children: \"Ищем таланты\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                            lineNumber: 26,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-lg\",\n                                            children: \"Наше профессиональная команда планомерно расширяется и сейчас у нас в компании доступны следующие вакансии:\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-1 flex-col mx-auto gap-4 md:gap-6 w-full cursor-pointer\",\n                                children: [\n                                    {\n                                        title: \"Фронтенд-разработчик\"\n                                    },\n                                    {\n                                        title: \"Тестировщик\"\n                                    },\n                                    {\n                                        title: \"Проджект-менеджер\"\n                                    },\n                                    {\n                                        title: \"Продукт-менеджер\"\n                                    }\n                                ].map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"modal-\".concat(index + 1),\n                                        className: \"bg-white rounded-md px-4 py-4 flex flex-1 flex-row items-center justify-between group\",\n                                        onClick: openModalHandler,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"\",\n                                                children: item.title\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 37\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"relative w-8\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_icons_pack2_icon_arrow2_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                    className: \"absolute -left-2 -top-4 w-8 text-black opacity-80 duration-300 group-hover:left-2\",\n                                                    onClick: toggle\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 41\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        ]\n                                    }, \"vacanciesList1-\".concat(index), true, {\n                                        fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 33\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined),\n            modalOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modal_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                isActive: modalOpen,\n                title: \"Title\",\n                handleClose: toggle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col flex-1 px-8 py-12 gap-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl flex-1 font-bold color-primary\",\n                            children: \"Фронтенд-разработчик\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col gap-4 \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-xl font-bold color-primary\",\n                                    children: \" Описание: \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col flex-1 gap-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Разработка инновационной платформы для рынка строительных и сервисных компаний, работающих на особо опасных промышленных объектах (нефтяные компании, химические производства, производители минеральных удобрений). Продукт является уникальным It-решением для рынка строительных и сервисных услуг. Команда уже имеет успешный опыт создания цифровых продуктов для данной отрасли.\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Работаем по комфортным методологиям с современными инструментами (четко ставим задачи, без формализма и бюрократии, акцент всегда делаем на результат).\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Работаем по Agile с использованием SCRUM, KANBAN и т.п., адаптируем под потребности команд. Занимаемся рефакторингом кода, периодически отводим время для закрытия технического долга.\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Мы ищем в команду опытного Frontend разработчика - Middle/ Middle+ уровня с перспективой роста в компании в том числе в направлении Fullstack.\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                            lineNumber: 100,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col gap-4 \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-xl font-bold color-primary\",\n                                    children: \" Обязанности: \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col flex-1 gap-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Разработка программного продукта Разработка новых модулей системы\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\App\\\\baltint\\\\src\\\\app\\\\vacancies\\\\page.tsx\",\n                lineNumber: 71,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Vacancies, \"kswR0A6GXG8DzmkXtuKzyPaR4eQ=\", false, function() {\n    return [\n        _components_modal_useModal__WEBPACK_IMPORTED_MODULE_4__.useModal\n    ];\n});\n_c = Vacancies;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vacancies);\nvar _c;\n$RefreshReg$(_c, \"Vacancies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdmFjYW5jaWVzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUU0RDtBQUM3QjtBQUNjO0FBQ1E7QUFFckQsTUFBTUksWUFBWTs7SUFDZCxNQUFNLENBQUNDLFdBQVdDLGNBQWNDLE9BQU8sR0FBR0osb0VBQVFBO0lBQ2xELE1BQU0sQ0FBQ0ssY0FBY0MsZ0JBQWdCLEdBQUdSLCtDQUFRQTtJQUVoRCxNQUFNUyxtQkFBbUIsQ0FBQ0M7UUFDdEJKO1FBQ0FFLGdCQUFnQkUsRUFBRUMsTUFBTSxDQUFDQyxFQUFFO0lBQy9CO0lBRUFDLFFBQVFDLEdBQUcsQ0FBQ1A7SUFFWixxQkFDSTs7MEJBQ0ksOERBQUNRO2dCQUFLQyxXQUFXOzBCQUNiLDRFQUFDQztvQkFBUUQsV0FBVzs4QkFDaEIsNEVBQUNFO3dCQUFJRixXQUFXOzswQ0FDWiw4REFBQ0U7Z0NBQUlGLFdBQVc7MENBQ1osNEVBQUNFO29DQUFJRixXQUFXOztzREFDWiw4REFBQ0c7NENBQUdILFdBQVc7c0RBQW9DOzs7Ozs7c0RBSW5ELDhEQUFDSTs0Q0FBRUosV0FBVztzREFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBT2pDLDhEQUFDRTtnQ0FBSUYsV0FBVzswQ0FDWDtvQ0FBQzt3Q0FDRUssT0FBTztvQ0FDWDtvQ0FBRzt3Q0FDQ0EsT0FBTztvQ0FDWDtvQ0FBRzt3Q0FDQ0EsT0FBTztvQ0FDWDtvQ0FBRzt3Q0FDQ0EsT0FBTztvQ0FDWDtpQ0FBRSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ1YsOERBQUNOO3dDQUNHTixJQUFJLFNBQW1CLE9BQVZZLFFBQVE7d0NBQ3JCUixXQUFXO3dDQUVYUyxTQUFTaEI7OzBEQUVULDhEQUFDaUI7Z0RBQUtWLFdBQVc7MERBQ1pPLEtBQUtGLEtBQUs7Ozs7OzswREFHZiw4REFBQ0g7Z0RBQUlGLFdBQVc7MERBQ1osNEVBQUNqQiwyRUFBU0E7b0RBQ05pQixXQUFXO29EQUNYUyxTQUFTbkI7Ozs7Ozs7Ozs7Ozt1Q0FWWixrQkFBd0IsT0FBTmtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW9COUNwQiwyQkFDRyw4REFBQ0gsK0RBQUtBO2dCQUFDMEIsVUFBVXZCO2dCQUFXaUIsT0FBTztnQkFBU08sYUFBYXRCOzBCQUNyRCw0RUFBQ1k7b0JBQUlGLFdBQVc7O3NDQUVaLDhEQUFDYTs0QkFBR2IsV0FBVztzQ0FBMkM7Ozs7OztzQ0FFMUQsOERBQUNFOzRCQUFJRixXQUFXOzs4Q0FDWiw4REFBQ2M7b0NBQUdkLFdBQVc7OENBQW1DOzs7Ozs7OENBQ2xELDhEQUFDRTtvQ0FBSUYsV0FBVzs7c0RBQ1osOERBQUNJO3NEQUFFOzs7Ozs7c0RBUUgsOERBQUNBO3NEQUFFOzs7Ozs7c0RBTUgsOERBQUNBO3NEQUFFOzs7Ozs7c0RBT0gsOERBQUNBO3NEQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBUVgsOERBQUNGOzRCQUFJRixXQUFXOzs4Q0FDWiw4REFBQ2M7b0NBQUdkLFdBQVc7OENBQW1DOzs7Ozs7OENBQ2xELDhEQUFDRTtvQ0FBSUYsV0FBVzs4Q0FDWiw0RUFBQ0k7a0RBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVluQztHQW5ITWpCOztRQUN3Q0QsZ0VBQVFBOzs7S0FEaERDO0FBcUhOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdmFjYW5jaWVzL3BhZ2UudHN4Pzg2OWQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgSWNvbkFycm93IGZyb20gJ0AvYXNzZXRzL2ljb25zL3BhY2syL2ljb24tYXJyb3cyLnN2ZydcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIkAvY29tcG9uZW50cy9tb2RhbC9tb2RhbFwiO1xyXG5pbXBvcnQge3VzZU1vZGFsfSBmcm9tIFwiQC9jb21wb25lbnRzL21vZGFsL3VzZU1vZGFsXCI7XHJcblxyXG5jb25zdCBWYWNhbmNpZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW4sIHRvZ2dsZV0gPSB1c2VNb2RhbCgpXHJcbiAgICBjb25zdCBbY3VycmVudE1vZGFsLCBzZXRDdXJyZW50TW9kYWxdID0gdXNlU3RhdGUoKVxyXG5cclxuICAgIGNvbnN0IG9wZW5Nb2RhbEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIHRvZ2dsZSgpXHJcbiAgICAgICAgc2V0Q3VycmVudE1vZGFsKGUudGFyZ2V0LmlkKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRNb2RhbClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17J2ZsZXggZmxleC1jb2wgZmxleC0xIGdhcC0yNCBtZDpnYXAtMzIgcHktMzIgbWQ6cHktNDAnfT5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17J2ZsZXggZmxleC0xJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGNvbnRhaW5lciBteC1hdXRvIHB4LTQgbGc6cHgtMCBnYXAtOCBweS00IG1kOnB5LTE2J30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBmbGV4LWNvbCBmbGV4LTEgaXRlbXMtc3RhcnQganVzdGlmeS1jZW50ZXIgZ2FwLTgnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0IGdhcC02IG1heC13LXhsJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17J3RleHQtNnhsIGZvbnQtYm9sZCBjb2xvci1wcmltYXJ5J30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCY0YnQtdC8INGC0LDQu9Cw0L3RgtGLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXsndGV4dC1sZyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQndCw0YjQtSDQv9GA0L7RhNC10YHRgdC40L7QvdCw0LvRjNC90LDRjyDQutC+0LzQsNC90LTQsCDQv9C70LDQvdC+0LzQtdGA0L3QviDRgNCw0YHRiNC40YDRj9C10YLRgdGPINC4INGB0LXQudGH0LDRgSDRgyDQvdCw0YEg0LIg0LrQvtC80L/QsNC90LjQuFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQtNC+0YHRgtGD0L/QvdGLINGB0LvQtdC00YPRjtGJ0LjQtSDQstCw0LrQsNC90YHQuNC4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBmbGV4LTEgZmxleC1jb2wgbXgtYXV0byBnYXAtNCBtZDpnYXAtNiB3LWZ1bGwgY3Vyc29yLXBvaW50ZXInfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0KTRgNC+0L3RgtC10L3QtC3RgNCw0LfRgNCw0LHQvtGC0YfQuNC6J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0KLQtdGB0YLQuNGA0L7QstGJ0LjQuidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9Cf0YDQvtC00LbQtdC60YIt0LzQtdC90LXQtNC20LXRgCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9Cf0YDQvtC00YPQutGCLdC80LXQvdC10LTQttC10YAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XS5tYXAoKGl0ZW0sIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2Btb2RhbC0ke2luZGV4ICsgMX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydiZy13aGl0ZSByb3VuZGVkLW1kIHB4LTQgcHktNCBmbGV4IGZsZXgtMSBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdyb3VwJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgdmFjYW5jaWVzTGlzdDEtJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvcGVuTW9kYWxIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsnJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydyZWxhdGl2ZSB3LTgnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQXJyb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydhYnNvbHV0ZSAtbGVmdC0yIC10b3AtNCB3LTggdGV4dC1ibGFjayBvcGFjaXR5LTgwIGR1cmF0aW9uLTMwMCBncm91cC1ob3ZlcjpsZWZ0LTInfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgICAgICAgIHttb2RhbE9wZW4gJiZcclxuICAgICAgICAgICAgICAgIDxNb2RhbCBpc0FjdGl2ZT17bW9kYWxPcGVufSB0aXRsZT17J1RpdGxlJ30gaGFuZGxlQ2xvc2U9e3RvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmbGV4IGZsZXgtY29sIGZsZXgtMSBweC04IHB5LTEyIGdhcC04J30+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXsndGV4dC0yeGwgZmxleC0xIGZvbnQtYm9sZCBjb2xvci1wcmltYXJ5J30+0KTRgNC+0L3RgtC10L3QtC3RgNCw0LfRgNCw0LHQvtGC0YfQuNC6PC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBmbGV4LWNvbCBnYXAtNCAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9eyd0ZXh0LXhsIGZvbnQtYm9sZCBjb2xvci1wcmltYXJ5J30+INCe0L/QuNGB0LDQvdC40LU6IDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2ZsZXggZmxleC1jb2wgZmxleC0xIGdhcC00J30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCg0LDQt9GA0LDQsdC+0YLQutCwINC40L3QvdC+0LLQsNGG0LjQvtC90L3QvtC5INC/0LvQsNGC0YTQvtGA0LzRiyDQtNC70Y8g0YDRi9C90LrQsCDRgdGC0YDQvtC40YLQtdC70YzQvdGL0YVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0Lgg0YHQtdGA0LLQuNGB0L3Ri9GFINC60L7QvNC/0LDQvdC40LksINGA0LDQsdC+0YLQsNGO0YnQuNGFINC90LAg0L7RgdC+0LHQviDQvtC/0LDRgdC90YvRhSDQv9GA0L7QvNGL0YjQu9C10L3QvdGL0YUg0L7QsdGK0LXQutGC0LDRhSAo0L3QtdGE0YLRj9C90YvQtVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQutC+0LzQv9Cw0L3QuNC4LCDRhdC40LzQuNGH0LXRgdC60LjQtSDQv9GA0L7QuNC30LLQvtC00YHRgtCy0LAsINC/0YDQvtC40LfQstC+0LTQuNGC0LXQu9C4INC80LjQvdC10YDQsNC70YzQvdGL0YUg0YPQtNC+0LHRgNC10L3QuNC5KS4g0J/RgNC+0LTRg9C60YJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0Y/QstC70Y/QtdGC0YHRjyDRg9C90LjQutCw0LvRjNC90YvQvCBJdC3RgNC10YjQtdC90LjQtdC8INC00LvRjyDRgNGL0L3QutCwINGB0YLRgNC+0LjRgtC10LvRjNC90YvRhSDQuCDRgdC10YDQstC40YHQvdGL0YUg0YPRgdC70YPQsy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JrQvtC80LDQvdC00LAg0YPQttC1INC40LzQtdC10YIg0YPRgdC/0LXRiNC90YvQuSDQvtC/0YvRgiDRgdC+0LfQtNCw0L3QuNGPINGG0LjRhNGA0L7QstGL0YUg0L/RgNC+0LTRg9C60YLQvtCyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINC00LvRjyDQtNCw0L3QvdC+0Lkg0L7RgtGA0LDRgdC70LguXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQoNCw0LHQvtGC0LDQtdC8INC/0L4g0LrQvtC80YTQvtGA0YLQvdGL0Lwg0LzQtdGC0L7QtNC+0LvQvtCz0LjRj9C8INGBINGB0L7QstGA0LXQvNC10L3QvdGL0LzQuCDQuNC90YHRgtGA0YPQvNC10L3RgtCw0LzQuCAo0YfQtdGC0LrQviDRgdGC0LDQstC40LxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0LfQsNC00LDRh9C4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQsdC10Lcg0YTQvtGA0LzQsNC70LjQt9C80LAg0Lgg0LHRjtGA0L7QutGA0LDRgtC40LgsINCw0LrRhtC10L3RgiDQstGB0LXQs9C00LAg0LTQtdC70LDQtdC8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINC90LAg0YDQtdC30YPQu9GM0YLQsNGCKS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCg0LDQsdC+0YLQsNC10Lwg0L/QviBBZ2lsZSDRgSDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtdC8IFNDUlVNLCBLQU5CQU4g0Lgg0YIu0L8uLCDQsNC00LDQv9GC0LjRgNGD0LXQvCDQv9C+0LQg0L/QvtGC0YDQtdCx0L3QvtGB0YLQuFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQutC+0LzQsNC90LQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCX0LDQvdC40LzQsNC10LzRgdGPINGA0LXRhNCw0LrRgtC+0YDQuNC90LPQvtC8INC60L7QtNCwLCDQv9C10YDQuNC+0LTQuNGH0LXRgdC60Lgg0L7RgtCy0L7QtNC40Lwg0LLRgNC10LzRj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQtNC70Y8g0LfQsNC60YDRi9GC0LjRjyDRgtC10YXQvdC40YfQtdGB0LrQvtCz0L4g0LTQvtC70LPQsC5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQnNGLINC40YnQtdC8INCyINC60L7QvNCw0L3QtNGDINC+0L/Ri9GC0L3QvtCz0L4gRnJvbnRlbmQg0YDQsNC30YDQsNCx0L7RgtGH0LjQutCwIC0gTWlkZGxlLyBNaWRkbGUrINGD0YDQvtCy0L3RjyDRgVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQv9C10YDRgdC/0LXQutGC0LjQstC+0LlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0YDQvtGB0YLQsCDQsiDQutC+0LzQv9Cw0L3QuNC4INCyINGC0L7QvCDRh9C40YHQu9C1INCyINC90LDQv9GA0LDQstC70LXQvdC40LggRnVsbHN0YWNrLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBmbGV4LWNvbCBnYXAtNCAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9eyd0ZXh0LXhsIGZvbnQtYm9sZCBjb2xvci1wcmltYXJ5J30+INCe0LHRj9C30LDQvdC90L7RgdGC0Lg6IDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2ZsZXggZmxleC1jb2wgZmxleC0xIGdhcC00J30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCg0LDQt9GA0LDQsdC+0YLQutCwINC/0YDQvtCz0YDQsNC80LzQvdC+0LPQviDQv9GA0L7QtNGD0LrRgtCwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCg0LDQt9GA0LDQsdC+0YLQutCwINC90L7QstGL0YUg0LzQvtC00YPQu9C10Lkg0YHQuNGB0YLQtdC80YtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZhY2FuY2llczsiXSwibmFtZXMiOlsiSWNvbkFycm93IiwidXNlU3RhdGUiLCJNb2RhbCIsInVzZU1vZGFsIiwiVmFjYW5jaWVzIiwibW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwidG9nZ2xlIiwiY3VycmVudE1vZGFsIiwic2V0Q3VycmVudE1vZGFsIiwib3Blbk1vZGFsSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsImRpdiIsImgxIiwicCIsInRpdGxlIiwibWFwIiwiaXRlbSIsImluZGV4Iiwib25DbGljayIsInNwYW4iLCJpc0FjdGl2ZSIsImhhbmRsZUNsb3NlIiwiaDIiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/vacancies/page.tsx\n"));

/***/ })

});