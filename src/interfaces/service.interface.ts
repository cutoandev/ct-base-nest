export interface IService<T> {
  create(model: T, locale?: string): Promise<T>;
  update(modelId: string, model: T, locale?: string): Promise<T>;
  delete(modelId: string, locale?: string): Promise<boolean>;
  findAll(locale?: string): Promise<T[]>;
  findOne(propId: string, locale?: string): Promise<T>;
}
