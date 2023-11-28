import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { LoginformComponent } from './loginform/loginform.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { GetallusersComponent } from './getallusers/getallusers.component';
import { SearchuserPipe } from './pipe/searchuser.pipe';
import { ProductModalComponent } from './product-modal/product-modal.component';


@NgModule({
  declarations: [AppComponent, NotfoundComponent, RegisterComponent, AdminhomeComponent, UserhomeComponent, LoginformComponent, AdmindashboardComponent, AddproductComponent, GetallusersComponent, SearchuserPipe, ProductModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
