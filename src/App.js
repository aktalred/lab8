import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Podaj k: </p>
                <input id='fib_k'/>
                <p></p>
                <button onClick={showResult}>Oblicz</button>
                <p id='result'></p>
            </header>
        </div>
    );
}

function showResult() {
    let k = document.getElementById('fib_k').value;
    let result = fib(k);
    document.getElementById('result').innerHTML = 'Wynik: ' + result;
}

function fib(k) {
    if (k < 3)
        return 1;

    return fib(k - 2) + fib(k - 1);
}

export default App;
