webpackHotUpdate("main",{

/***/ "./src/styles/globalStyles.js":
/*!************************************!*\
  !*** ./src/styles/globalStyles.js ***!
  \************************************/
/*! exports provided: Screen, SpacerXSmall, SpacerSmall, SpacerMedium, SpacerLarge, Container, ResponsiveWrapper, Container1, TextTitle, TextSubTitle, TextDescription, StyledClickable, grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return Screen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpacerXSmall", function() { return SpacerXSmall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpacerSmall", function() { return SpacerSmall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpacerMedium", function() { return SpacerMedium; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpacerLarge", function() { return SpacerLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveWrapper", function() { return ResponsiveWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container1", function() { return Container1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextTitle", function() { return TextTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextSubTitle", function() { return TextSubTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDescription", function() { return TextDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledClickable", function() { return StyledClickable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grid", function() { return grid; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

 // Used for wrapping a page component

const Screen = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  background-color: var(--primary);
  background-image: ${({
  image
}) => image ? `url(${image})` : "none"};
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`; // Used for providing space between components

const SpacerXSmall = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  height: 8px;
  width: 8px;
`; // Used for providing space between components

const SpacerSmall = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  height: 16px;
  width: 16px;
`; // Used for providing space between components

const SpacerMedium = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  height: 24px;
  width: 24px;
`; // Used for providing space between components

const SpacerLarge = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  height: 32px;
  width: 32px;
`; // Used for providing a wrapper around a component

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex: ${({
  flex
}) => flex ? flex : 0};
  flex-direction: ${({
  fd
}) => fd ? fd : "column"};
  justify-content: ${({
  jc
}) => jc ? jc : "flex-start"};
  align-items: ${({
  ai
}) => ai ? ai : "flex-start"};
  background-color: ${({
  test
}) => test ? "pink" : "none"};
  width: 100%;
  background-image: ${({
  image
}) => image ? `url(${image})` : "none"};
  background-size: cover;
  background-position: center;
  @media (min-width: 100%) {
    flex-direction: row;
  }
`;
const ResponsiveWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;
const Container1 = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
position:absolute;
top:20px;
left:200px:
margin:50px;
display: flex;
  flex: ${({
  flex
}) => flex ? flex : 0};
@media (min-width: 3px) {
  flex-direction: row;
}
  background-color: ${({
  test
}) => test ? "pink" : "none"};
 
  background-image: ${({
  image
}) => image ? `url(${image})` : "none"};
  background-size: cover;
  
`;
const TextTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  color: var(--primary-text);
  font-size: 22px;
  font-weight: 500;
  line-height: 1.6;
`;
const TextSubTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  color: var(--primary-text);
  font-size: 18px;
  line-height: 1.6;
`;
const TextDescription = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  color: var(--primary-text);
  font-size: 16px;
  line-height: 1.6;
`;
const StyledClickable = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  :active {
    opacity: 0.6;
  }
`;
const grid = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
display:inline-block;
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.6f9f79cd3dba5876301f.hot-update.js.map