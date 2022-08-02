import {Component, OnInit} from '@angular/core';
import {Link} from "../../modules/link";
import {LinkService} from "../../services/link.service";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.less']
})
export class SideBarComponent implements OnInit {
  public linkList: Link[] = [
    {id: 'main', logo: 'dashboard', name: 'Dashboard', isActive: true},
    {id: 'projects', logo: 'event', name: 'Projects', isActive: false},
    {id: 'payments', logo: 'payments', name: 'Payments', isActive: false},
    {id: 'people', logo: 'people', name: 'People', isActive: false},
    {id: 'settings', logo: 'settings', name: 'Settings', isActive: false},
  ]
  position: number = 0

  constructor(private linkService: LinkService) {
  }

  ngOnInit() {
    this.linkService.stateActiveLink
      .subscribe((id: string) => {
        this.changeActionElement(id);
        this.linkService.stateActiveLink.complete();
      })

  }

  changeActionElement(id: string) {
    this.linkList = this.linkList.map((item: Link) => {
      return item.id === id ? {...item, isActive: true} : {...item, isActive: false}
    })
    this.position = this.linkList.map((link) => link.id).indexOf(id) * 70;
    console.log(this.position)

  }
}
