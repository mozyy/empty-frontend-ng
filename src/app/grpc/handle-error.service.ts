import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HandleErrorService {
  handleCatchError<T>(result: T, operation = 'operation') {
    return catchError<T, Observable<T>>((err) => {
      this.log(`grpc ${operation} failed: ${err.message}`);
      return of(result);
    });
  }

  log(message:string) {
    console.error(message);
  }
}
