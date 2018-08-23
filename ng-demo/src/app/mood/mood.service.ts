import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoodService {

  mood = 'happy';

  constructor() { }

  updateMood(mood){
    console.log('change to ', mood);
    this.mood = mood;
  }

}
