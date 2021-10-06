export const MappingModel = (destModel: any, model: any) => {
  Object.keys(model).map((key: string) => {
    destModel[key] = model[key];
  });
  return destModel;
};
