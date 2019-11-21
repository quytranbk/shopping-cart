import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  breadcrumbAr: string[] = ["Home", "Shopping Cart"];
  // @Input() productInfo: any[];
  @Input() productSum : number = 0;
  constructor() { }

  ngOnInit() { }

}
