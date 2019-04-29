import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatSelectModule,
    MatCardModule
} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatSelectModule,
        MatCardModule
    ],
    exports: [
        MatToolbarModule,
        MatSelectModule,
        MatCardModule
    ],
})
export class CustomMaterialModule { }
