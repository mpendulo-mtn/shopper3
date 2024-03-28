import { NestFactory } from '@nestjs/core';

import { Shopper3Module } from './shopper3.module';

const bootstrap = async () => {
    const app = await NestFactory.create(Shopper3Module);
    await app.listen(3000);
}

bootstrap();