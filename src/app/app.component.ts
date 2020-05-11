import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public first: string;
  public middle: string;
  public last: string;
  public doAnimate: boolean;

  private _alphabet = ['q', 'w', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
  private _latinChars = ['ä', 'å', 'é', 'þ', 'ü', 'ú', 'í', 'ó', 'ö', 'á', 'ß', 'ð', 'ø', '¶', 'æ', '©', 'ñ', 'µ', 'ç', '¿', '®'];
  private _specialChars = ['_', '~', '|', '^', '/', '\\', '-', '<', '>', '?', ':', ';', '=', '+', '-', '%', '#', '@', '!'];

  constructor() {
    this.buildName();
  }

  buildName = () => {
    this.doAnimate = false;
    this.first = this._alphabet[this.getRandomInt(1, this._alphabet.length - 1)].toUpperCase();
    this.middle = this._latinChars[this.getRandomInt(1, this._latinChars.length - 1)].toUpperCase();

    const x = this._alphabet[this.getRandomInt(1, this._alphabet.length - 1)];
    const y = this._specialChars[this.getRandomInt(1, this._specialChars.length - 1)];
    const z = this.getRandomInt(1, 99);

    this.last = (x + y + z).toUpperCase();

    setTimeout(() => {
      this.doAnimate = true;
    }, 0);
  }

  getRandomInt = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);

}
