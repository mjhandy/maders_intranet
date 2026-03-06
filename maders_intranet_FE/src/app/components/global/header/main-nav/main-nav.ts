import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './main-nav.html',
  styleUrl: './main-nav.scss',
})
export class MainNav {

  routes: {
    path: string;
    title: string;
    label: string;
    children?: { path: string; title?: string; label?: string }[];
  }[] = [];

  constructor(private router: Router) {
    // Filter routes that have a valid `path` and `title`, then map to the required type
    this.routes = this.router.config
      .filter(
        route => route.path &&
          typeof route.title === 'string' &&
          route.data && route.data['label'] &&
          route.data['showInMain'] === true
      )
      .map(route => {
        const children = (route.children || [])
          .filter(child => child.path && child.data && child.data['label'])
          .map(child => ({
            path: child.path!,
            title: child.title as string | undefined,
            label: child.data!['label']
          }));

        return {
          path: route.path!,
          title: route.title as string,
          label: route.data!['label'],
          children: children.length ? children : undefined
        };
      });
  }
}
