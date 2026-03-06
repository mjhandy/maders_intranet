import { Component, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs';
import { Meta } from '@angular/platform-browser';

import { Header } from './components/global/header/header';
import { Footer } from './components/global/footer/footer';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('maders_intranet_FE');
  // router: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private metaService: Meta,
  ){}

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.getChild(this.activatedRoute))
      )
      .subscribe(route => {
        // Update meta description
        const data = route.snapshot.data;
        if (data['description']) {
          this.metaService.updateTag({ name: 'description', content: data['description'] });
        } else {
          this.metaService.removeTag("name='description'");
        }

        // Set body class based on route
        const pageClass = this.getPageClass(route);
        document.body.className = pageClass ? pageClass : '';
      });
  }

  private getChild(route: ActivatedRoute): ActivatedRoute {
    return route.firstChild ? this.getChild(route.firstChild) : route;
  }

  private getPageClass(route: ActivatedRoute): string | null {
    // Try to get the route name from route config or path
    const routeConfig = route.routeConfig;
    if (routeConfig) {
      if (routeConfig.path === '') {
        return 'home';
      }
      switch (routeConfig.path) {
        case 'services':
          return 'services';
        case 'about-us':
          return 'aboutUs';
        case 'case-studies':
          return 'caseStudies';
        case 'contact-us':
          return 'contactUs';
        default:
          break;
      }
    }
    // Fallback: use route data label if available
    const data = route.snapshot.data;
    if (data && data['label']) {
      switch (data['label']) {
        case 'Home':
          return 'home';

        default:
          return null;
      }
    }
    return null;
  }

  // private getPageClass()

}
