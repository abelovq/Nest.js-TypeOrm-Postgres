import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}
  getHello(): string {
    return '<h1 style="text-align:center; padding:20%">Your app API</h1>';
  }
}
