import { useState } from 'react';

const useAlert = () => {
  const [alert, setAlert] = useState({
    show: false,
    text: '',
    type: 'danger'
  });

  const showAlert = ({ text, type = 'danger' }) =>
    setAlert({ show: true, text, type });

  const hideAlert = () =>
    setAlert(prev => ({
      ...prev,
      show: false
    }));

  return { alert, showAlert, hideAlert };
};

export default useAlert;
