import { Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ScrollService {
    constructor(private scroller: ViewportScroller) {}

    scrollTo(anchor: string): void {
        if (!anchor) return;
        this.scroller.scrollToAnchor(anchor);
    }
}