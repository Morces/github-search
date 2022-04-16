import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
   @Input() searchName!: string;
   @Output() searchOutput = new EventEmitter()
  constructor() { }

  search() {
    this.searchOutput.emit(this.searchName);
    this.searchName = "";
  }


  ngOnInit() {
  }

}
