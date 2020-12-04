import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { of } from 'rxjs';
import { empty, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const apiURL = environment.apiURL;

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.url.includes('http')) {
            req = req.clone({
                url: `${apiURL}${req.url}`
            });
        }

        // if(req.url.includes(apiURL)){
        //     const setHeaders = {};
        //     if(req.body){
        //         setHeaders['content-type']='application/json';
        //         setHeaders['content-length'] = JSON.stringify(req.body).length;
        //     }
        //     req = req.clone({withCredentials: true, setHeaders: {'content': ''}});
        // }
        return next.handle(req).pipe(
            map(e => {
                //if(e instanceof HttpResponse && e.url.includes('login')){
                //  const authToken = e.headers.get('Authentication');
                return e;
            }),
            catchError(err => {
                console.error(err);
                //push this error back into the stream so the other
                //error handlers can handle it
                return of(err);
                //don't push back this error to the stream
                //return empty(); 
            })
        );
    }
}

export const appIntterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
};