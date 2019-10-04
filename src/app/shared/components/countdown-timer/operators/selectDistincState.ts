import { UnaryFunction, Observable, pipe } from 'rxjs';
import { pluck, distinctUntilChanged } from 'rxjs/operators';

export function selectDistinctState<T, I> (key:string) : UnaryFunction<Observable<T> , Observable<I>>{
    return pipe(
        pluck<T,I>(key),
        distinctUntilChanged<I>()
    )
}