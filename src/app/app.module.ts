import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatCardModule,
  MatTabsModule,
  MatRadioModule,
  MatDialogModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatRippleModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatSlideToggleModule,
  MatNativeDateModule,
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GameInfoListComponent } from './components/game-info-list/game-info-list.component';

import { AuthComponent } from './routes/auth/auth.component';
import { GameListComponent } from './routes/game-list/game-list.component';
import { PlayComponent } from './routes/play/play.component';
import { AboutComponent } from './routes/about/about.component';
import { SettingsComponent } from './routes/settings/settings.component';
import { InstallComponent } from './components/dialogs/install/install.component';
import { RegistComponent } from './components/dialogs/regist/regist.component';
import { SafeResourceUrlPipe } from './pipes/safe-resource-url.pipe';
import { PaymentComponent } from './components/dialogs/payment/payment.component';
import { UpdateStComponent } from './components/dialogs/update-st/update-st.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    GameListComponent,
    PlayComponent,
    AboutComponent,
    SettingsComponent,
    GameInfoListComponent,
    InstallComponent,
    RegistComponent,
    SafeResourceUrlPipe,
    PaymentComponent,
    UpdateStComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatRadioModule,
  ],
  entryComponents: [
    InstallComponent,
    RegistComponent,
    PaymentComponent,
    UpdateStComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
