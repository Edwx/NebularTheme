# NebularTheme

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.

Original Theme: [ngx-admin](http://akveo.com/ngx-admin) made by [Akveo Team](https://github.com/akveo/ngx-admin/) (GitHub).

Here you can find [documentation](https://akveo.github.io/nebular/docs/getting-started/what-is-nebular).

## Update NbMenuModule (ionicons v4.4.4)

`mode_modules > @nebular > theme > components > menu > menu-item.component.html > old > new`

<i class="ion chevron" [class.ion-chevron-left]="!menuItem.expanded" [class.ion-chevron-down]="menuItem.expanded"></i>

<i class="ion" [class.ion-ios-arrow-back]="!menuItem.expanded" [class.ion-ios-arrow-down]="menuItem.expanded"></i>

`mode_modules > @nebular > theme > components > menu > menu.component.js > old > new`

<i class=\"ion chevron\" [class.ion-chevron-left]=\"!menuItem.expanded\" [class.ion-chevron-down]=\"menuItem.expanded\"></i>

<i class=\"ion\" [class.ion-ios-arrow-back]=\"!menuItem.expanded\" [class.ion-ios-arrow-down]=\"menuItem.expanded\"></i>

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
