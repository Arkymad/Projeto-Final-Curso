import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('evento')
export class EventoController {
  constructor(
    private readonly prisma: PrismaService,
    private authService: AuthService
    ) {}

    
  @UseGuards(JwtAuthGuard)
  @Get('listar')
  async findAll() {
    const users = await this.prisma.getClient().evento.findMany();
    return users;
  }

  @Post('cadastrar')
  async create(
    @Body() 
      data: { 
      usuario: number, 
      data: Date, 
      endereco: string, 
      tipo: boolean, 
      descricao: string, 
    }) {
    const user = await this.prisma.getClient().evento.create({
      data: {
        usuario_id: data.usuario,
        data: data.data,
        endereco: data.endereco,
        tipo: data.tipo,
        descricao: data.descricao
      },
    });
    return user;
  }

  @Put(':id')
  async update(@Param('id') id: string, 
  @Body() 
  data: { 
    usuario: number, 
    data: Date, 
    endereco: string, 
    tipo: boolean, 
    descricao: string, 
    }) {
    const user = await this.prisma.getClient().evento.update({
      where: {
        id_evento: parseInt(id),
      },
      data: {
        usuario_id: data.usuario,
        data: data.data,
        endereco: data.endereco,
        tipo: data.tipo,
        descricao: data.descricao
      },
    });
    return user;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const user = await this.prisma.getClient().evento.delete({
      where: {
        id_evento: parseInt(id),
      },
    });
    return user;
  }
  
}
