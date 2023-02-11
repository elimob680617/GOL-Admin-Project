import { BrowserRouter } from 'react-router-dom';

import Pages from './routes/Pages';

const App = () => {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
};

export default App;
