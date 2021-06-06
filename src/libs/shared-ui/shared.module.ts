import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NotFoundErrorComponent } from './components/not-found-error/not-found-error.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSliderModule} from '@angular/material/slider';
import {MatPaginatorModule} from '@angular/material/paginator';
import { RangeSelectorComponent } from './components/range-selector/range-selector.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RangeDialogComponent } from './components/range-dialog/range-dialog.component';
import { CustomMultiselectComponent } from './components/custom-multiselect/custom-multiselect.component';
import { MultiselectDialogComponent } from './components/multiselect-dialog/multiselect-dialog.component';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatSelectModule,
  MatSliderModule,
  MatPaginatorModule,
  MatChipsModule,
  MatProgressSpinnerModule
];

const ANGULAR_MODULES = [FormsModule, ReactiveFormsModule];

const SHARED_COMPONENTS = [ NotFoundErrorComponent, RangeSelectorComponent, CustomMultiselectComponent, CustomSelectComponent];

const DIALOG_COMPONENTS = [RangeDialogComponent, MultiselectDialogComponent];

@NgModule({
  declarations: [...SHARED_COMPONENTS, ...DIALOG_COMPONENTS],
  imports: [
    CommonModule,
    ...ANGULAR_MODULES,
    ...MATERIAL_MODULES
  ],
  exports: [
    ...ANGULAR_MODULES,
    ...MATERIAL_MODULES,
    ...SHARED_COMPONENTS,
    ...DIALOG_COMPONENTS
  ],
  entryComponents: [
    ...DIALOG_COMPONENTS
  ],
})
export class SharedModule { }
