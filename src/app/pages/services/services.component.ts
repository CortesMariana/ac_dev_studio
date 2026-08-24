import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../core/components/icon/icon.component';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { TiltDirective } from '../../core/directives/tilt.directive';
import { SERVICES } from '../../core/constants/services';
import { SITE_URL } from '../../core/constants/site';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-services',
  imports: [RouterLink, IconComponent, RevealDirective, TiltDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent implements OnInit {
  private readonly seo = inject(SeoService);

  readonly services = SERVICES;

  readonly faqs = [
    {
      question: '¿Cuánto tiempo toma desarrollar un proyecto?',
      answer:
        'Depende del alcance: una landing page puede estar lista en 1-2 semanas, mientras que un sistema de gestión completo puede tomar de 4 a 10 semanas. Te damos un cronograma claro antes de empezar.',
    },
    {
      question: '¿Trabajan con negocios que ya tienen un sitio o sistema?',
      answer:
        'Sí. Podemos mejorar, migrar o integrarnos a proyectos existentes, así como darles mantenimiento continuo.',
    },
    {
      question: '¿Qué tecnologías utilizan?',
      answer:
        'Principalmente Angular, TypeScript, Firebase y Node.js, complementadas con Tailwind CSS para interfaces rápidas de construir y mantener.',
    },
    {
      question: '¿Ofrecen soporte después de la entrega?',
      answer:
        'Sí, ofrecemos planes de mantenimiento y soporte directo por WhatsApp o correo para resolver cualquier incidencia o nueva necesidad.',
    },
  ];

  readonly openFaqIndex = signal<number | null>(0);

  toggleFaq(index: number): void {
    this.openFaqIndex.update((current) => (current === index ? null : index));
  }

  ngOnInit(): void {
    this.seo.update({
      title: 'Servicios de Desarrollo Web y Software a Medida',
      description:
        'Desarrollo web a medida, aplicaciones SPA/PWA, sistemas de gestión, backend con Firebase, UI/UX y mantenimiento. Conoce todos los servicios de AC Dev Studio.',
      keywords:
        'servicios desarrollo web, aplicaciones a medida, sistemas de gestión, backend Firebase, UI UX, mantenimiento web, AC Dev Studio',
      path: '/servicios',
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Desarrollo de software y aplicaciones web',
          provider: { '@id': `${SITE_URL}/#organization` },
          areaServed: 'MX',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Servicios de AC Dev Studio',
            itemListElement: this.services.map((service) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: service.title,
                description: service.description,
              },
            })),
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: this.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        },
      ],
    });
  }
}
