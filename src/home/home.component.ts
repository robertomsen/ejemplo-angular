import { Component, OnInit } from '@angular/core';
import { mockGetBrands } from 'src/mocks/mockGetBrands';
import { mockGetDevices } from 'src/mocks/mockGetDevices';
import { MobilePhonesService } from 'src/services/mobile-phones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  elementos: any[] = [];
  selectedBrand: any = 1;
  fetchDevices: any[] = [];
  devices: any[] = [];

  constructor(private MobilePhonesService: MobilePhonesService) {}

  ngOnInit(): void {
    this.MobilePhonesService.getBrands().subscribe(
      (data: any) => {
        this.elementos = data.data;
      },
      () => {
        this.elementos = mockGetBrands;
      }
    );

    this.MobilePhonesService.getDevices(this.selectedBrand).subscribe(
      (data: any) => {
        this.fetchDevices = data.data;
        this.devices = data.data;
      },
      () => {
        this.fetchDevices = mockGetDevices;
        this.devices = mockGetDevices;
      }
    );
  }

  getDevices() {
    this.MobilePhonesService.getDevices(this.selectedBrand).subscribe(
      (data: any) => {
        this.fetchDevices = data.data;
        this.devices = data.data;
      },
      () => {
        this.fetchDevices = mockGetDevices;
        this.devices = mockGetDevices;
      }
    );
  }

  handleChangeBrand(event: Event) {
    const target = event.target as HTMLInputElement;
    this.selectedBrand = target.value;
    this.getDevices();
  }

  onChangeSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    const result = this.fetchDevices.filter((el) =>
      el.name.includes(target.value)
    );
    this.devices = result;
  }
}
