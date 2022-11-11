import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ld-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.scss'],
  inputs: ['test: xxx']
})
export class XyzComponent implements OnInit {
  // @Input() test = false;
  test = true;

  constructor() { }

  ngOnInit(): void {
  }

}
