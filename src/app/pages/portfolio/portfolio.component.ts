import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../core/components/icon/icon.component';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { TiltDirective } from '../../core/directives/tilt.directive';
import { VISIBLE_PORTFOLIO_PROJECTS } from '../../core/constants/portfolio';
import { SITE_URL } from '../../core/constants/site';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-portfolio',
  imports: [RouterLink, IconComponent, RevealDirective, TiltDirective],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit {
  private readonly seo = inject(SeoService);

  readonly projects = VISIBLE_PORTFOLIO_PROJECTS;
  readonly categories = ['Todos', ...new Set(this.projects.map((p) => p.category))];
  readonly activeCategory = signal('Todos');

  readonly filteredProjects = computed(() => {
    const category = this.activeCategory();
    return category === 'Todos' ? this.projects : this.projects.filter((p) => p.category === category);
  });

  setCategory(category: string): void {
    this.activeCategory.set(category);
  }

  ngOnInit(): void {
    this.seo.update({
      title: 'Portafolio de Proyectos de Desarrollo Web y Software',
      description:
        'Conoce los proyectos que hemos desarrollado en AC Dev Studio: sistemas de gestión, plataformas web y sitios corporativos construidos con Angular y Firebase.',
      keywords: 'portafolio desarrollo web, proyectos software, casos de éxito, sistemas de gestión Angular',
      path: '/portafolio',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Portafolio de AC Dev Studio',
        url: `${SITE_URL}/portafolio`,
        isPartOf: { '@id': `${SITE_URL}/#organization` },
        hasPart: this.projects.map((project) => ({
          '@type': 'CreativeWork',
          name: project.name,
          description: project.description,
          creator: { '@id': `${SITE_URL}/#organization` },
        })),
      },
    });
  }
}
