import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { CatService } from './services/cat.service';

import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { GaService } from './services/ga.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
// import { GolfclubsComponent } from './golfclub/golfclubs.component';
// import { GolfclubsPagination } from './golfclub/golfclubs-pagination';
import { SearchFilter } from './golfclub/search-filter.pipe';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { ShopModule } from './shop/shop.module';
import { BoxofficeModule } from './boxoffice/boxoffice.module';
import { GolfclubsModule } from './golfclub/golfclubs.module';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    // GolfclubsComponent,
    SearchFilter,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    AdminComponent
  ],
  imports: [
    
    ShopModule,
    BoxofficeModule,
    GolfclubsModule,
    RoutingModule,
    SharedModule
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    CatService,
    GaService,
    // GolfclubsPagination,
    UserService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
