import { Module } from '@nestjs/common';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { MedicalModule } from './modules/medical/medical.module';
import { SoapExampleModule } from './modules/soap/soap-example.module';

@Module({
  imports: [AuthenticationModule, MedicalModule,SoapExampleModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
