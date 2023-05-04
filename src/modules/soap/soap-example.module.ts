import { Module } from '@nestjs/common';
import { SoapController } from './soap-example.controller';


@Module({
  imports: [],
  controllers: [SoapController],
  providers: [],
})
export class SoapExampleModule {}
