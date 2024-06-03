import { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { prop } from 'ramda';

import { Alert as AlertCore } from '../ui/Alert';

const DEFAULT_ALERT = { type: '', message: '' };

const AlertContext = createContext({});
AlertContext.displayName = 'AlertContext';

const ALERT_TYPE_SUCCESS = 'success';
const ALERT_TYPE_ERROR = 'error';

const useAlertContext = () => {
  const { setAlertData, alertData } = useContext(AlertContext);

  const handleSetSuccessAlertData = (message) => (
    setAlertData({ type: ALERT_TYPE_SUCCESS, message })
  );
  const handleSetErrorAlertData = (message) => setAlertData({ type: ALERT_TYPE_SUCCESS, message });
  const handleResetAlertData = () => setAlertData(DEFAULT_ALERT);

  return {
    alertData,
    setSuccessAlertData: handleSetSuccessAlertData,
    setErrorAlertData: handleSetErrorAlertData,
    resetAlertData: handleResetAlertData,
  };
};

function AlertProvider({ children }) {
  const [alertData, setAlertData] = useState(DEFAULT_ALERT);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AlertContext.Provider value={{ alertData, setAlertData }}>
      {children}
    </AlertContext.Provider>
  );
}

export {
  AlertProvider,
  useAlertContext,
};

const getAlertColorByType = (type) => {
  switch (type) {
    case ALERT_TYPE_SUCCESS: {
      return 'light-green';
    }
    case ALERT_TYPE_ERROR: {
      return 'red';
    }
    default: {
      return 'gray';
    }
  }
};

function Alert() {
  const { alertData, resetAlertData } = useAlertContext();
  const location = useLocation();

  useEffect(() => {
    resetAlertData();
  }, [location.key]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="absolute z-10 w-full p-2">
      <AlertCore
        color={getAlertColorByType(prop('type', alertData))}
        open={Boolean(prop('message', alertData))}
        onClose={resetAlertData}
      >
        {prop('message', alertData)}
      </AlertCore>
    </div>
  );
}

export default Alert;
