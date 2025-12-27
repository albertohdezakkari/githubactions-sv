import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    // const saludo = 'Hola NestJS'; // ❌ variable no usada
    const saludo = 'Hola NestJS';

    // return 'Hola mundo';
    return saludo;
  }
}
