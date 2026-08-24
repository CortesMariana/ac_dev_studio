export const SITE_URL = 'https://acdevstudio.com';
export const SITE_NAME = 'AC Dev Studio';

export const CONTACT_EMAIL = 'acdevstudio1@gmail.com';
export const CONTACT_PHONE_DISPLAY = '477 845 0425';
export const CONTACT_PHONE_INTL = '+52 477 845 0425';
export const CONTACT_PHONE_TEL = '+524778450425';

/** wa.me requires the extra "1" after the 52 country code for Mexican numbers. */
export const WHATSAPP_NUMBER = '5214778450425';

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject: string, body: string): string {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
