import { GhSearchService } from './../gh-search.service';
import { User } from './../user';
import { NgForm } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  user!:User;
  repoDatas:any = [];
  GhSearchService!: GhSearchService;
  hideInput!:boolean;

  constructor(GhSearchService:GhSearchService) { 
    this.GhSearchService = GhSearchService;
  }
  @Output() toggleBack = new EventEmitter();

  back(){
    this.hideInput = true;
    this.toggleBack.emit(this.hideInput)
  }

  ngOnInit() {
    this.user = this.GhSearchService.user;
    this.repoDatas = this.GhSearchService.repoDetails;
  }

}
