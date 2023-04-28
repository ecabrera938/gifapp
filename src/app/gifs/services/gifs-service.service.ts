import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  public gifList: Gif[] = [];

  private _tagHistory: string[] = [];
  private apiKey = 'WV7Ibdz9BtRlK1wc1LwcRZ0bKijutUlD';
  private urlService = 'https://api.giphy.com/v1/gifs';

  private organizeHistory(tag: string) {
    tag = tag.toLocaleLowerCase();

    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter((oldTag) => oldTag != tag);
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  constructor(private http: HttpClient) {
    this.readLocalStorage()
    
  }
  
  get tagHistory() {
    return [...this._tagHistory];
  }
  
  searchTag(tag: string) {
    if (tag.length > 0) {
      // this._tagHistory.unshift(tag);
      this.organizeHistory(tag);
    }
    // console.log(this._tagHistory);
    
    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '16')
    .set('q', tag)
    .set('rating', 'g');
    
    this.http
    .get<SearchResponse>(`${this.urlService}/search`, { params })
    .subscribe((resp) => {
      this.gifList = resp.data;
      // console.log({gifs: this.gifList});
    });
  }
  private saveLocalStorage(): void {
    localStorage.setItem('historial', JSON.stringify(this._tagHistory));
  }
  private readLocalStorage(): void {
    if(!localStorage.getItem('historial'))return
    this._tagHistory = JSON.parse(localStorage.getItem('historial')! )
    this.searchTag(this._tagHistory.at(0)!)
  }
}
