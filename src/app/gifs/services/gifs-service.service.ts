import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagHistory: string[] = [];

  constructor() {}

  get tagHistory() {
    return [...this._tagHistory];
  }

  searchTag(tag: string): void {
    if (tag.length > 0) {
      this._tagHistory.unshift(tag);
    }
    // console.log(this._tagHistory);
  }
}
