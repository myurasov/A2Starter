// required for a2
import Zone from 'zone.js';
import 'reflect-metadata';

// a2

import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser'

// Create a2 component

@Component({
  selector: 'a2-app'
})

@View({
  template: '<h3><i>{{ hello }}</i></h3>'
})

class A2App {
  hello:string;

  constructor() {
    this.hello = 'Hi there!';
  }
}

// start app
bootstrap(A2App);