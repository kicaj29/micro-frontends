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