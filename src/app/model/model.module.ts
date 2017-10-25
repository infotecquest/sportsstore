import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";

@NgModule({
    //which classes are based by DepencyInjection
    providers: [ProductRepository, StaticDataSource]
})
export class ModelModule {}
