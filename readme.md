# micro-frontends-by-angular-elements
based on [this](https://www.youtube.com/watch?v=oqle07Ifyoc)

## create a new workspace

```
ng new micro-frontends-by-angular-elements --createApplication="false"
```

## create apps

Go to the workspace folder and execute (for now select no routing and use CSS):

```
ng generate application headerApp
ng generate application mainApp
ng generate application sideApp
ng generate application subApp
ng generate application footerApp
```

It will create 5 apps and first app **headerApp** will be the default app. Default app is set at the end of ```angular.json``` file:
```"defaultProject": "headerApp"```. Default project is used e.g. when we run ```ng s -o````.

## add angular elements package

```
ng add @angular/elements
```

## update initialization of the apps

* in ```index.html``` rename ```app-root``` to ```header-app```.
  >NOTE: ```header-app``` is name of the custom element and not name of the selector of angular component!
* in ```main.ts``` disable ngZone: ```{ngZone: 'noop'}```. ngZone creates some unexpected results with Angular Elements that`s why we have to disable is and because of this for change detection strategy we will be using **OnPush**.
* in ```app.component.ts``` set encapsulation on **ShadowDom**.
* in ```app.module.ts``` use ```ngDoBootstrap``` to create and register custom element. ```AppComponent``` should be removed ```bootstrap``` array and should be added to ```entryComponents``` array.

Repeat these steps for every app.

## install ngx-build-plus
http://github.com/manfredsteyer/ngx-build-plus

```
ng add ngx-build-plus
```

>NOTE: it will update angular.json only for current default project (headerApp).

## install ngx-build-plus polyfills

```
ng g ngx-build-plus:wc-polyfill
```
It adds webcomponent polyfills to your app.

>NOTE: it will update angular.json only for current default project (headerApp).

## install ngx-build-plus externals

```
ng g ngx-build-plus:externals
```

It updates your app to use webpack externals.

>NOTE: it will update angular.json only for current default project (headerApp).

## repeat all 3 ngx-build-plus installs for all other apps

To do it before every install you have to update ```defaultProject``` in ```angular.json```.

## build header app

```
npm run build:headerApp:externals
```
It will generate:
```
PS D:\GitHub\kicaj29\micro-frontends\micro-frontends-by-angular-elements> npm run build:headerApp:externals

> micro-frontends-by-angular-elements@0.0.0 build:headerApp:externals D:\GitHub\kicaj29\micro-frontends\micro-frontends-by-angular-elements
> ng build --extra-webpack-config projects/headerApp/webpack.externals.js --prod --project headerApp --single-bundle

Generating ES5 bundles for differential loading...
ES5 bundle generation complete.

chunk {1} polyfills-es2015.bfe8b47a4026fc07b793.js (polyfills) 50.5 kB [initial] [rendered]
chunk {0} main-es2015.e3056298742893cea0b1.js (main) 3.48 kB [initial] [rendered]
chunk {0} main-es5.e3056298742893cea0b1.js (main) 3.94 kB [initial] [rendered]
chunk {2} polyfills-es5.14e62ee29788adc67566.js (polyfills-es5) 144 kB [initial] [rendered]
chunk {3} styles.3ff695c00d717f2d2a11.css (styles) 0 bytes [entry] [rendered]
chunk {polyfill-webcomp} polyfill-webcomp.54c6c652d6f94cfd6ee0.js (polyfill-webcomp) 109 kB [entry] [rendered]
chunk {polyfill-webcomp-es5} polyfill-webcomp-es5.97412fda132986395243.js (polyfill-webcomp-es5) 400 bytes [entry] [rendered]
chunk {scripts} scripts.b1672e511634172070fd.js (scripts) 1 MB [entry] [rendered]
Date: 2020-08-12T07:50:09.549Z - Hash: 2492079f876fa4cdf035 - Time: 28591ms
```

Next you can go to ```dist\headerApp``` folder and run http-server to see working header app: ```http-server -p 8123```.

## create single bundle for the headerApp

* new script ```build.elements.js``` has been created.
* build externals in ```package.json``` have been updated:   
  ng build --extra-webpack-config projects/headerApp/webpack.externals.js --prod --project headerApp --single-bundle **--output-hashing none && node build-element.js headerApp**
* install fs-extra and concat packages needed in ```build.elements.js```.
  ```
  npm i fs-extra --save-dev
  npm i concat --save-dev
  ```
* build the headerApp as single bundle: ```npm run build:headerApp:externals```
  it will create to files ```headerApp-elements-es5.js, headerApp-elements-es2015.js``` in ```\dist\headerApp\elements```.

## create single bundle for all other apps

```
npm run build:mainApp:externals
npm run build:sideApp:externals
npm run build:subApp:externals
npm run build:footerApp:externals
```

## create shell that will run all the apps

Copy all bundled js files to \shell\apps and next run ```http-server -p 8123``` from **shell** folder to see working app.