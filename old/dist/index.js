"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes = require('./routes');
// mongoose.connect("mongod://localhost:27017/findgredients")
const app = express_1.default();
const port = 5000;
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cors_1.default());
app.use(routes);
// app.get("/", (request, response) => {
//   console.log(request.query)
//   response.json({ query: request.query.q });
// });
// app.get("/recipes", async (request, response) => {
//   console.log("Request query contains: " + JSON.stringify(request.query)) 
//   let data = await getRecipes(request.query)
//   response.json(data.data)
// })
app.listen(port, () => console.log(`Findgredient API listening on port ${port}`));
//# sourceMappingURL=index.js.map