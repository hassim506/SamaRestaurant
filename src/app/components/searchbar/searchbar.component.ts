import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})

export class SearchbarComponent  implements OnInit {

  transform(value: any, args?: any): any{
    if(!value)return null;
    if(!args) return  value;


    args = args.toLowercase();

    return value.filter((item: any ) => {

      return JSON.stringify(item).toLocaleLowerCase().includes(args);
    })
  }

  constructor() { }

  ngOnInit() {}

}
