import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  imports: [],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss',
})
export class Checkout {
  plan: 'free' | 'pro' | 'premium' | null = null;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams
      .subscribe((params) => {
        this.plan = params['plan'];
      })
      .unsubscribe();
  }
}
