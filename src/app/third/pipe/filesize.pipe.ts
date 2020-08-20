// TRANSER BYTES INTO MEGABYTES

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize',
})
export class FileSizePipe implements PipeTransform {
  // size = input, MB string is added to input
  // you can overwrite extension string like this: {{ file.size | filesize:'Megabytes' }}
  transform(size: number, extension: string = 'MB') {
    //   console.log(size);
    return (size / (1024 * 1024)).toFixed(2) + extension;
  }
}
