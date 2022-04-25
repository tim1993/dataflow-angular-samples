export interface Studio {
  id: number;
  name: string;
  address: {
    street: string;
    city: string;
  };
  rating: number;
  pictureUrl: string;
  features: StudioFeatureDeclaration[];
  premiumOnly: boolean;
}

export interface StudioFeatureDeclaration {
  feature: StudioFeature;
  isPremium: boolean;
}

export enum StudioFeature {
  Benches,
  Cardio,
  PersonalTrainer,
  Relaxing,
}
