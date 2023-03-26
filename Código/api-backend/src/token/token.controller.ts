import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('token')
export class TokenController {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  @Post()
  async save(@Body() hash: string, email: string) {
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
    })
  }

  @Get('listar')
  async findAll() {
    const token = await this.prisma.getClient().token.findMany();
    return token;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const token = await this.prisma.getClient().token.findUnique({ where: { id: parseInt(id, 10) } });
    return { data: token };
  }
  
  @Get('email/:email')
  async findByEmail(@Param('email') email: string) {
    const token = await this.prisma.getClient().token.findUnique({ where: { email } });
    return { data: token };
  }
}
