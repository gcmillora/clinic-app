import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ClinicsModule } from './clinics/clinics.module';
import { AppointmentsService } from './appointments/appointments.service';
import { AppointmentsController } from './appointments/appointments.controller';
import { AppointmentsModule } from './appointments/appointments.module';
import { BookingsModule } from './bookings/bookings.module';
import { TimeslotsModule } from './timeslots/timeslots.module';

@Module({
  imports: [
    UsersModule,
    ClinicsModule,
    AppointmentsModule,
    BookingsModule,
    TimeslotsModule,
  ],
  controllers: [AppController, AppointmentsController],
  providers: [AppService, AppointmentsService],
})
export class AppModule {}
