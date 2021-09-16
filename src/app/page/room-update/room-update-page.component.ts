import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-update-page',
  templateUrl: './room-update-page.component.html',
  styleUrls: ['./room-update-page.component.scss'],
})
export class RoomUpdatePageComponent implements OnInit {

  id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
  }

}
