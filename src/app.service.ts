import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAlive(): { alive: boolean } {
    return { alive: true };
  }
}
