import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any, locale?: any, format?: any): any {
    const date = new Date(value);
    let result;

    switch (format){
        case 'full':
            result = date.toLocaleString(locale, {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit'
            });
            break;
        case 'short':
            result = date.toLocaleString(locale, {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit'
            });
            break;
        default:
            result = date.toLocaleString(locale);
            break;

    }
    return result;
  }

}
