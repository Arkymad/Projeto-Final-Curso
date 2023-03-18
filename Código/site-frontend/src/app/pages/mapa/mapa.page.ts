import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Leaflet from 'leaflet';
import { icon, Marker } from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit, OnDestroy {
  map!: Leaflet.Map;

  constructor() { }

  ngOnInit() { }
  ionViewDidEnter() { this.leafletMap(); }

  

  leafletMap() {
    const iconRetinaUrl = 'assets/marker-icon-2x.png';
    const iconUrl = 'assets/marker-icon.png';
    const shadowUrl = 'assets/marker-shadow.png';
    const iconDefault = icon({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
  });
  Marker.prototype.options.icon = iconDefault;

    this.map = Leaflet.map('mapId').setView([-22.90006894580267, -43.18136190258232], 17);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'iSenac © 4F Group',
    }).addTo(this.map);
    Leaflet.marker([-22.90006894580267, -43.18136190258232]).addTo(this.map).bindPopup('Senac Marechal Floriano').openPopup();

  }

  ngOnDestroy() {
    this.map.remove();
  }

}