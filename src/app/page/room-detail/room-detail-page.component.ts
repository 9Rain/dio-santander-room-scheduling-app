import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-detail-page',
  templateUrl: './room-detail-page.component.html',
  styleUrls: ['./room-detail-page.component.scss'],
})
export class RoomDetailPageComponent implements OnInit {

  id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
  }

}
