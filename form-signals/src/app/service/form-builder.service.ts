import { Injectable, Signal } from '@angular/core';
import { IQuestionModel } from '../model/IBuilder.model';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor() { }

  generateGUID(): string {
    function S4(): string {
        return (((1 + Math.random()) * 0x10000) | 0)
            .toString(16)
            .substring(1);
    }
    return (
        S4() +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        S4() +
        S4()
    );
}

}
