import { Injectable } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private _config: BehaviorSubject<any>;

  get config(): any | Observable<any>
  {
      return this._config;
  }

  set config(value)
  {
      this._config.next(value);
  }

  _init():void{
    this._config = new BehaviorSubject({
      useLayout: true
    });
  }

  constructor(private _router: Router) {
    this._config = new BehaviorSubject({
      useLayout: true
    });

    this._router.events
            .pipe(filter((event:any) => event instanceof ResolveEnd))
            .subscribe(() => {
                    const config = this._config.getValue();
                    
                    this._config.next(config);
            });
   }

}
