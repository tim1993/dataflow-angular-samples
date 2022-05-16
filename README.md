# GIT Repository - Data Flow on Steroids – Das fullbody Workout für deine SPA

This is the code sample for the presentation Data Flow on Steroids - The fullbody workout for your SPA.
This sample is implementing three concepts:
1. Angular application without state management
2. Angular application with facades as abstraction layer
3. Angular application with state management framework [NGXS](https://www.ngxs.io/)

# Getting started

Make sure you have the [Angular CLI](https://github.com/angular/angular-cli#installation) installed globally.
We use [Npm](https://www.npmjs.com/) to manage the dependencies.
After cloning this repository just run `npm i` to resolve all dependencies (might take a minute).

## Shared components
We have shared some base components and services inside of [base-components](examples/projects/base-components/src/lib) folder which are used by all samples.
Inside of this location you can also find our services which simulates the REST-API.

## Building the project

Run `npm run build` or `ng build` to build the project. We do not recommend to run this application in production since it's only a template for your code base.

## How to run?

We have the root project which is running PumpIt-Studios without state management. You can find the facade and state sample inside of projects directory.
You can run the application with following commands:
1. No State project with `npm run` or `ng serve`
2. Facade project with `npm run facade` or `ng serve pumpit-facade`
3. State project with `npm run state` or `ng serve pumpit-state`

# Contributors

The code was shared by [Dominik](https://github.com/domdeger) and [Tim](https://github.com/tim1993)