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