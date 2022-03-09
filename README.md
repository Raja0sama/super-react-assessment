## Code Assessment

Link to Deployed Version of the App: https://raja0sama.github.io/super-react-assessment/

The is Super Movies, a project developed for the code assessment. The Project is built with React, and the CSS library used is Tailwind. The Project overall has a well-structured routing setup. It can implement an authorization quickly with the support of the public, authorized and post authorized routes setup. The Project also contains React redux Took kit and is structured Following the Re-ducks method. All your actions, states, reducers, effects, and modules' subscriptions should be in a single file. The Project support both kinds of Https adapter over Rest API as well as Over GraphQL

- Routes are defined in src/config/routes, and each page in the src/page is attached to the routes via the Lazy react module.
- Redux is Configured with the re-ducks approach. All the src/redux/models, if attached to models in src/redux/store, can become a part of the store.
- Each Redux Model Contain Effects, which are thunks effects.
- Each model subscription will initiate as fast as the App starts.
  The layout is being set to distinguish between protected and unprotected routes; however, they are not being used for this Project.
- Helpers and Services functions exists in src/services
- Minimal Tests for movie services are written in the service folder

The App also has docker support. However, the Project is deployed on Github pages, and there was no need for it.

Storybook is also configured; however, some components are not visible because of functions and hooks like useNavigator.

To Switch between Rest and GraphQL adapter, in the config file, change graphQLDataAdapter to true and false to verify if the application is using the graphQL or Rest Adapter. In the browser in console.log, you can find the very first log stating something like this 💧 Using GraphQL Methods or 🔥 Using Rest Methods

The Link to Backend Repo is Here
https://github.com/Raja0sama/super-nest-assessment-

Thank You.
Raja Osama
(https://rajaosama.me/)
