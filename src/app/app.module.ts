import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { TrendsComponent } from './trends/trends.component';
import { ControllerComponent } from './controller/controller.component';
import { WaterPlantComponent } from './water-plant/water-plant.component';
import { DocsComponent } from './docs/docs.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    TrendsComponent,
    ControllerComponent,
    WaterPlantComponent,
    DocsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([                                          //questa è praticamente la definizione dell'albero di navigazione che verrà
                                                                    //seguito dak router.
      { path: 'home', redirectTo: '', pathMatch: 'full' },          //se il path è home fai il redirect all'url ''. In questo modo root = home
      { path: '', component: HomeComponent },                       //se il path è '' carica il component 'home'.
      { path: 'trends', component: TrendsComponent },
      { path: 'controller', component: ControllerComponent },
      { path: 'waterplant', component: WaterPlantComponent },
      { path: 'docs', component: DocsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
