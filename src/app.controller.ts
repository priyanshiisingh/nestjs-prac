import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app') //http:localhost:3000/app
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello') //http:localhost:3000/app/hello
  getHello(): string {
    return this.appService.getHello();
  }
}
