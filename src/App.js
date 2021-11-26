import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// Importando as páginas
import Home from './components/pages/Home'
import Sobre from './components/pages/Sobre'
import Contato from './components/pages/Contato'
import NovoProjeto from './components/pages/NovoProjeto'

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Sobre">Contato</Link>
        <Link to="/Contato">Sobre</Link>
        <Link to="/NovoProjeto">Novo Projeto</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Sobre">
          <Sobre />
        </Route>
        <Route exact path="/Contato">
          <Contato />
        </Route>
        <Route exact path="/NovoProjeto">
          <NovoProjeto />
        </Route>
      </Switch>
      <p>Footer</p>
    </Router>
  );
}

export default App;
