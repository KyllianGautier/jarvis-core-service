import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { environment } from './environment/environment';
import { INestApplication } from '@nestjs/common';
import { from, mergeMap, tap } from 'rxjs';

from(NestFactory.create(AppModule))
    .pipe(
        tap((app: INestApplication) => {
          app.setGlobalPrefix(environment.globalPrefix);
        }),
        mergeMap((app: INestApplication) => app.listen(environment.port))
    )
    .subscribe();
