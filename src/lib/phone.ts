export const PHONE_DISPLAY = '(210) 493-8277';
export const PHONE_HREF = 'tel:+12104938277';
export const PHONE_ARIA_LABEL = `Call ${PHONE_DISPLAY}`;
export const PHONE_SCHEMA = '+1-210-493-8277';

export function callPhoneNumber() {
  window.location.href = PHONE_HREF;
}
