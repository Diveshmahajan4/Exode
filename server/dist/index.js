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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const simple_git_1 = __importDefault(require("simple-git"));
const utils_1 = require("./utils");
const app = (0, express_1.default)();
// Define a port for the server to listen on
const PORT = process.env.PORT || 3000;
// Middleware to parse JSON bodies
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post('/deploy', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const url = req.body.repourl;
    // Process the data
    // console.log(url);
    const id = (0, utils_1.generate)();
    // cloning the repo
    yield (0, simple_git_1.default)().clone(url, `./output/${id}`);
    res.status(200).json({ message: 'URL received successfully' });
}));
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
