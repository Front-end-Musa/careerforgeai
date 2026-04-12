import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resumes-workspace-redirect',
  template: '',
})
export class ResumesWorkspaceRedirect {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  constructor() {
    const resumeId = this.route.snapshot.paramMap.get('id');
    const path = this.route.routeConfig?.path ?? '';
    const isCreateRoute = path === 'resumes/create';
    const isTailorRoute = path === 'resumes/:id/tailor';

    this.router.navigate(['/application/resumes'], {
      queryParams: {
        mode: isCreateRoute ? 'create' : 'edit',
        ...(resumeId ? { id: resumeId } : {}),
        ...(isTailorRoute ? { tailor: '1' } : {}),
      },
      replaceUrl: true,
    });
  }
}
