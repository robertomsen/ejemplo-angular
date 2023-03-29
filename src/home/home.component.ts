import { Component, OnInit } from '@angular/core';
import { MobilePhonesService } from 'src/services/mobile-phones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  elementos: any[] = [];

  constructor(private MobilePhonesService: MobilePhonesService) {}

  ngOnInit(): void {
    this.MobilePhonesService.getMobilePhones().subscribe((data: any) => {
      this.elementos = data.data;
      console.log(data);
    });
  }
}
