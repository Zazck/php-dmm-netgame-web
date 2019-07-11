import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeResourceUrl',
})
export class SafeResourceUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url: string): any {
    const bypass = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    const sanitized = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, bypass);
    return this.sanitizer.bypassSecurityTrustResourceUrl(sanitized);
  }
}
