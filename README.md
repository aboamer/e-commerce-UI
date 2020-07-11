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

-Define your components, create routes to them
-fonts, bootstrap, styles defined in assets or links and put them in head tag in index.html

## further reading
1- https://blog.angular-university.io/angular-http/
2- https://indepth.dev/testing-angular-routing-components-with-the-routertestingmodule/
3- https://medium.com/@ezequielavilagarcia/unit-testing-best-practices-testing-angular-applications-7e7888b0871d
4- https://dev.to/mustapha/angular-unit-testing-101-with-examples-6mc

## testing notes
- HttpClientTestingModule is located in @angular/common/http/testing
- execute only one test: https://stackoverflow.com/questions/40683673/how-to-execute-only-one-test-spec-with-angular-cli
- fdescribe and fit causes only functions marked this way to run
- xdescribe and xit causes all but functions marked this way to run
- Make sure you are not using `inject` before `R3TestBed.configureTestingModule`
- response and response.body is very tricky
- HttpTestingController to mock requests
- we can pass inject function containing dependencies to fakeAsync .. or we can directly pass the function as we did in product.service.spec.
- common modules to import in testing: imports: [HttpClientTestingModule, RouterTestingModule]
- inject is Angular utility function that injects services into the test function. It takes two     params: an array of services that we want to inject and instances of those services.
- TestBed.configureTestingModule is the same as @NgModule, but for test initialization.
- HttpClientTestingModule is analog of HttpClientModule, but for testing purposes.
- PhantomJS or ChromeHeadless is "Headless" or command-line interface browser. It has the same functionality as a regular web browser, but doesn't require UI and can be executed in a terminal. (faster)
- To test a component we need to create the component's host element in the browser DOM: createComponent(): will create a fixture containing our component instance and its HTML reference.
- We can access the raw component by calling its property componentInstance and its HTML reference by using nativeElement.
- After setting the title in our test, we need to call detectChanges() so the template is updated with the new title we just set (because binding happens when Angular performs change detection).
- To test a component calling a service: don't depened on HTTPClient - make a class mocking these services inside the test class overriding the methods you need to test
    providers: [{ provide: ProductService, useClass: MockProductService }]
- to test router: mock router's method --> navigate: jasmine.createSpy('navigate') .. you can find it in home.component.spec


## test resources
- https://stackoverflow.com/questions/39791773/angular-2-4-6-7-unit-testing-with-router
- https://medium.com/netscape/testing-with-the-angular-httpclient-api-648203820712
- https://dev.to/mustapha/angular-unit-testing-101-with-examples-6mc
- https://skryvets.com/blog/2018/02/18/unit-testing-angular-service-with-httpclient/
- https://stackoverflow.com/questions/40300350/how-to-test-angular2s-router-navigate

## ideas
- interceptor that replaces the request to API with a request to local data based on dev mode or not (environment file)

## Knowledge
- Karma is a test runner. It will automatically create a browser instance, run our tests, then gives us the results. It allows us to test our code in different browsers without any manual change in our part.
- Jasmine is a popular Javascript testing framework. It comes with test doubles by using spies + assertions..
- Mock objects are fake (simulated) objects that mimic the behavior of real objects in controlled ways.
- A fixture is a wrapper around an instance of a component. With a fixture, we can have access to a component instance as well as its template.
- Spies are useful for verifying the behavior of our components depending on outside inputs, without having to define those outside inputs. (for components that have services as a dependency)
- AAA (Arrange-Act-Assert): you should divide your test method into three sections
- beforeAll(): our tests won't be isolated because the component properties could be changed by each test --> so we use beforeEach()
- TestBed is an API for testing that has a method configureTestingModule() for configuring a test module where we can import other Angular modules, components, pipes, directives, or services.
