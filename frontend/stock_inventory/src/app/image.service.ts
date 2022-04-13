import { HttpClient,HttpHeaders, HttpBackend  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IEmployee} from './employee'
import { Observable, pipe } from 'rxjs';
import {map}from 'rxjs/operators'
import { TokenStorageService } from './token-storage.service';
import { AuthInterceptor } from './interceptor/auth.interceptor';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: Http) {}


  public uploadImage(image: File): Observable<Response> {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post('/api/v1/image-upload', formData);
  }
}