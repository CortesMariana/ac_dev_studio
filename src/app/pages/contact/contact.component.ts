import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IconComponent } from '../../core/components/icon/icon.component';
import { RevealDirective } from '../../core/directives/reveal.directive';
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  SITE_URL,
  mailtoLink,
  whatsappLink,
} from '../../core/constants/site';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, IconComponent, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  private readonly seo = inject(SeoService);
  private readonly fb = inject(FormBuilder);

  readonly email = CONTACT_EMAIL;
  readonly phoneDisplay = CONTACT_PHONE_DISPLAY;
  readonly phoneTel = CONTACT_PHONE_TEL;

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  readonly contactCards = [
    {
      icon: 'mail' as const,
      title: 'Escríbenos',
      value: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
    },
    {
      icon: 'phone' as const,
      title: 'Llámanos',
      value: CONTACT_PHONE_DISPLAY,
      href: `tel:${CONTACT_PHONE_TEL}`,
    },
    {
      icon: 'map-pin' as const,
      title: 'Ubicación',
      value: 'México · Atención remota',
      href: null,
    },
    {
      icon: 'clock' as const,
      title: 'Horario',
      value: 'Lun - Vie, 9:00 - 19:00',
      href: null,
    },
  ];

  get whatsappHref(): string {
    const { name, message } = this.form.getRawValue();
    const text = name || message
      ? `Hola AC Dev Studio, soy ${name || '...'}. ${message || 'Me gustaría cotizar un proyecto.'}`
      : 'Hola AC Dev Studio, me gustaría cotizar un proyecto.';
    return whatsappLink(text);
  }

  sendByEmail(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { name, email, message } = this.form.getRawValue();
    const body = `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`;
    window.location.href = mailtoLink(`Nuevo proyecto de ${name}`, body);
  }

  ngOnInit(): void {
    this.seo.update({
      title: 'Contacto',
      description:
        'Contacta a AC Dev Studio para cotizar tu proyecto de desarrollo web o software. Escríbenos por correo o WhatsApp al +52 477 845 0425.',
      keywords: 'contacto AC Dev Studio, cotizar proyecto web, desarrollo de software contacto',
      path: '/contacto',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        url: `${SITE_URL}/contacto`,
        about: { '@id': `${SITE_URL}/#organization` },
      },
    });
  }
}
