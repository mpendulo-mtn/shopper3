import { Module } from '@nestjs/common';

import { Shopper3Controller } from './controller/shopper3.controller';
import { Shopper3Service } from './services/shopper3.service';

@Module({
    controllers: [Shopper3Controller],
    providers: [Shopper3Service]
})
export class Shopper3Module {}