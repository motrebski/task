# 11. Proszę zaproponować (bez potrzeby implementacji) jakie uwagi powinny zostać zgłoszone do autora API oraz jakie testy powinny być napisane dla tej aplikacji.

Uwagi do autora API:
1. Jeśli błąd jest powiązany z jakimikolwiek parametrami wejściowymi, błąd powinien być zwracany jako błąd serii 400.
2. Serwer powinien zwracać wartość zgodną z ustalonym typem, na przykład 
rotation: number. W jednym z przypadków zwracany jest string dla rotation, co nie powinno mieć miejsca.
3. Czas oczekiwania na odpowiedź jest za długi.

Unit testy:
1. Sprawdzić, czy po kliknięciu przycisku "Fetch" elementy w svg są wyrenderowane.
2. Przetestować funkcję wyliczającą szerokość i wysokość Bounding Box.
3. Sprawdzić, czy dla błędnych danych z serwera pojawi się informacja dla użytkownika.
4. Sprawdzić, czy pojawi się informacja o błędzie, gdy serwer zwraca błąd 404 lub 500.
5. Sprawdzić, czy przycisk jest ustawiony na disabled, gdy dane są pobierane.
6. Sprawdzić, czy dla poprawnych danych wyrenderowane zostaje name i id.
7. Sprawdzić, czy walidacja dla inputa działa poprawnie.
8. Sprawdzić, czy strona Not Found Page wyświetla się poprawnie.
9. Sprawdzić, czy informacja o braku danych pojawia się przy pierwszym wejściu na stronę startową.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
