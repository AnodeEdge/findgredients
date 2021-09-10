"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require("axios");
const accessPoint = " https://api.edamam.com/api/recipes/v2";
// const edamam_app_id = "app_id=" + process.env.REACT_APP_ID;
// const edamam_api_key = "app_key=" + process.env.REACT_APP_API_KEY;
const edamamAPI = {
    app_id: "adf318f9",
    app_key: "246ca4737cfa9f606088ce77431a86ee",
    type: "public"
};
const buildQueryString = (params) => {
    return Object.keys(params).map(key => key + '=' + params[key]).join('&');
};
const buildEndpoint = (params) => {
    return accessPoint + "?" + buildQueryString(edamamAPI) + "&" + buildQueryString(params);
};
const getRecipes = (params) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield axios.get(buildEndpoint(params));
        // console.log(data.data)
        console.log("Successfully retrieved recipes");
        return data;
    }
    catch (error) {
        console.log("error", error);
    }
});
const getNextRecipes = (params) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(params.q);
        let data = yield axios.get(params.q);
        // console.log(data.data)
        console.log("Successfully retrieved next recipes");
        return data;
    }
    catch (error) {
        console.log("error", error);
    }
});
exports.default = { getRecipes, getNextRecipes };
//# sourceMappingURL=edemamRequestHandler.js.map