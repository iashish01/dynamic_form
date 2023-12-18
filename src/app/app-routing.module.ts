import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicformComponent } from './jsonform/dynamicform/dynamicform.component';
import { FormRenderComponent } from './form-module/render/form-render/form-render.component';

const routes: Routes = [
  {path:'dynamicForm',component:DynamicformComponent},
  {path:'formRender',component:FormRenderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
