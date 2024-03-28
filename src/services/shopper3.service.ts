import { Injectable } from '@nestjs/common';

@Injectable()
export class Shopper3Service {
    findAll(): string {
        return 'Hello from shopper3 service';
    }
}