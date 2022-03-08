##

The scaffold used in this app is named super react, An open-source project i am working on. Beside that the app overall

## Super React

A Perfect boiler plate for mega react js projects that contains the following

- Storyboard ✅
- React Routes ✅
- Jest ✅
- Docker ✅
- React Redux ✅
- Layout ✅

## Routes :

to add routes with the application, you need to mention the routes name is config/routes. There are three kind of routes, one is public, and two are post and pre authenticated routs, meaning one would be hidden when a person is logged out and when will be hidden when the person is logged in.

## Add Pages, Or component.

I would suggest you to use generate-react-cli to add a component, There are four types of generate react cli command set by default.

to generate component : `npx generate-react-cli component Box`

to generate Public Pages : `npx generate-react-cli component 404 --type=public-page`

to generate component : `npx generate-react-cli component Login --type=pre-auth-page`

to generate component : `npx generate-react-cli component Dashboard --type=post-auth-page`

to generate component : `npx generate-react-cli component BasicLayout --type=layout`
