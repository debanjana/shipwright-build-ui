import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  url = new FormControl();
  url_value="docker pull";
 

  constructor() { 
    this.url.setValue(this.url_value);
  }

  ngOnInit() {
    this.url_value = this.url_value + 'something/more'
  }

}
