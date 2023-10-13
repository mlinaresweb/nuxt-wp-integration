import { Middleware } from '@nuxt/types';

const redirectMiddleware: Middleware = ({ route, redirect }) => {
  // Si la ruta es solo '/', entonces redirigimos basándonos en el idioma del navegador
  if (route.path === '/') {
    let userLang = ((window.navigator as any).userLanguage || window.navigator.language).substring(0, 2);
    const supportedLanguages = ['es', 'en'];
    const lang = supportedLanguages.includes(userLang) ? userLang : 'es';
    return redirect(`/${lang}/home`);
  }
}

export default redirectMiddleware;
