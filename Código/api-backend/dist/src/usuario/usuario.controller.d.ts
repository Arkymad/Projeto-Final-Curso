import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';
export declare class UsuarioController {
    private readonly prisma;
    private authService;
    constructor(prisma: PrismaService, authService: AuthService);
    findAll(): Promise<import(".prisma/client").Usuario[]>;
    create(data: {
        religiao: number;
        igreja: number;
        nome: string;
        email: string;
        senha: string;
        status: boolean;
    }): Promise<import(".prisma/client").Usuario>;
    findOne(id: string): Promise<{
        data: import(".prisma/client").Usuario;
    }>;
    findByEmail(email: string): Promise<{
        data: import(".prisma/client").Usuario;
    }>;
    update(id: string, data: {
        religiao: number;
        igreja: number;
        nome: string;
        email: string;
        senha: string;
        status: boolean;
    }): Promise<import(".prisma/client").Usuario>;
    delete(id: string): Promise<import(".prisma/client").Usuario>;
    login(req: any): Promise<{
        access_token: string;
    }>;
}
