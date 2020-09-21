import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ISong } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentProgress$ = new BehaviorSubject(0);
  currentTime$ = new Subject();

  @ViewChild('player', { static: true}) player: ElementRef;
  songs: ISong[] = [];
  audio = new Audio();
  isPlaying = false;
  activeSong;
  durationTime: string;


  ngOnInit() {
    this.songs = this.getListOfSongs();
  }

  playSong(): void { }

  onTimeUpdate() { }

  playNextSong() { }

  playPreviousSong(): void { }

  setSongDuration(): void { }

  generateMinutes() { }

  generateSeconds() { }

  generateTimeToDisplay() { }

  generatePercentage() { }

  onPause(): void { }
  


  getListOfSongs(): ISong[] {
    return [
      {
        id: 1,
        title: 'Evanescence-Bring Me To Life(with lyrics).mp3',
        path: './assets/Evanescence-Bring Me To Life(with lyrics).mp3'
      },
      {
        id: 2,
        title: 'Numb (Official Video) - Linkin Park.mp3',
        path: './assets/Numb (Official Video) - Linkin Park.mp3'
      },
      {
        id: 3,
        title: 'System Of A Down - Toxicity (Official Video).mp3',
        path: './assets/System Of A Down - Toxicity (Official Video).mp3'
      }
    ];
  }
 }
