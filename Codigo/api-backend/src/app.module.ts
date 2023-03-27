import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { IonicCorsMiddleware } from 'middlewares/ionic-cors.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssinaturaModule } from './assinatura/assinatura.module';
import { AuthModule } from './auth/auth.module';
import { ClienteModule } from './cliente/cliente.module';
import { CobrancaModule } from './cobranca/cobranca.module';
import { EventoModule } from './evento/evento.module';
import { IgrejaModule } from './igreja/igreja.module';
import { PagamentoModule } from './linkdepagamento/pagamento.module';
import { PrismaService } from './prisma/prisma.service';
import { ReligiaoModule } from './religiao/religiao.module';
import { AsaasService } from './services/asaas.service';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    AuthModule,
    AssinaturaModule,
    ClienteModule,
    CobrancaModule,
    ConfigModule,
    EventoModule,
    IgrejaModule,
    PagamentoModule,
    ReligiaoModule,
    UsuarioModule
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, AsaasService, IonicCorsMiddleware],
  exports: [PrismaService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(IonicCorsMiddleware).forRoutes('*');
  }
}