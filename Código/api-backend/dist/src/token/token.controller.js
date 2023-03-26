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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TokenController = class TokenController {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async save(hash, email) {
        const upsertUser = await this.prisma.getClient().token.upsert({
            where: {
                email,
            },
            update: {
                hash,
            },
            create: {
                email: email,
                hash: hash,
            },
        });
    }
    async findAll() {
        const token = await this.prisma.getClient().token.findMany();
        return token;
    }
    async findOne(id) {
        const token = await this.prisma.getClient().token.findUnique({ where: { id: parseInt(id, 10) } });
        return { data: token };
    }
    async findByEmail(email) {
        const token = await this.prisma.getClient().token.findUnique({ where: { email } });
        return { data: token };
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TokenController.prototype, "save", null);
__decorate([
    (0, common_1.Get)('listar'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TokenController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TokenController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('email/:email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TokenController.prototype, "findByEmail", null);
TokenController = __decorate([
    (0, common_1.Controller)('token'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TokenController);
exports.TokenController = TokenController;
//# sourceMappingURL=token.controller.js.map