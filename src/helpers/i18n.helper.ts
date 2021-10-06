import { I18nService } from 'nestjs-i18n';

export class I18nHelper {
  /**
   *
   */
  constructor(private readonly i18n: I18nService) {}

  async translate(key: string, locale?: string, args?: any): Promise<string> {
    try {
      const msg = this.i18n.translate(key, {
        lang: locale || 'en',
        args: args,
      });
      return msg;
    } catch (error) {
      return key;
    }
  }
}
