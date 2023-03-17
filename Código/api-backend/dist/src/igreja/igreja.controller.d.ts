import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';
export declare class IgrejaController {
    private readonly prisma;
    private authService;
    constructor(prisma: PrismaService, authService: AuthService);
    findAll(): Promise<import(".prisma/client").igreja[]>;
    create(data: {
        religiao: number;
        nome: string;
        endereco: string;
    }): Promise<import(".prisma/client").igreja>;
    update(id: string, data: {
        religiao: number;
        nome: string;
        endereco: string;
    }): Promise<import(".prisma/client").igreja>;
    delete(id: string): Promise<import(".prisma/client").igreja>;
}
