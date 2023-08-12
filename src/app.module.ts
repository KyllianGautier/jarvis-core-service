import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ClientResourcesModule } from './client-resources/client-resources.module';

@Module({
  imports: [
      UserModule,
    AuthenticationModule,
    ClientResourcesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
