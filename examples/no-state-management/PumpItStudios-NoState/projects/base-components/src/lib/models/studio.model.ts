export interface Studio {
  name: string;
  address: {
    street: string;
    city: string;
  };
  rating: number;
  pictureUrl: string;
  features: StudioFeatureDeclaration[];

}

export interface StudioFeatureDeclaration {
  feature: StudioFeature,
  isPremium: boolean;
}

export enum StudioFeature {
  Benches,
  Cardio,
  PersonalTrainer,
}
