# Currency Exchange Rates

A simple web application to display currency exchange rates using Node.js and Chart.js. This project fetches exchange rates from the Frankfurter API and displays them in an interactive chart.

## Features

- Display exchange rates for selected base currency.
- Limit displayed currencies to USD, PLN, EUR, and JPY.
- Interactive chart using Chart.js.
- Selectable base currency.

## Installation

1. Clone the repository:

    ```sh
   https://github.com/MateuszLesniakSLU/LesniakEgzamin
    ```

2. Navigate to the project directory:

    ```sh
    cd egzamin
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

## Usage

1. Start the server:

    ```sh
    npm start
    ```

2. Open your browser and go to `http://localhost:3000`.

## Project Structure

- `public/`
    - `index.html`: The main HTML file for the application.
- `src/`
    - `server.js`: The Node.js server file.
- `.gitignore`: Git ignore file.
- `package.json`: Project dependencies and scripts.
- `README.md`: Project documentation.

## Dependencies

- [express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js.
- [axios](https://www.npmjs.com/package/axios): Promise based HTTP client for the browser and node.js.
- [chart.js](https://www.chartjs.org/): Simple yet flexible JavaScript charting for designers & developers.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

Mateusz Leśniak
