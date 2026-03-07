import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    loadComponent: () => import('./components/pages/home/home').then(m => m.Home),
    title: "Home Page | Mader's Intranet",
    data: {
      description: "Mader's Internet Home Page",
      label: 'Home',
      showInMain: true,
      showInFooter: true,
      h1: 'Digital Visibility. <br>Human Connetion.',
      h2: 'We craft inclusive digital experiences that don’t just perform, they resonate.',
      desktopImage: 'castle-loch-bridge.webp',
      mobileImage: 'castle-loch-bridge.webp',
      headerPostion: 'left',
      ctaCopy: 'Book An Audit',
      ctaTarget: 'contact-us'
    }
  },
  {
    path: 'contacts',
    loadComponent: () => import('./components/pages/contacts/contacts').then(m => m.Contacts),
    title: "Contacts | Mader's Intranet",
    data: {
      description: "Mader's Intranet Contacts",
      label: 'Contact',
      showInMain: true,
      showInFooter: true,
      h1: 'Digital Visibility. <br>Human Connetion.',
      h2: 'We craft inclusive digital experiences that don’t just perform, they resonate.',
      desktopImage: 'castle-loch-bridge.webp',
      mobileImage: 'castle-loch-bridge.webp',
      headerPostion: 'left',
      ctaCopy: 'Book An Audit',
      ctaTarget: 'contact-us'
    },
    children: [
      {
        path: 'contacts/vendors',
        loadComponent: () => import('./components/pages/contacts/contacts').then(m => m.Contacts),
        title: "Contacts | Mader's Intranet",
        data: {
          description: "Mader's Intranet Contacts",
          label: 'Vendors',
          showInMain: true,
          showInFooter: true,
          h1: 'Digital Visibility. <br>Human Connetion.',
          h2: 'We craft inclusive digital experiences that don’t just perform, they resonate.',
          desktopImage: 'castle-loch-bridge.webp',
          mobileImage: 'castle-loch-bridge.webp',
          headerPostion: 'left',
          ctaCopy: 'Book An Audit',
          ctaTarget: 'contact-us'
        },
      }
    ]
  }
];
