import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';
export declare class ReligiaoController {
    private readonly prisma;
    private authService;
    constructor(prisma: PrismaService, authService: AuthService);
    findAll(): Promise<import(".prisma/client").religiao[]>;
    create(data: {
        nome: string;
        descricao: string;
    }): Promise<import(".prisma/client").religiao>;
    update(id: string, data: {
        nome: string;
        descricao: string;
    }): Promise<import(".prisma/client").religiao>;
    delete(id: string): Promise<import(".prisma/client").religiao>;
}
