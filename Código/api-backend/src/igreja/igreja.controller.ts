import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('igreja')
export class IgrejaController {
  constructor(
    private readonly prisma: PrismaService,
    private authService: AuthService
    ) {}

    
  @UseGuards(JwtAuthGuard)
  @Get('listar')
  async findAll() {
    const users = await this.prisma.getClient().igreja.findMany();
    return users;
  }

  @Post('cadastrar')
  async create(
    @Body() 
      data: { 
      religiao: number, 
      nome: string, 
      endereco: string, 
    }) {
    const user = await this.prisma.getClient().igreja.create({
      data: {
        religiao_id: data.religiao,
        nome: data.nome,
        endereco: data.endereco,
      },
    });
    return user;
  }

  @Put(':id')
  async update(@Param('id') id: string, 
  @Body() 
  data: { 
    religiao: number, 
    nome: string, 
    endereco: string, 
    }) {
    const user = await this.prisma.getClient().igreja.update({
      where: {
        id_igreja: parseInt(id),
      },
      data: {
        religiao_id: data.religiao,
        nome: data.nome,
        endereco: data.endereco,
      },
    });
    return user;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const user = await this.prisma.getClient().igreja.delete({
      where: {
        id_igreja: parseInt(id),
      },
    });
    return user;
  }
  
}
