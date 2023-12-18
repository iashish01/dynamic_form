import { Injectable } from '@angular/core';
import { Jsonformclass } from './jsonformclass';

@Injectable({
  providedIn: 'root'
})
export class JsonformService {

  getFormData (){
    const questions: Jsonformclass<string>[] = [

      
    ];
  }

  constructor() { }
}
