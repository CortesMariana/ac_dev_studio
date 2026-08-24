import { Component, Input } from '@angular/core';

export type IconName =
  | 'code'
  | 'layers'
  | 'grid'
  | 'server'
  | 'figma'
  | 'shield'
  | 'arrow-right'
  | 'check'
  | 'mail'
  | 'phone'
  | 'whatsapp'
  | 'map-pin'
  | 'clock'
  | 'users'
  | 'target'
  | 'rocket'
  | 'award'
  | 'sparkles'
  | 'compass'
  | 'pen-tool';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
})
export class IconComponent {
  @Input() name: IconName = 'code';
  @Input() size = 24;
}
