import { Controller, Get, Inject } from '@nestjs/common';

import { Shopper3Service } from '../services/shopper3.service';

@Controller('shopper3')
export class Shopper3Controller {
    @Inject(Shopper3Service)
    private readonly shopper3Service: Shopper3Service;

    constructor(shopper3Service: Shopper3Service) {
        this.shopper3Service = shopper3Service;
    }

    @Get()
    findAll(): string {
        return this.shopper3Service.findAll();
    }
}