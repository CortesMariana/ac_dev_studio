import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  whatsappLink,
} from '../../constants/site';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
  readonly email = CONTACT_EMAIL;
  readonly phoneDisplay = CONTACT_PHONE_DISPLAY;
  readonly phoneTel = CONTACT_PHONE_TEL;
  readonly whatsappHref = whatsappLink('Hola AC Dev Studio, me gustaría cotizar un proyecto.');

  readonly services = [
    'Desarrollo Web a Medida',
    'Aplicaciones Web (SPA/PWA)',
    'Sistemas de Gestión',
    'Backend & APIs',
    'UI/UX & Diseño',
    'Mantenimiento & Soporte',
  ];
}
