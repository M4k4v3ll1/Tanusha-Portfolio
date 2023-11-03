import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Information} from "./layout/sections/information/Information";


function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Information/>
        </div>
    );
}

export default App;

