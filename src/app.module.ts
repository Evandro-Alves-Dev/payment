import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreditCardController } from './credit-card/credit-card.controller';
import { ConfigModule } from '@nestjs/config';
import { CreditCardModule } from './credit-card/credit-card.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }),
  CreditCardModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
