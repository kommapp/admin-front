import i18next from 'i18next';
import es from './navigation-i18n/es';

i18next.addResourceBundle('es', 'navigation', es);

const navigationConfig = [
  {
    id: 'example-component',
    title: 'Example',
    translate: 'EXAMPLE',
    type: 'item',
    icon: 'heroicons-outline:star',
    url: 'example',
  },
];

export default navigationConfig;
