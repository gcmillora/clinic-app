import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentsController } from './appointments/appointments.controller';
import { AppointmentsModule } from './appointments/appointments.module';
import { AppointmentsService } from './appointments/appointments.service';
import { BookingsModule } from './bookings/bookings.module';
import { ClinicsModule } from './clinics/clinics.module';
import configuration from './config/configuration';
import { TimeslotsModule } from './timeslots/timeslots.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    ClinicsModule,
    AppointmentsModule,
    BookingsModule,
    TimeslotsModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  controllers: [AppController, AppointmentsController],
  providers: [AppService, AppointmentsService],
})
export class AppModule {}
