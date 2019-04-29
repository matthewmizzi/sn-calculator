import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpressionvalidatorComponent } from './expressionvalidator/expressionvalidator.component';
import { ExpressionevaluatorComponent } from './expressionevaluator/expressionevaluator.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { SuprcalculatorComponent } from './suprcalculator/suprcalculator.component';
import { CalcinputsComponent } from './components/calcinputs/calcinputs.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {path: 'expressvalidator', component: ExpressionvalidatorComponent},
  {path: 'expressevaluator', component: ExpressionevaluatorComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'suprcalculator', component: SuprcalculatorComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ExpressionvalidatorComponent,
    ExpressionevaluatorComponent,
    CalculatorComponent,
    SuprcalculatorComponent,
    CalcinputsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
