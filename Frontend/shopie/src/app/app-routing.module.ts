import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { LoginformComponent } from './loginform/loginform.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { GetallusersComponent } from './getallusers/getallusers.component';
import { ProductModalComponent } from './product-modal/product-modal.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginformComponent },
  { path: 'adminhome', component: AdminhomeComponent },
  { path: 'adminusers', component: GetallusersComponent },
  { path: 'adminaddproduct', component: AddproductComponent },
  { path: 'user', component: UserhomeComponent },
  { path: 'viewproduct/:id', component: ProductModalComponent },

  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
