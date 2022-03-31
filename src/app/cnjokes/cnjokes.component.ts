import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from './joke.model';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-cnjokes',
  templateUrl: './cnjokes.component.html',
  styleUrls: ['./cnjokes.component.css']
})
export class CnjokesComponent implements OnInit {
  jokesCount = 0;
  //theJoke:{id:number, joke:string} = {id:0, joke:""};
  theJoke: Joke = { id: 0, joke: "", categories:[] };
  theJokes: Joke[] = [];
  //http://api.icndb.com/jokes/random
  constructor(private http: HttpClient) {

  }
  getNewJoke() {
    this.http
      .get<{ type: string, value: Joke }>('http://api.icndb.com/jokes/random')
      .subscribe((jokeDate) => {
        this.theJoke = jokeDate.value;
      });
  }
  getSomeJokes(num: number) {
    this.http
      .get<{ type: string, value: Joke[] }>('http://api.icndb.com/jokes/random/' + num)
      .pipe(
        map( jokesDate =>{
          const jokesArray = [];
          for (let joke of jokesDate.value){
            if(joke.categories.length===0){
              jokesArray.push(joke);
            }else{
              jokesArray.push({id:joke.id,joke:"Hidden", categories:joke.categories});
            }
          }
          return jokesArray;
        })
      )
      .subscribe((jokesDate) => {
        this.theJokes = jokesDate;
        // for (let joke of jokesDate) {
        //   this.theJokes.push(joke);
        // }
        // console.log(this.theJokes);
      });
  }
  ngOnInit(): void {
    this.getNewJoke();
  }

}
