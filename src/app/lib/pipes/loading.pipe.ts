import { Pipe, PipeTransform } from '@angular/core';
import { isObservable, Observable, of } from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';

@Pipe({
  name: 'loading',
  standalone: true,
})
export class LoadingPipe implements PipeTransform {
  transform(val: Observable<any>): Observable<{ loading: boolean; value?: any; error?: any }> {
    return val.pipe(
      map((value) => ({ loading: false, value })),
      startWith({ loading: true }),
      catchError((error) => of({ loading: false, error }))
    );
  }
}
