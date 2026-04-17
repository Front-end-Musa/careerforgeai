import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { AuthFacade } from './pages/auth/data/auth.facade';
import { CommonModule } from '@angular/common';
import { AuthStatus } from './pages/auth/data/auth.reducer';
import { SeoMetadata, SeoService } from './core/services/seo.service';
import { filter, map, startWith } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Notifications } from './lib/notifications/notifications';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Notifications, MatProgressSpinnerModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App implements OnInit {
  protected readonly title = signal('application');
  public authFacade = inject(AuthFacade);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  private readonly destroyRef = inject(DestroyRef);
  status$ = this.authFacade.status$;
  authStatus = AuthStatus;

  ngOnInit() {
    this.authFacade.initAuth({ source: 'App.ngOnInit' });

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        startWith(null),
        map(() => this.getDeepestSeoData()),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((seoData) => {
        if (!seoData) {
          return;
        }
        this.seo.apply(seoData);
      });
  }

  private getDeepestSeoData(): SeoMetadata | null {
    let current: ActivatedRoute | null = this.route;
    let latestSeo: SeoMetadata | null = null;

    if (current.snapshot.data?.['seo']) {
      latestSeo = current.snapshot.data['seo'] as SeoMetadata;
    }

    while (current?.firstChild) {
      current = current.firstChild;
      if (current.snapshot.data?.['seo']) {
        latestSeo = current.snapshot.data['seo'] as SeoMetadata;
      }
    }

    return latestSeo;
  }
}
