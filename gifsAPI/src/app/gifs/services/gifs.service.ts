import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGIFResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private historial: string[] = [];
  private apiKey: string = 'IQnPPDHV9Tpi2rOgVv60EHcQZSphuZV4';
  private serviceURL: string = 'https://api.giphy.com/v1/gifs';

  public resultados: Gif[] = [];

  get getHistorial() {
    return [...this.historial];
  }

  buscarGifs(query: string = '') {
    query = query.trim().toLowerCase();
    if (!this.historial.includes(query)) {
      this.historial.unshift(query);
      this.historial = this.historial.splice(0, 10);
    }
    const params = new HttpParams().set('api_key', this.apiKey).set('q', query);
    const url = `${this.serviceURL}/search?${params}`;
    this.http.get<SearchGIFResponse>(url).subscribe((resp) => {
      this.resultados = resp.data;
    });
  }
  constructor(private http: HttpClient) {}
}
