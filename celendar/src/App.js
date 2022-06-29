import { Calendar } from './Components/Calendar';

import './main.css';

function App() {
  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className="highlight-overlay"></div>
      </div>
      <div className="window">
        <Calendar />
      </div>
    </div>
  );
}

export default App;
