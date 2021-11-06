import { Background } from './components/Background';
import { FormContainer } from './components/FormContainer';
import { Form_01 } from './components/Form_01';
import './App.css';

function App() {
  return (
    <div className="App">
      <Background />
      <FormContainer>
        <Form_01 />
      </FormContainer>
    </div>
  );
}

export default App;
