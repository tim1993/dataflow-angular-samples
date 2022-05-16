import { Studio, StudioFeature } from '../models/studio.model';

export const studios: Studio[] = [
  {
    id: 1,
    name: 'PumpIT Fit&Pump Atlanta',
    address: {
      city: 'Atlanta',
      street: 'Sunset Boulevard 1337',
    },
    pictureUrl: 'assets/pics/studio.jpg',
    rating: 90,
    premiumOnly: true,
    features: [
      { isPremium: false, feature: StudioFeature.Benches },
      { isPremium: false, feature: StudioFeature.Cardio },
      { isPremium: true, feature: StudioFeature.PersonalTrainer },
      { isPremium: true, feature: StudioFeature.Relaxing },
    ],
  },
  {
    id: 2,
    name: 'Pump & Fun Berlin',
    address: {
      city: 'Berlin',
      street: 'Seestraße 42',
    },
    pictureUrl: 'assets/pics/studio1.jpg',
    rating: 50,
    premiumOnly: true,
    features: [
      { isPremium: false, feature: StudioFeature.Benches },
      { isPremium: true, feature: StudioFeature.Cardio },
      { isPremium: true, feature: StudioFeature.PersonalTrainer },
    ],
  },
  {
    id: 3,
    name: 'Pumpy Studios',
    address: {
      city: 'Hamburg',
      street: 'Hafenstraße 13',
    },
    pictureUrl: 'assets/pics/studio2.jpg',
    rating: 80,
    premiumOnly: false,
    features: [
      { isPremium: false, feature: StudioFeature.Benches },
      { isPremium: true, feature: StudioFeature.Cardio },
      { isPremium: true, feature: StudioFeature.PersonalTrainer },
    ],
  },
  {
    id: 4,
    name: 'Fit & Pump Nürnberg',
    address: {
      city: 'Nürnberg',
      street: 'Seestraße 42',
    },
    pictureUrl: 'assets/pics/studio.jpg',
    rating: 10,
    premiumOnly: false,
    features: [
      { isPremium: false, feature: StudioFeature.Benches },
      { isPremium: true, feature: StudioFeature.Cardio },
      { isPremium: true, feature: StudioFeature.PersonalTrainer },
    ],
  },
  {
    id: 5,
    name: 'VitalPump Karlsruhe',
    address: {
      city: 'Karlsruhe',
      street: 'Seestraße 42',
    },
    pictureUrl: 'assets/pics/studio2.jpg',
    rating: 90,
    premiumOnly: false,
    features: [
      { isPremium: false, feature: StudioFeature.Benches },
      { isPremium: true, feature: StudioFeature.Cardio },
      { isPremium: true, feature: StudioFeature.PersonalTrainer },
    ],
  },
];
