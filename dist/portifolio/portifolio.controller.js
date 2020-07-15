"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortifolioController = void 0;
const common_1 = require("@nestjs/common");
const portifolio_service_1 = require("./portifolio.service");
let PortifolioController = class PortifolioController {
    constructor(PortifolioService) {
        this.PortifolioService = PortifolioService;
    }
    findAll() {
        return this.PortifolioService.findAll();
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], PortifolioController.prototype, "findAll", null);
PortifolioController = __decorate([
    common_1.Controller('portifolio'),
    __metadata("design:paramtypes", [portifolio_service_1.PortifolioService])
], PortifolioController);
exports.PortifolioController = PortifolioController;
//# sourceMappingURL=portifolio.controller.js.map