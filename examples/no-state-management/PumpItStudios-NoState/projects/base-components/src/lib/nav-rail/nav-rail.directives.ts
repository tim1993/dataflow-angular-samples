import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[pumpRailTop]',
})
export class NavItemDirective implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@Directive({
  selector: '[pumpRailBottom]',
})
export class NavItemBottomDirective implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
