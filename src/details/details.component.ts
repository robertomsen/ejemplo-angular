import { Component, OnInit } from '@angular/core';
import { MobilePhonesService } from 'src/services/mobile-phones.service';

@Component({
  selector: 'details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  elementos: any[] = [];
  selectedBrand: any = 1;
  fetchDevices: any[] = [];
  devices: any[] = [];


  constructor(private MobilePhonesService: MobilePhonesService) {}

  ngOnInit(): void {
    
  }

  getDevices() {
    this.MobilePhonesService.getDevices(this.selectedBrand).subscribe((data: any) => {
      this.fetchDevices = data.data;
      this.devices = data.data;
    })
  }

  handleChangeBrand(event: Event) {
    const target = event.target as HTMLInputElement;
    this.selectedBrand = target.value;
    this.getDevices();
  }

  onChangeSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    const result = this.fetchDevices.filter((el => el.name.includes(target.value)))
    this.devices = result;
  }
}
