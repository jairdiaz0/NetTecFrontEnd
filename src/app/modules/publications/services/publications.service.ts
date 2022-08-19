import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  postsServices$:EventEmitter<any> = new EventEmitter;
  constructor() { }
}
