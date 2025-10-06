import logo from './assets/react.svg'; // декларативный
import "./App.css"; // декларативный

const addZero = (num) => String(num).length === 1 ? `0${num}` : String(num); // императивный

const getDateFormat = (date, separator) => { // императивный
	const day = date.getDate(); // декларативный
    const month = date.getMonth(); // декларативный
    const year = date.getFullYear(); // декларативный
    return [day, month +1, year].map(addZero).join(separator); // декларативный
}
const data = getDateFormat(new Date(), '-'); // декларативный

export const App = () => { // императивный
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
					>
					Learn React
				</a>
				<div>
					{ data }
				</div>
			</header>
		</div>
	); // весь декларативный
};
