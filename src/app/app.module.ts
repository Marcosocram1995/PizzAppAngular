import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaListComponent } from './component/pizza-list/pizza-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel';
import { ChipModule } from 'primeng/chip';
import { FooterComponent } from './component/footer/footer.component';
import { CardModule } from 'primeng/card';
import { NavComponent } from './component/nav/nav.component';
import { LoadingListComponent } from './component/loading-list/loading-list.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    FooterComponent,
    NavComponent,
    LoadingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ButtonModule,
    BrowserAnimationsModule,
    CarouselModule,
    ChipModule,
    CardModule,
    NgxSkeletonLoaderModule,
    OverlayPanelModule,
    InputTextModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }