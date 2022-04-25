import { Studio, StudioFeature } from "../models/studio.model";

export const studios: Studio[] = [
  {
    name: 'PumpIT Fit&Pump Atlanta',
    address: {
      city: 'Atlanta',
      street: 'Sunset Boulevard 1337',
    },
    pictureUrl: 'assets/pics/studio.jpg',
    rating: 90,
    features: [
      { isPremium: false, feature: StudioFeature.Benches },
      { isPremium: true, feature: StudioFeature.Cardio },
      { isPremium: true, feature: StudioFeature.PersonalTrainer },
    ],
  },
  {
    name: 'Pump & Fun Berlin',
    address: {
      city: 'Berlin',
      street: 'Seestraße 42',
    },
    pictureUrl: 'assets/pics/studio1.jpg',
    rating: 50,
    features: [
      { isPremium: false, feature: StudioFeature.Benches },
      { isPremium: true, feature: StudioFeature.Cardio },
      { isPremium: true, feature: StudioFeature.PersonalTrainer },
    ],
  },
  {
    name: 'Pumpy Studios',
    address: {
      city: 'Hamburg',
      street: 'Hafenstraße 13',
    },
    pictureUrl: 'assets/pics/studio2.jpg',
    rating: 80,
    features: [
      { isPremium: false, feature: StudioFeature.Benches },
      { isPremium: true, feature: StudioFeature.Cardio },
      { isPremium: true, feature: StudioFeature.PersonalTrainer },
    ],
  },
  {
    name: 'Fit & Pump Nürnberg',
    address: {
      city: 'Nürnberg',
      street: 'Seestraße 42',
    },
    pictureUrl: 'assets/pics/studio.jpg',
    rating: 10,
    features: [
      { isPremium: false, feature: StudioFeature.Benches },
      { isPremium: true, feature: StudioFeature.Cardio },
      { isPremium: true, feature: StudioFeature.PersonalTrainer },
    ],
  },
  {
    name: 'VitalPump Karlsruhe',
    address: {
      city: 'Karlsruhe',
      street: 'Seestraße 42',
    },
    pictureUrl: 'assets/pics/studio2.jpg',
    rating: 90,
    features: [
      { isPremium: false, feature: StudioFeature.Benches },
      { isPremium: true, feature: StudioFeature.Cardio },
      { isPremium: true, feature: StudioFeature.PersonalTrainer },
    ],
  },
];
