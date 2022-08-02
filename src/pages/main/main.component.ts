import {Component, OnInit} from '@angular/core';
import {LinkService} from "../../services/link.service";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

    constructor(private linkService: LinkService) {
    }

    ngOnInit(): void {
        this.linkService.stateActiveLink.next('main');
    }

}
