import Form from './Form';
import ColorList from './ColorList';
import Values from 'values.js';

import { useState } from 'react';

const App = () => {
  const [colors, setColors] = useState(new Values().all(10));

  console.log(colors);

  return (
    <main>
      <Form />
      <ColorList />
    </main>
  );
};
export default App;
