import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../core/components/icon/icon.component';
import { CounterDirective } from '../../core/directives/counter.directive';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { TiltDirective } from '../../core/directives/tilt.directive';
import { VISIBLE_PORTFOLIO_PROJECTS } from '../../core/constants/portfolio';
import { SERVICES } from '../../core/constants/services';
import { SITE_URL } from '../../core/constants/site';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, IconComponent, RevealDirective, TiltDirective, CounterDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly seo = inject(SeoService);

  readonly services = SERVICES.slice(0, 6);
  readonly projects = VISIBLE_PORTFOLIO_PROJECTS;

  readonly stack = ['Angular', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Node.js', 'RxJS', 'GSAP', 'SCSS'];

  readonly process = [
    {
      icon: 'compass' as const,
      title: 'Descubrimiento',
      description: 'Entendemos tu negocio, objetivos y usuarios para definir el mejor camino técnico.',
    },
    {
      icon: 'pen-tool' as const,
      title: 'Diseño',
      description: 'Prototipamos la experiencia e interfaz antes de escribir una sola línea de código.',
    },
    {
      icon: 'code' as const,
      title: 'Desarrollo',
      description: 'Construimos con buenas prácticas, código limpio y entregas incrementales.',
    },
    {
      icon: 'rocket' as const,
      title: 'Lanzamiento & Soporte',
      description: 'Desplegamos, monitoreamos y acompañamos el crecimiento de tu producto.',
    },
  ];

  ngOnInit(): void {
    this.seo.update({
      title: 'AC Dev Studio | Desarrollo Web y Software a Medida en México',
      description:
        'Estudio de desarrollo de software en México. Creamos sitios web, aplicaciones a medida y sistemas de gestión con Angular y tecnología moderna. Cotiza por WhatsApp o correo.',
      keywords:
        'desarrollo web México, desarrollo de software, aplicaciones web a medida, sistemas de gestión, agencia de desarrollo, programadores México, Angular',
      path: '/',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: 'AC Dev Studio | Desarrollo Web y Software a Medida',
        isPartOf: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'es-MX',
      },
    });
  }
}
