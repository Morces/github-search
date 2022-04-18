import { GhSearchService } from './../../gh-search.service';
import { User } from './../../user';
import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
   
  user!: User;
  username!: string;
  GhSearchService!: GhSearchService;
  public showContents = true;
  public showData = false;
  

  search() {
    this.GhSearchService.getData(this.username);
    this.showContents = false;
    this.showData = true;
  }

  showUserInput(hideInput: boolean){
    this.showContents = hideInput;
    this.showData = false;
  }



  constructor(GhSearchService:GhSearchService) {
    this.GhSearchService = GhSearchService;
   }

  ngOnInit() {
  }

}
