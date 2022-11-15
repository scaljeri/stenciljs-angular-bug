import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ld-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lib-demo';
  show = false;

  myForm = new FormGroup({
    email: new FormControl('')
  });

  ngOnInit() {
    this.myForm.valueChanges.subscribe(values => {
      console.log('Form Values Cahnges', values);
    })
  }

  onChange(e: any) {
    console.log('AppComponent, Change detected', e.detail);
  }
}
