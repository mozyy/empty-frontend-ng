import { FormGroup, ɵElement } from '@angular/forms';

export type FormGroupBuilder<T> = FormGroup<{
  [K in keyof T]: ɵElement<T[K], null>;
}>;
