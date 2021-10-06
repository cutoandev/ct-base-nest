import { NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { I18nService } from 'nestjs-i18n';
import { I18nHelper } from '../helpers/i18n.helper';
import { MappingModel } from '../helpers/model.helper';
import { IService } from '../interfaces/service.interface';

export class BaseService<T> implements IService<T> {
  protected readonly i18nHelper: I18nHelper;
  /**
   *
   */
  constructor(
    private readonly baseModel: Model<T>,
    protected readonly i18n: I18nService,
  ) {
    this.i18nHelper = new I18nHelper(this.i18n);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(model: T, locale?: string): Promise<T> {
    try {
      const newUser = new this.baseModel(model);
      await newUser.save();
      return newUser;
    } catch (e) {
      throw e;
    }
  }
  async update(modelId: string, model: T, locale?: string): Promise<T> {
    try {
      let updateModel = await this.baseModel.findById(modelId).exec();
      if (!updateModel) {
        throw new NotFoundException(
          await this.i18nHelper.translate('common.notFoundData', locale),
        );
      }
      updateModel = MappingModel(updateModel, model);
      await updateModel.save();
      return updateModel;
    } catch (e) {
      throw e;
    }
  }
  async delete(modelId: string, locale?: string): Promise<boolean> {
    try {
      const result = await this.baseModel.findByIdAndDelete(modelId).exec();
      if (!result) {
        throw new NotFoundException(
          await this.i18nHelper.translate('common.notFoundData', locale),
        );
      }

      if (result.$isDeleted) {
        return true;
      }
      return false;
    } catch (e) {
      throw e;
    }
  }
  async findOne(propId: string, locale?: string): Promise<T> {
    let model;
    try {
      model = await this.baseModel.findById(propId).exec();
    } catch (error) {
      throw new NotFoundException(
        await this.i18nHelper.translate('common.notFoundData', locale),
      );
    }
    if (!model) {
      throw new NotFoundException(
        await this.i18nHelper.translate('common.notFoundData', locale),
      );
    }
    return model;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async findAll(locale?: string): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
}
