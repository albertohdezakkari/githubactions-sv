import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    const saludo = 'Hola NestJS'; // ❌ variable no usada

    return 'Hola mundo';
  }
}
