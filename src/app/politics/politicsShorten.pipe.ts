import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'politicsShorten',
})
export class politicsShortenPipe implements PipeTransform {
    transform(value: string) {
        const firstLetters =value
        .split(' ')
        .map(word => word[0])
        .join('');
        return firstLetters.toUpperCase();
    }
}