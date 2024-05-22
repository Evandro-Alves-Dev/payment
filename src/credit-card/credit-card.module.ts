import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { CreditCardController } from "./credit-card.controller";
import { CreditCardService } from "./credit-card.service";
import { ClientsModule, Transport } from "@nestjs/microservices";


@Module({
    imports: [
        ClientsModule.register([{
            name: 'NOTIFICATION_SERVICE',
            transport: Transport.RMQ,
            options: {
                urls: ['amqp://admin:123456@localhost'],
                queue: 'notification',
                noAck: true,
                queueOptions: {
                    durable: true
                },
            },
        }])
    ],
    controllers: [CreditCardController],
    providers: [PrismaService, CreditCardService],
    exports: []
})
export class CreditCardModule { }
