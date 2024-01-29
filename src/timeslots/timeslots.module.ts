import { Module } from '@nestjs/common';
import { TimeslotsService } from './timeslots.service';

@Module({
  providers: [TimeslotsService]
})
export class TimeslotsModule {}
