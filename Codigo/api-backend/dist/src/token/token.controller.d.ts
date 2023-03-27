import { PrismaService } from 'src/prisma/prisma.service';
export declare class TokenController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    save(hash: string, email: string): Promise<void>;
    findAll(): Promise<import(".prisma/client").Token[]>;
    findOne(id: string): Promise<{
        data: import(".prisma/client").Token;
    }>;
    findByEmail(email: string): Promise<{
        data: import(".prisma/client").Token;
    }>;
}
