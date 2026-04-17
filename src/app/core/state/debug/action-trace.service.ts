import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ActionTraceService {
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly enabled = !environment.production && isPlatformBrowser(this.platformId);

  traceDispatch(action: Action, source: string, details?: Record<string, unknown>) {
    this.log('dispatch', action, source, details);
  }

  traceEffect(action: Action, source: string, details?: Record<string, unknown>) {
    this.log('effect', action, source, details);
  }

  traceSkip(actionType: string, source: string, reason: string, details?: Record<string, unknown>) {
    if (!this.enabled) {
      return;
    }

    console.debug('[ActionTrace]', {
      stage: 'skip',
      actionType,
      source,
      reason,
      route: this.safeRoute(),
      timestamp: new Date().toISOString(),
      ...(details ?? {}),
    });
  }

  private log(
    stage: 'dispatch' | 'effect',
    action: Action,
    source: string,
    details?: Record<string, unknown>,
  ) {
    if (!this.enabled) {
      return;
    }

    console.debug('[ActionTrace]', {
      stage,
      actionType: action.type,
      source,
      route: this.safeRoute(),
      timestamp: new Date().toISOString(),
      payloadFingerprint: this.buildPayloadFingerprint(action),
      ...(details ?? {}),
    });
  }

  private safeRoute() {
    try {
      return this.router.url;
    } catch {
      return 'unknown';
    }
  }

  private buildPayloadFingerprint(action: Action) {
    const snapshot = this.normalize(action);
    const serialized = JSON.stringify(snapshot);
    let hash = 0;

    for (let index = 0; index < serialized.length; index += 1) {
      hash = (hash * 31 + serialized.charCodeAt(index)) >>> 0;
    }

    return `${serialized.length}:${hash.toString(16)}`;
  }

  private normalize(value: unknown, depth = 0): unknown {
    if (value === null || value === undefined) {
      return value;
    }

    if (depth > 3) {
      return '[truncated]';
    }

    if (Array.isArray(value)) {
      return value.slice(0, 5).map((entry) => this.normalize(entry, depth + 1));
    }

    if (typeof value === 'object') {
      const input = value as Record<string, unknown>;
      const normalized: Record<string, unknown> = {};

      for (const key of Object.keys(input).sort()) {
        normalized[key] = this.normalize(input[key], depth + 1);
      }

      return normalized;
    }

    if (typeof value === 'string') {
      return value.length > 120 ? `${value.slice(0, 117)}...` : value;
    }

    return value;
  }
}
