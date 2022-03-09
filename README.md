## Code Assessment

Link to Deployed Version of the app : https://raja0sama.github.io/super-react-assessment/

The is Super Movies, a project developed for the code assessment. The Project is build with React and the css library that is being used is Tailwind. The Project overall has well structured routing setup, and can implement an authorization easily with the support of public, authorized and post authorized routes setup. The Project also contain React redux Took kit, and is structure Following the Re-ducks method, According to which all your action, states, reducers, effects and subscriptions for a module should be in a single file. The Project support both kind of Https adapter over Rest API as well as Over GraphqL

- Routes are Defined in src/config/routes, and each page in the src/page is attached to the routes via Lazy react module.
- Redux is Configured with reducks approach, All the src/redux/models, if attached to models in src/redux/store can become a part of the store.
- Each Redux Model Contain Effects, which are thunks effects.
- Each model subscriptions will init as fast as the app starts.
- Layout are being set to distinguished between protected and unprotected routes, however for this project they are not being used.
- Helpers and Services functions exists in src/services

The App also has docker support however for the project is deployed on github pages and there was no need for it.

Storybook is also configure however some component are not visible because of usage of functions and hooks like useNavigator.

To Switch between Rest and GraphQL adapter, in the config file just change graphQLDataAdapter to true and false, to verify if the application is using the graphQL or Rest Adapter, in the browser in console.log, you can find the very first log stating something like this 💧 Using GraphQL Methods or 🔥 Using Rest Methods

The Link to Backend Repo is Here
https://github.com/Raja0sama/super-nest-assessment-

Thank You.
Raja Osama
(https://rajaosama.me/)
