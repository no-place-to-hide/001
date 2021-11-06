import { Background } from './components/Background';
import { FormContainer } from './components/FormContainer';
import { Form_01 } from './components/Form_01';
import { Form_02 } from './components/Form_02';
import { Form_03 } from './components/Form_03';
import { Form_04 } from './components/Form_04'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';;

function App() {
  return (
    <div>
    <Router>
      <div className="App">
        <Switch>
            <Route path="/001/form-4">
              <Background />
              <FormContainer>
                  <Form_04 />
              </FormContainer>
            </Route>
            <Route path="/001/form-3">
              <Background />
              <FormContainer options={{ black: true }}>
                  <Form_03 />
              </FormContainer>
            </Route>
            <Route path="/001/form-2">
              <Background />
              <FormContainer>
                  <Form_02 />
              </FormContainer>
            </Route>
            <Route path="/001">
              <Background />
              <FormContainer>
                  <Form_01 />
              </FormContainer>
            </Route>
          </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
