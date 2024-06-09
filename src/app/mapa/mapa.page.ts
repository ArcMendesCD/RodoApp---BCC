import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements AfterViewInit {
  @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef;
  map: any;

  constructor() {
    const iconRetinaUrl = 'assets/marker-icon-2x.png';
    const iconUrl = 'assets/marker-icon.png';
    const shadowUrl = 'assets/marker-shadow.png';
    const iconDefault = Leaflet.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
    Leaflet.Marker.prototype.options.icon = iconDefault;
  }

  async ngAfterViewInit() {
    setTimeout(async () => {
      const coordinates = await this.getCurrentPosition();
      if (coordinates.length === 2) {
        this.loadMap(coordinates as [number, number]);
      }
    }, 100);
  }

  async getCurrentPosition(): Promise<[number, number]> {
    const position = await Geolocation.getCurrentPosition();
    return [position.coords.latitude, position.coords.longitude];
  }

  loadMap(coordinates: [number, number]) {
    this.map = Leaflet.map(this.mapContainer.nativeElement).setView(coordinates, 14);

    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    Leaflet.marker(coordinates).addTo(this.map)
      .bindPopup('You are here!')
      .openPopup();
  }
}