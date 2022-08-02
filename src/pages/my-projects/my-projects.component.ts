import {Component, OnInit} from '@angular/core';
import {LinkService} from "../../services/link.service";

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.less']
})
export class MyProjectsComponent implements OnInit {

  constructor(private linkService: LinkService) {
  }

  ngOnInit(): void {
    this.linkService.stateActiveLink.next('projects');
  }

}
