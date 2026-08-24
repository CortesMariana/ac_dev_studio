import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../core/components/icon/icon.component';
import { CounterDirective } from '../../core/directives/counter.directive';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { SITE_URL } from '../../core/constants/site';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-about',
  imports: [RouterLink, IconComponent, RevealDirective, CounterDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  private readonly seo = inject(SeoService);

  readonly values = [
    {
      icon: 'target' as const,
      title: 'Enfoque en resultados',
      description: 'Cada línea de código busca resolver un problema real de tu negocio, no solo verse bien.',
    },
    {
      icon: 'shield' as const,
      title: 'Calidad sin atajos',
      description: 'Código limpio, probado y documentado, pensado para crecer sin romperse.',
    },
    {
      icon: 'users' as const,
      title: 'Comunicación cercana',
      description: 'Hablamos claro, en español, y siempre sabes en qué va tu proyecto.',
    },
    {
      icon: 'sparkles' as const,
      title: 'Diseño con intención',
      description: 'Cada interfaz se diseña para transmitir confianza y facilitar la conversión.',
    },
  ];

  ngOnInit(): void {
    this.seo.update({
      title: 'Nosotros',
      description:
        'Conoce a AC Dev Studio, un estudio de desarrollo de software enfocado en crear productos digitales de alto rendimiento con diseño y código de calidad.',
      keywords: 'sobre AC Dev Studio, estudio de desarrollo, quiénes somos, equipo de desarrollo web',
      path: '/nosotros',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        url: `${SITE_URL}/nosotros`,
        about: { '@id': `${SITE_URL}/#organization` },
      },
    });
  }
}
