module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ IndexPage; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/StatsImage.js

var __jsx = external_react_default.a.createElement;
function StatsImage({
  url
}) {
  return __jsx("img", {
    src: url,
    alt: "Global Stats",
    className: "globalStatsImg"
  });
}
// CONCATENATED MODULE: ./utils/useStats.js

function useStats(url) {
  const {
    0: stats,
    1: setStats
  } = Object(external_react_["useState"])();
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(true);
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])();
  Object(external_react_["useEffect"])(() => {
    console.log('Mounting or updating');

    async function fetchData() {
      setLoading(true);
      setError();
      console.log('Fetching Data');
      const data = await fetch(url).then(res => res.json()).catch(err => {
        setError(err);
      });
      setStats(data);
      setLoading(false);
    }

    fetchData();
  }, [url]);
  return {
    stats,
    loading,
    error
  };
}
// CONCATENATED MODULE: ./components/Stats.js

var Stats_jsx = external_react_default.a.createElement;


const StatGrid = external_styled_components_default.a.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const StatBlock = external_styled_components_default.a.div`
  background: #f2f2f2;
  font-size: 2rem;
  padding: 2rem;
  border-radius: 1rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding:1rem 0 2rem 0;
  }
`;
const StatBlockConfirmed = external_styled_components_default()(StatBlock)`
  background:orange;
`;
const StatBlockDeaths = external_styled_components_default()(StatBlock)`
  background:red;
`;
const StatBlockRecovered = external_styled_components_default()(StatBlock)`
  background:green;
`;
const LastUpdated = external_styled_components_default.a.div`
font-size:0.8rem;
border-radius:0.5rem;
padding:0.5rem;
text-align:left;

@media (max-width: 768px) {
    text-align:center
  }

`;
function Stats({
  url
}) {
  const {
    stats,
    loading,
    error
  } = useStats(url);
  console.log(stats, loading, error);
  if (loading) return Stats_jsx("p", null, "Loading...");
  if (error) return Stats_jsx("p", null, "Error...");
  return Stats_jsx(StatGrid, null, Stats_jsx(StatBlockConfirmed, null, Stats_jsx("h3", null, "Confirmed:"), Stats_jsx("span", null, stats.confirmed.value.toLocaleString())), Stats_jsx(StatBlockDeaths, null, Stats_jsx("h3", null, "Deaths:"), Stats_jsx("span", null, stats.deaths.value.toLocaleString())), Stats_jsx(StatBlockRecovered, null, Stats_jsx("h3", null, "Recovered:"), Stats_jsx("span", null, stats.recovered.value.toLocaleString())), Stats_jsx(LastUpdated, null, "Last updated: ", stats.lastUpdate));
}
// CONCATENATED MODULE: ./components/CountrySelector.js

var CountrySelector_jsx = external_react_default.a.createElement;



function CountrySelector() {
  const {
    stats: countries,
    loading,
    error
  } = useStats('https://covid19.mathdro.id/api/countries');
  const {
    0: selectedCountry,
    1: setSelectedCountry
  } = Object(external_react_["useState"])('BRB');
  if (loading) return CountrySelector_jsx("p", null, "Loading...");
  if (loading) return CountrySelector_jsx("p", null, "Loading...");
  if (error) return CountrySelector_jsx("p", null, "Error...");
  let newStructure = {
    countries: {},
    iso3: {}
  };

  for (let country of countries.countries) {
    newStructure.countries[country.name] = country.iso2;
    newStructure.iso3[country.iso2] = country.iso3;
  }

  return CountrySelector_jsx("div", {
    className: "countrySelector"
  }, CountrySelector_jsx("h2", null, "Currently Showing ", selectedCountry), CountrySelector_jsx("select", {
    onChange: e => {
      setSelectedCountry(e.target.value);
    }
  }, Object.entries(newStructure.countries).map(([country, code]) => CountrySelector_jsx("option", {
    selected: selectedCountry === newStructure.iso3[code],
    key: code,
    value: newStructure.iso3[code]
  }, country))), CountrySelector_jsx(Stats, {
    url: `https://covid19.mathdro.id/api/countries/${selectedCountry}`
  }));
}
// CONCATENATED MODULE: ./components/Footer.js

var Footer_jsx = external_react_default.a.createElement;

const Credits = external_styled_components_default.a.div`
font-size:0.8rem;
 border-top:2px solid #222;
 padding-top:1rem;
 margin-top:1rem;
`;
const Credit = external_styled_components_default.a.div`
 font-size:0.8rem;
 text-align:center
`;
function Footer() {
  return Footer_jsx(external_react_default.a.Fragment, null, Footer_jsx(Credits, null, Footer_jsx(Credit, null, Footer_jsx("h4", null, "Credits")), Footer_jsx(Credit, null, "Thank you to ", Footer_jsx("a", {
    href: "https://github.com/wesbos/rona/",
    title: "Wes Bos Rona Github project"
  }, "Wes Bos"), " for the tutorial"), Footer_jsx(Credit, null, "Stats provided by: ", Footer_jsx("a", {
    href: "https://covid19.mathdro.id/api/",
    title: "Covid-19 api"
  }, "@mathdroid"))));
}
// CONCATENATED MODULE: ./pages/index.js

var pages_jsx = external_react_default.a.createElement;





const GlobalStyle = external_styled_components_["createGlobalStyle"]`

* { margin: 0; padding:0 }

  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  h1,h2,h3 {
      margin:1rem 0;
      @media (max-width: 768px) {
        text-align:center
      }
  }

  .wrapper { padding:1rem; }

  .countrySelector {
      text-align:center;
      margin: 0 auto;
  }

  .countrySelector select {
      margin:1rem 0;
      padding:0.5rem;
      border-radius:0.5rem;
      width:100%;
  }

  .globalStatsImg {
      width:100%;
      @media (max-width:768px) {
          display:none
      }
  }

  .globalStatsImg + div {
      @media (min-width:769px) {
          display:none;
      }
  }
}

`;
function IndexPage() {
  return pages_jsx("div", {
    className: "wrapper"
  }, pages_jsx(GlobalStyle, null), pages_jsx("h1", null, "Covid-19 Global Stats"), pages_jsx(StatsImage, {
    url: "https://covid19.mathdro.id/api/og"
  }), pages_jsx(Stats, {
    className: "globalStats",
    url: "https://covid19.mathdro.id/api"
  }), pages_jsx(CountrySelector, null), pages_jsx(Footer, null));
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });