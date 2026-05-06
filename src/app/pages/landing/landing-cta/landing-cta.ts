import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom, take } from 'rxjs';
import { AuthFacade } from '../../auth/data/auth.facade';

@Component({
  selector: 'app-landing-cta',
  templateUrl: './landing-cta.html',
  styleUrl: './landing-cta.scss',
})
export class LandingCta {
  @Input() label: string = 'Create My Resume Now';
  @Input() icon: string = 'auto_awesome';
  @Input() helperTexts: string[] = ['Free plan available', 'AI tools included'];
  @Input() link: string[] = ['/application/dashboard'];
  @Input() ariaLabel: string = 'Create My Resume Now';
  private authFacade = inject(AuthFacade);
  private router = inject(Router);

  async onRedirect(): Promise<void> {
    const user = await firstValueFrom(this.authFacade.user$.pipe(take(1)));
    const redirect = this.link.join('/');

    if (!user) {
      await this.router.navigate(['/auth/signup'], { queryParams: { redirect } });
      return;
    }

    await this.router.navigate(this.link);
  }
}
