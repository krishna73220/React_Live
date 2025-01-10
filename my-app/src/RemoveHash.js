import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function RemoveHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Replace the URL by removing the `#` and keeping the current path
      window.history.replaceState({}, '', location.pathname + location.search);
    }
  }, [location]);

  return null;
}

export default RemoveHash;
