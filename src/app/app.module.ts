import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RequerimientosListComponent } from './requerimientos-list/requerimientos-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdresApiService } from './services/adres-api.service';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { RequerimientosDetailComponent } from './requerimientos-detail/requerimientos-detail.component';

@NgModule({
  imports: [
    MatSlideToggleModule,
    MatTableModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RequerimientosDetailComponent,
    RequerimientosListComponent,
    RouterModule.forRoot([
      { path: '', component: RequerimientosListComponent },
    ]),
  ],
  declarations: [AppComponent, TopBarComponent, ProductListComponent],
  bootstrap: [AppComponent],
  providers: [provideAnimationsAsync(), AdresApiService],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
