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
    const events = await this.prisma.getClient().evento.findMany();
    return events;
  }

  @Post('cadastrar')
  async create(
    @Body() 
      data: { 
        religiao: string,
        nome: string,
        endereco: string,
        data: string,
        tipo: boolean,
        descricao: string,
    }) {
    const event = await this.prisma.getClient().evento.create({
      data: {
        religiao: data.religiao,
        nome: data.nome,
        endereco: data.endereco,
        data: data.data,
        tipo: data.tipo,
        descricao: data.descricao
      },
    });
    return event;
  }

  @Put(':id')
  async update(@Param('id') id: string, 
  @Body() 
  data: { 
    religiao: string,
    nome: string,
    endereco: string,
    data: string,
    tipo: boolean,
    descricao: string,
    }) {
    const event = await this.prisma.getClient().evento.update({
      where: {
        id_evento: parseInt(id),
      },
      data: {
        religiao: data.religiao,
        nome: data.nome,
        endereco: data.endereco,
        data: data.data,
        tipo: data.tipo,
        descricao: data.descricao
      },
    });
    return event;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const event = await this.prisma.getClient().evento.delete({
      where: {
        id_evento: parseInt(id),
      },
    });
    return event;
  }
  
}
