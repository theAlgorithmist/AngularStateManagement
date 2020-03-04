# Angular State Management With BehaviorSubject

This is the code distribution for the Medium Article, _[Angular State Management With BehaviorSubject](https://medium.com/ngconf/angular-state-management-with-behaviorsubject-e33df0456ff8)_ .

This code distribution illustrates the use of _BehaviorSubject_ to create a reactive model that mimics many of the features of _@ngrx/store_.  The primary difference between the popular third-party package and the current approach is an open (and simple) object-based model implemented through an Angular service.  Since the model is open, developers may be as light or as rigorous as desired in handling immutability.  The approach outlined in the supporting article is very lightweight and very fast.  It is, however, not general-purpose.

The primary use of this approach in the author's personal experience has been a custom model used inside lazy-loaded routes.  The approach may be used both as an application-wide and route-specific model, which is illustrated in the demo application.


Author:  Jim Armstrong - [The Algorithmist]

@algorithmist

theAlgorithmist [at] gmail [dot] com

Angular: 8.0.1

Angular CLI: 8.0.3

Typescript: 3.4.3

## Running the demo

The most common example for any state-management system is the infamous counter.  This application might be considered a counter on steroids as it counts the number of times various routes (eager- and lazy-loaded) are loaded by a user.  Counts are displayed in the UI which provides three initial options, path 1, 2, and 3.  Paths 1 and 3 are eagerly loaded; path 2 is lazy-loaded.  The application contains an app-wide model as well as a model specific to path 2.  Path 2 contains two child components which are routed into the main application's outlet.  In the demo, it is necessary to use the back button the navigate from a path-2 child route back to the main path-2 component.  This provides an opportunity for the reader to modify the code to implement a separate router outlet in path 2.  Some other opportunities for modification are provided in the documentation.

Implementing these modifications is a great way to familiarize yourself with the code and prepare to implement the described techinques in your own applications.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


License
----

Apache 2.0

**Free Software? Yeah, Homey plays that**

[//]: # (kudos http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[The Algorithmist]: <https://www.linkedin.com/in/jimarmstrong>
