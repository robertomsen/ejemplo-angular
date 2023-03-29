import { Component, OnInit } from '@angular/core';
import { MobilePhonesService } from 'src/services/mobile-phones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  elementos: any[] = [];
  selectedBrand: any = 1;
  devices: any[] = []

  constructor(private MobilePhonesService: MobilePhonesService) {}

  ngOnInit(): void {
    this.MobilePhonesService.getBrands().subscribe((data: any) => {
      this.elementos = data.data;
    });

    this.MobilePhonesService.getDevices(this.selectedBrand).subscribe((data: any) => {
      this.devices = data.data;
      console.log(data.data)
    })
  }

  getDevices() {
    this.MobilePhonesService.getDevices(this.selectedBrand).subscribe((data: any) => {
      this.devices = data.data;
      console.log(data.data)
    })
  }

  miFuncion(event: Event) {
    const target = event.target as HTMLInputElement;
    this.selectedBrand = target.value;
    this.getDevices();
  }
}
