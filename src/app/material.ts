import {MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatFormFieldModule, MatLabel, MatFormFieldControl, MatInputModule, MatSelectModule, MatExpansionModule, MatSnackBarModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,
     MatCardModule, MatMenuModule, MatToolbarModule,MatExpansionModule,
      MatIconModule, MatDialogModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatSnackBarModule],

  exports: [MatButtonModule, MatCheckboxModule,MatSelectModule,
     MatCardModule, MatMenuModule,MatExpansionModule,
      MatToolbarModule, MatIconModule, MatDialogModule,MatFormFieldModule,MatInputModule,MatSnackBarModule],
})
export class MaterialModule { }
