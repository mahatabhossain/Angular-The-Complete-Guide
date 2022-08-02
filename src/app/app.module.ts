import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// import { ServerComponent } from "./server/server.component";
// import { HeaderComponent } from "./header/header.component";
// import { RecipesComponent } from "./recipes/recipes.component";
// import { RecipesListComponent } from "./recipes/recipes-list/recipes-list.component";
// import { RecipesDetailComponent } from "./recipes/recipes-detail/recipes-detail.component";
// import { RecipeItemComponent } from "./recipes/recipes-list/recipe-item/recipe-item.component";
// import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
// import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
