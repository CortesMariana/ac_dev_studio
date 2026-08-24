import { Component } from '@angular/core';
import { whatsappLink } from '../../constants/site';

@Component({
  selector: 'app-whatsapp-button',
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.scss',
})
export class WhatsappButtonComponent {
  readonly href = whatsappLink('Hola AC Dev Studio, me gustaría cotizar un proyecto.');
}
