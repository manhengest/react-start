import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/Counter";
import {Title} from "./components/Title";
import {MoviesTable} from "./components/MoviesTable";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>

                <Title name="Hello" />
                <Counter />
                <MoviesTable />
            </header>
        </div>
    );
}

export default App;
