import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Leaflet from 'leaflet';
import { icon, Marker } from 'leaflet';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})
export class TodosPage implements OnInit, OnDestroy {
  map!: Leaflet.Map;

  ionViewDidEnter() {
    this.leafletMap();
  }
  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {
    this.map.remove();
  }

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
      shadowSize: [41, 41],
    });
    Marker.prototype.options.icon = iconDefault;

    this.map = Leaflet.map('mapId').setView(
      [-22.900949126484733, -43.31408073261323],
      17
    );
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Comunicação Divina ©',
    }).addTo(this.map);
    Leaflet.marker([-22.900949126484733, -43.31408073261323])
      .addTo(this.map)
      .bindPopup('Casa Thalis')
      .openPopup();
  }
}
