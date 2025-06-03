import createMiddleware from 'next-intl/middleware';
// Update the import path if 'i18n' is not in 'src', or create the file if missing
import { locales, defaultLocale } from '@/app/lib/i18n';

export default createMiddleware({
  locales,
  defaultLocale,
});

export const config = {
  matcher: ['/', '/(fr|en)/:path*'],
};
