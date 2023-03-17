import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('religiao')
export class ReligiaoController {
  constructor(
    private readonly prisma: PrismaService,
    private authService: AuthService
    ) {}

    
  @UseGuards(JwtAuthGuard)
  @Get('listar')
  async findAll() {
    const users = await this.prisma.getClient().religiao.findMany();
    return users;
  }

  @Post('cadastrar')
  async create(
    @Body() 
      data: { 
      nome: string, 
      descricao: string, 
    }) {
    const user = await this.prisma.getClient().religiao.create({
      data: {
        nome: data.nome,
        descricao: data.descricao,
      },
    });
    return user;
  }

  @Put(':id')
  async update(@Param('id') id: string, 
  @Body() 
  data: { 
    nome: string, 
    descricao: string, 
    }) {
    const user = await this.prisma.getClient().religiao.update({
      where: {
        id_religiao: parseInt(id),
      },
      data: {
        nome: data.nome,
        descricao: data.descricao,
      },
    });
    return user;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const user = await this.prisma.getClient().religiao.delete({
      where: {
        id_religiao: parseInt(id),
      },
    });
    return user;
  }

}
