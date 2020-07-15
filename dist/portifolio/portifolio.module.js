"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortifolioModule = void 0;
const common_1 = require("@nestjs/common");
const portifolio_controller_1 = require("./portifolio.controller");
const portifolio_service_1 = require("./portifolio.service");
let PortifolioModule = class PortifolioModule {
};
PortifolioModule = __decorate([
    common_1.Module({
        controllers: [portifolio_controller_1.PortifolioController],
        providers: [portifolio_service_1.PortifolioService],
        exports: [portifolio_service_1.PortifolioService]
    })
], PortifolioModule);
exports.PortifolioModule = PortifolioModule;
//# sourceMappingURL=portifolio.module.js.map