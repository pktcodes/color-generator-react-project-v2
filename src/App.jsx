import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import Form from './Form';
import ColorList from './ColorList';
import Values from 'values.js';

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10));

  toast.error('error');
  toast.success('success');

  return (
    <main>
      <Form />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
