# ECommerceLearnFrontEnd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Learning objectives

1-Creating observable to simulate http requests, to decouple backend progress from frontend progress

## notes

- angular.json scripts array contains JS needed such as jquery, bootstrap ... note that the order is important to avoid bugs
- after angular 7, you don't need to decalre services in app.module -- you can provide it in the @injectable decorator
- router: A service that provides navigation and URL manipulation capabilities

## steps to create project

1-Define your components, create routes to them
2-fonts, bootstrap, styles defined in assets or links and put them in head tag in index.html

## further reading
1- https://blog.angular-university.io/angular-http/
