import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpressionvalidatorComponent } from './expressionvalidator/expressionvalidator.component';

const appRoutes: Routes = [
  {path: 'expressvalidator', component: ExpressionvalidatorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ExpressionvalidatorComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
