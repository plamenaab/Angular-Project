import { Component} from '@angular/core';

@Component({
  selector: 'app-downloader',
  templateUrl: './downloader.component.html',
  styleUrls: ['./downloader.component.css']
})
export class DownloaderComponent {
  waitSec = 5;
  myInterval: ReturnType<typeof setInterval>;
  isDownloading ="";
  // disabledButton = true;
  constructor() { 
    this.myInterval = setInterval(()=>{
      this.waitSec-=1;
      if(this.waitSec ==0){
        //make button unabled
        // this.disabledButton = false;
        clearInterval(this.myInterval);
      }
    }, 1000)
  }
startDownload(){
  this.isDownloading = " / downloading list..."
}
 

}
