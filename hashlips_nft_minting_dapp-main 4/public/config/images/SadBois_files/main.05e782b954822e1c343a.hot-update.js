webpackHotUpdate("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: StyledButton, StyledRoundButton, ResponsiveWrapper, ResponsiveWrapper1, ResponsiveWrapper2, StyledLogo, MediaLogo, StyledImg, StyledImg1, StyledLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledButton", function() { return StyledButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledRoundButton", function() { return StyledRoundButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveWrapper", function() { return ResponsiveWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveWrapper1", function() { return ResponsiveWrapper1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveWrapper2", function() { return ResponsiveWrapper2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLogo", function() { return StyledLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaLogo", function() { return MediaLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledImg", function() { return StyledImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledImg1", function() { return StyledImg1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLink", function() { return StyledLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_blockchain_blockchainActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redux/blockchain/blockchainActions */ "./src/redux/blockchain/blockchainActions.js");
/* harmony import */ var _redux_data_dataActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/data/dataActions */ "./src/redux/data/dataActions.js");
/* harmony import */ var _styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/globalStyles */ "./src/styles/globalStyles.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/fabricioparis/Desktop/hashlips_nft_minting_dapp-main/src/App.js",
    _s = __webpack_require__.$Refresh$.signature();










const truncate = (input, len) => input.length > len ? `${input.substring(0, len)}...` : input;

const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  font-size:20px;
  background-color: var(--secondary);
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  padding: 20px;
  font-weight: bold;
  color: var(--secondary-text);
  width: 300px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    }
    :hover{
        background-color:pink;
    }
  
`;
_c = StyledButton;
const StyledRoundButton = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: var(--primary);
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;
_c2 = StyledRoundButton;
const ResponsiveWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 100%) {
    flex-direction: row;
  }
`;
_c3 = ResponsiveWrapper;
const ResponsiveWrapper1 = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;

  @media (min-width: 3px) {
    flex-direction: row;
  }
`;
_c4 = ResponsiveWrapper1;
const ResponsiveWrapper2 = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div`
display: flex;
flex: 1;
flex-direction: column;
justify-content: stretched;
align-items: stretched;
width: 100%;
@media (min-width: 1000px) {
  flex-direction: row;
}
`;
_c5 = ResponsiveWrapper2;
const StyledLogo = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].img`
  width: 900px;
  margin: 0px;
  height: 300px;
  
`;
_c6 = StyledLogo;
const MediaLogo = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].img`
marginTop:-200px;
display: flex;
flex: 1;
  
`;
const StyledImg = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].img`

    height: 760px;
    width: 500px;
    
    
  }
  
`;
_c7 = StyledImg;
const StyledImg1 = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].img`

    height: 1000px;
    width: 1000px;
    
    
  }
  
`;
const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].a`
  color: var(--secondary);
  text-decoration: none;
`;
_c8 = StyledLink;

function App() {
  _s();

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const blockchain = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.blockchain);
  const data = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.data);
  const [claimingNft, setClaimingNft] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [feedback, setFeedback] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const [CONFIG, SET_CONFIG] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods.mint(mintAmount).send({
      gasLimit: String(totalGasLimit),
      to: CONFIG.CONTRACT_ADDRESS,
      from: blockchain.account,
      value: totalCostWei
    }).once("error", err => {
      console.log(err);
      setFeedback("Sorry, something went wrong please try again later.");
      setClaimingNft(false);
    }).then(receipt => {
      console.log(receipt);
      setFeedback(`WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`);
      setClaimingNft(false);
      dispatch(Object(_redux_data_dataActions__WEBPACK_IMPORTED_MODULE_3__["fetchData"])(blockchain.account));
    });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;

    if (newMintAmount < 1) {
      newMintAmount = 1;
    }

    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;

    if (newMintAmount > 10) {
      newMintAmount = 10;
    }

    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(Object(_redux_data_dataActions__WEBPACK_IMPORTED_MODULE_3__["fetchData"])(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getConfig();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getData();
  }, [blockchain.account]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["Screen"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      flex: 1,
      jc: "center",
      ai: "center",
      style: {
        padding: 164,
        backgroundColor: "var(--primary)"
      },
      image: CONFIG.SHOW_BACKGROUND ? "/config/images/bg.png" : null,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["Container1"], {
        style: {
          hover: {
            opacity: .5
          }
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("il", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
              href: "https://twitter.com/SadBoisNFTs",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
                src: "/config/images/twitter.png",
                onClick: "https://arizonaatwork.com"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 251,
                columnNumber: 43
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 251,
              columnNumber: 1
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 8
          }, this), "  "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 1
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("il", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
              href: "https://twitter.com/SadBoisNFTs",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
                src: "/config/images/opensea.png",
                onClick: "https://arizonaatwork.com"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 254,
                columnNumber: 43
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 1
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 6
          }, this), "  "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 1
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          children: ["     ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("il", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
              href: "https://discord.gg/8dgtZEMr",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
                src: "/config/images/discord.png",
                onClick: "https://arizonaatwork.com"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 257,
                columnNumber: 39
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 257,
              columnNumber: 1
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 11
          }, this), "     "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 1
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 2
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(StyledLogo, {
        alt: "logo",
        src: "/config/images/logo.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 10
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
        flex: 1,
        ai: "center",
        style: {
          backgroundColor: "var(--primary)"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ResponsiveWrapper, {
          flex: 1,
          style: {
            margin: 0
          },
          test: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
            flex: 1,
            jc: "center",
            ai: "center"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerLarge"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
            flex: 2,
            jc: "center",
            ai: "center",
            style: {
              backgroundColor: "var(--accent)",
              paddingBottom: 10,
              borderRadius: 24
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["TextTitle"], {
              style: {
                textAlign: "center",
                fontSize: 50,
                fontWeight: "bold",
                color: "var(--accent-text)"
              },
              children: [data.totalSupply, " / ", CONFIG.MAX_SUPPLY]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 298,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["TextDescription"], {
              style: {
                textAlign: "center",
                color: "var(--primary-text)"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(StyledLink, {
                target: "_blank",
                href: CONFIG.SCAN_LINK,
                children: truncate(CONFIG.CONTRACT_ADDRESS, 15)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 314,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 308,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerSmall"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 318,
              columnNumber: 13
            }, this), Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["TextTitle"], {
                style: {
                  textAlign: "center",
                  color: "var(--accent-text)"
                },
                children: "The sale has ended."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 321,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["TextDescription"], {
                style: {
                  textAlign: "center",
                  color: "var(--accent-text)"
                },
                children: ["You can still find ", CONFIG.NFT_NAME, " on"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 326,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerSmall"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 331,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(StyledLink, {
                target: "_blank",
                href: CONFIG.MARKETPLACE_LINK,
                children: CONFIG.MARKETPLACE
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 332,
                columnNumber: 17
              }, this)]
            }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["TextTitle"], {
                style: {
                  textAlign: "center",
                  color: "var(--accent-text)"
                },
                children: ["1 ", CONFIG.SYMBOL, " costs ", CONFIG.DISPLAY_COST, " ", CONFIG.NETWORK.SYMBOL, "."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 338,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerXSmall"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 344,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["TextDescription"], {
                style: {
                  textAlign: "center",
                  color: "var(--accent-text)"
                },
                children: "Excluding gas fees."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 345,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerSmall"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 350,
                columnNumber: 17
              }, this), blockchain.account === "" || blockchain.smartContract === null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
                ai: "center",
                jc: "center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["TextDescription"], {
                  style: {
                    textAlign: "center",
                    color: "var(--accent-text)"
                  },
                  children: ["Connect to the ", CONFIG.NETWORK.NAME, " network"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 354,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerSmall"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 362,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(StyledButton, {
                  onClick: e => {
                    e.preventDefault();
                    dispatch(Object(_redux_blockchain_blockchainActions__WEBPACK_IMPORTED_MODULE_2__["connect"])());
                    getData();
                  },
                  children: "CONNECT"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 363,
                  columnNumber: 21
                }, this), blockchain.errorMsg !== "" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerSmall"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 374,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["TextDescription"], {
                    style: {
                      textAlign: "center",
                      color: "var(--accent-text)"
                    },
                    children: blockchain.errorMsg
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 375,
                    columnNumber: 25
                  }, this)]
                }, void 0, true) : null]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 353,
                columnNumber: 19
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["TextDescription"], {
                  style: {
                    textAlign: "center",
                    color: "var(--accent-text)"
                  },
                  children: feedback
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 388,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerMedium"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 396,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
                  ai: "center",
                  jc: "center",
                  fd: "row",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(StyledRoundButton, {
                    style: {
                      lineHeight: 0.4
                    },
                    disabled: claimingNft ? 1 : 0,
                    onClick: e => {
                      e.preventDefault();
                      decrementMintAmount();
                    },
                    children: "-"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 398,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerMedium"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 408,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["TextDescription"], {
                    style: {
                      textAlign: "center",
                      color: "var(--accent-text)"
                    },
                    children: mintAmount
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 409,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerMedium"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 417,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(StyledRoundButton, {
                    disabled: claimingNft ? 1 : 0,
                    onClick: e => {
                      e.preventDefault();
                      incrementMintAmount();
                    },
                    children: "+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 418,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 397,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerSmall"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 428,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
                  ai: "center",
                  jc: "center",
                  fd: "row",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(StyledButton, {
                    disabled: claimingNft ? 1 : 0,
                    onClick: e => {
                      e.preventDefault();
                      claimNFTs();
                      getData();
                    },
                    children: claimingNft ? "BUSY" : "BUY"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 430,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 429,
                  columnNumber: 21
                }, this)]
              }, void 0, true)]
            }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerMedium"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 445,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 288,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerLarge"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 447,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
            flex: 1,
            jc: "center",
            ai: "center"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 448,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerMedium"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 452,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 1
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ResponsiveWrapper1, {
      flex: 1,
      style: {
        margin: 50
      },
      test: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
        flex: 1,
        jc: "center",
        ai: "center",
        style: {
          marginLeft: 250
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(StyledImg, {
          src: "/config/images/sadbois.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 459,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 458,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerSmall"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 461,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
        flex: 2,
        jc: "center",
        ai: "center",
        style: {},
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["TextTitle"], {
          style: {
            textAlign: "center",
            fontSize: 50,
            fontWeight: "bold",
            color: "var(--accent-text)"
          },
          children: "Why Sad ?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 472,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["TextTitle"], {
          style: {
            textAlign: "Left",
            color: "var(--accent-text)",
            fontSize: 22
          },
          children: ["Missed out on a Blue Chip ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 487,
            columnNumber: 46
          }, this), "I got rugged for the 5th time.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 488,
            columnNumber: 31
          }, this), "No wifi. NGMI.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 489,
            columnNumber: 15
          }, this), "Forgot seed phrase.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 490,
            columnNumber: 20
          }, this), "I thought phishing was with a pole.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 491,
            columnNumber: 36
          }, this), "Mom kicked me out of basement", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 492,
            columnNumber: 30
          }, this), "When the airdrops a honey pot.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 493,
            columnNumber: 31
          }, this), "No one retweeted my pin tweet.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 494,
            columnNumber: 31
          }, this), "I said GM and everyone said GN.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 495,
            columnNumber: 32
          }, this), "My ex hacked my Metamask.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 496,
            columnNumber: 26
          }, this), "I ran out of weed.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 497,
            columnNumber: 19
          }, this), "My wife\u2019s boyfriend has 5 Bored Apes.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 498,
            columnNumber: 38
          }, this), "No one goes outside anymore.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 499,
            columnNumber: 29
          }, this), "I fat fingered my listing.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 500,
            columnNumber: 27
          }, this), "Bought Cute.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 501,
            columnNumber: 13
          }, this), "Not knowing that you are sad boi.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 502,
            columnNumber: 34
          }, this), "Cannot get verified in Discord.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 503,
            columnNumber: 32
          }, this), "No Pre-Sale list.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 504,
            columnNumber: 18
          }, this), "If you bought a rug, pitched a rug"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 483,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 462,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ResponsiveWrapper2, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
        flex: 1,
        jc: "center",
        ai: "center",
        style: {
          backgroundColor: "var(--primary)"
        },
        image: CONFIG.SHOW_BACKGROUND ? "/config/images/allbois.png" : null,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerSmall"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 526,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["TextTitle"], {
          style: {
            textAlign: "center",
            fontSize: 50,
            fontWeight: "bold",
            color: "var(--accent-text)"
          },
          children: "Why Sad ?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 528,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["TextTitle"], {
          style: {
            textAlign: "Left",
            color: "var(--accent-text)",
            fontSize: 22
          },
          children: ["Missed out on a Blue Chip ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 543,
            columnNumber: 44
          }, this), "I got rugged for the 5th time.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 544,
            columnNumber: 31
          }, this), "No wifi. NGMI.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 545,
            columnNumber: 15
          }, this), "Forgot seed phrase.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 546,
            columnNumber: 20
          }, this), "I thought phishing was with a pole.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 547,
            columnNumber: 36
          }, this), "Mom kicked me out of basement", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 548,
            columnNumber: 30
          }, this), "When the airdrops a honey pot.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 549,
            columnNumber: 31
          }, this), "No one retweeted my pin tweet.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 550,
            columnNumber: 31
          }, this), "I said GM and everyone said GN.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 551,
            columnNumber: 32
          }, this), "My ex hacked my Metamask.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 552,
            columnNumber: 26
          }, this), "I ran out of weed.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 553,
            columnNumber: 19
          }, this), "My wife\u2019s boyfriend has 5 Bored Apes.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 554,
            columnNumber: 38
          }, this), "No one goes outside anymore.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 555,
            columnNumber: 29
          }, this), "I fat fingered my listing.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 556,
            columnNumber: 27
          }, this), "Bought Cute.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 557,
            columnNumber: 13
          }, this), "Not knowing that you are sad boi.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 558,
            columnNumber: 34
          }, this), "Cannot get verified in Discord.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 559,
            columnNumber: 32
          }, this), "No Pre-Sale list.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 560,
            columnNumber: 18
          }, this), "If you bought a rug, pitched a rug"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 539,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 520,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 241,
    columnNumber: 5
  }, this);
}

_s(App, "uGHMuOhLrgqiCNB2T8fum4j1Kv4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c9 = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

__webpack_require__.$Refresh$.register(_c, "StyledButton");
__webpack_require__.$Refresh$.register(_c2, "StyledRoundButton");
__webpack_require__.$Refresh$.register(_c3, "ResponsiveWrapper");
__webpack_require__.$Refresh$.register(_c4, "ResponsiveWrapper1");
__webpack_require__.$Refresh$.register(_c5, "ResponsiveWrapper2");
__webpack_require__.$Refresh$.register(_c6, "StyledLogo");
__webpack_require__.$Refresh$.register(_c7, "StyledImg");
__webpack_require__.$Refresh$.register(_c8, "StyledLink");
__webpack_require__.$Refresh$.register(_c9, "App");

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
//# sourceMappingURL=main.05e782b954822e1c343a.hot-update.js.map