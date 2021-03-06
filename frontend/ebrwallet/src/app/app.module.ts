import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Imports for loading & configuring the in-memory api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

// Project Modules
import { AppRoutingModule} from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { EthereumModule} from './ethereum/ethereum.module';
import { BitcoinModule} from './bitcoin/bitcoin.module';
import { DonationModule} from './donation/donation.module';

import {AccordionModule} from "ng2-accordion";

// Project Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { CancelFeedbackComponent } from './feedback/cancel-feedback.component';
import { FormControlMessages } from './shared/components/control-validation-message.component';
import { EmailControlMessages } from './shared/components/email-validation-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelpComponent,
    CancelFeedbackComponent,
    FormControlMessages,
    EmailControlMessages
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {
      passThruUnknownUrl: true
    }),
    AppRoutingModule,
    AuthModule,
    EthereumModule,
    BitcoinModule,
    DonationModule,
    AccordionModule
  ],
  providers: [  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
