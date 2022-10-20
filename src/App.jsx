import './App.css';
import { Message } from './components/Message/Message';
import { Title } from './components/Title/Title';

export const App = (props) => {
    return (
      <div className="App">
        <Title name="Title: "/>
        <Title>Title: Children</Title>
        <Message />
      </div>
    );
};
