import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';
export declare class EventoController {
    private readonly prisma;
    private authService;
    constructor(prisma: PrismaService, authService: AuthService);
    findAll(): Promise<import(".prisma/client").evento[]>;
    create(data: {
        religiao: string;
        nome: string;
        endereco: string;
        data: string;
        tipo: boolean;
        descricao: string;
    }): Promise<import(".prisma/client").evento>;
    update(id: string, data: {
        religiao: string;
        nome: string;
        endereco: string;
        data: string;
        tipo: boolean;
        descricao: string;
    }): Promise<import(".prisma/client").evento>;
    delete(id: string): Promise<import(".prisma/client").evento>;
}
