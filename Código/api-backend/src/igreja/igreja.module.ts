import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { TokenModule } from 'src/token/token.module';
import { IgrejaController } from './igreja.controller';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    forwardRef(() => TokenModule)
  ],
  controllers: [IgrejaController],
  providers: [
    PrismaService
  ],
  exports: [ ]
})
export class IgrejaModule {}