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

  constructor() { }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  calculateRoute() {
    if (!this.start || !this.destination) {
      alert('Por favor, insira ambos os pontos de partida e destino.');
      return;
    }

    // Convertendo entradas de string para coordenadas
    const startCoords = this.parseCoordinates(this.start);
    const destinationCoords = this.parseCoordinates(this.destination);

    if (!startCoords || !destinationCoords) {
      alert('Coordenadas inválidas. Por favor, insira no formato "latitude,longitude".');
      return;
    }

    // Remover rota existente, se houver
    if (this.map._layers) {
      for (let i in this.map._layers) {
        if (this.map._layers[i]._route) {
          this.map.removeLayer(this.map._layers[i]);
        }
      }
    }

    // Adicionar nova rota
    L.Routing.control({
      waypoints: [
        L.latLng(startCoords[0], startCoords[1]),
        L.latLng(destinationCoords[0], destinationCoords[1])
      ],
      routeWhileDragging: true,
      router: L.Routing.osrmv1({
        serviceUrl: 'https://router.project-osrm.org/route/v1'
      })
    }).addTo(this.map);
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