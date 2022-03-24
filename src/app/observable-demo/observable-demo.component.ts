import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval,  Observable, Subscription } from 'rxjs';
import { map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit, OnDestroy {
  private myTestSubscription: Subscription | undefined;
  waitSec = 5;
  msg = "";
  constructor() { }

  ngOnInit(): void {
    console.log('observables start');
    // this.myTestSubscription = interval(1000).subscribe( this.waitSec=>{
    //   console.log(this.waitSec);
    // })
    //const customIntervalObservable = Observable.create(()=>);
    const customIntervalObservable = new Observable( observer=>{
      setInterval(()=>{
        observer.next(this.waitSec);
        this.waitSec--;
        if(this.waitSec<0){
          observer.error(new Error('Counter is negative'));
        }
        if(this.waitSec===0){
          observer.complete();
        }
      },1000);
    });
    // old school syntax
    // this.myTestSubscription = customIntervalObservable.subscribe(
    // data=>{
    //   console.log(data);
    // }, 
    // error =>{
    //   console.log(error);
    //   alert(error);
    // },
    // ()=>{
    //   console.log('this.waitSecer completed');
    // }
    // );

    this.myTestSubscription = customIntervalObservable.
    pipe(
      filter(num => Number(num) % 2 === 0),
      map( (data, number) => {
        return `Wait ${data} to download`;
      })
    ).
    subscribe(
    {
      next: (data)=>{
          //this.msg = `Wait ${data} to download`;
          //this.msg = `Old : Wait ${data} to download`;
          this.msg = data;
          console.log(data);
      },
      error: error=>{
        this.msg ="An error occured";
        console.log(error);
        alert(error);      
      },
      complete: ()=>{
        this.msg ="You can download now";
        console.log('Counter completed');
      }
    });
  }
  ngOnDestroy(): void {
    if(this.myTestSubscription) this.myTestSubscription.unsubscribe();
  }
}
