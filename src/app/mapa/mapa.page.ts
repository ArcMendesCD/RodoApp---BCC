import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss']
})
export class MapaPage implements OnInit {
  private map: any;
  public start: string = '';
  public destination: string = '';
  public showRouteInstructions: boolean = true;
  private routeControl: any;

  constructor() { }

  ngOnInit() {
    this.loadMap();
    this.getUserLocation();
  }

  loadMap() {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          this.map.setView([latitude, longitude], 13);
          L.marker([latitude, longitude], {
            icon: L.icon({
              iconUrl: 'assets/userlocation.png',
              iconSize: [32, 32],
              iconAnchor: [16, 16],
              popupAnchor: [0, 0]
            })
          }).addTo(this.map).bindPopup('Sua localização');
        },
        (error) => {
          console.error('Erro ao obter a localização:', error);
        }
      );
    } else {
      console.error('Geolocalização não suportada');
    }
  }

  calculateRoute() {
    if (!this.start || !this.destination) {
      alert('Por favor, insira ambos os pontos de partida e destino.');
      return;
    }

    const startCoords = this.parseCoordinates(this.start);
    const destinationCoords = this.parseCoordinates(this.destination);

    if (!startCoords || !destinationCoords) {
      alert('Coordenadas inválidas. Por favor, insira no formato "latitude,longitude".');
      return;
    }

    if (this.routeControl) {
      this.map.removeControl(this.routeControl);
    }

    if (this.showRouteInstructions) {
      this.routeControl = L.Routing.control({
        waypoints: [
          L.latLng(startCoords[0], startCoords[1]),
          L.latLng(destinationCoords[0], destinationCoords[1])
        ],
        routeWhileDragging: true,
        router: L.Routing.osrmv1({
          serviceUrl: 'https://router.project-osrm.org/route/v1'
        }),
        show: true
      }).addTo(this.map);

      this.hideRouteInstructionsAfterDelay();
    }
  }

  toggleRouteInstructions() {
    this.showRouteInstructions = !this.showRouteInstructions;
    if (this.routeControl) {
      const startCoords = this.parseCoordinates(this.start);
      const destinationCoords = this.parseCoordinates(this.destination);
      if (startCoords && destinationCoords) {
        this.routeControl.setWaypoints([
          L.latLng([startCoords[0], startCoords[1], 0]),
          L.latLng([destinationCoords[0], destinationCoords[1], 0])
        ]);
        this.hideRouteInstructionsAfterDelay();
      } else {
        console.error('As coordenadas de partida ou destino são inválidas.');
      }
    }
  }

  hideRouteInstructionsAfterDelay() {
    setTimeout(() => {
      const instructionsContainer = document.querySelector('.leaflet-routing-container');
      if (instructionsContainer) {
        instructionsContainer.classList.add('instructions-hidden');
      }
    }, 5000);
  }

  parseCoordinates(coords: string): number[] | null {
    const parts = coords.split(',');
    if (parts.length !== 2) {
      return null;
    }
    const lat = parseFloat(parts[0]);
    const lng = parseFloat(parts[1]);
    if (isNaN(lat) || isNaN(lng)) {
      return null;
    }
    return [lat, lng];
  }
}
