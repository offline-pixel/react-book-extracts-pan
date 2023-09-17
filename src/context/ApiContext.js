import React, { createContext, useContext, useEffect, useState } from 'react';
import { API_BASE_URL } from '../config/config';

const ApiContext = createContext();

export function useApi() {
  const api = useContext(ApiContext);
  if (!api) {
    throw new Error('useApi must be used within an ApiProvider');
  }
  return api;
}

export function ApiProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/getextracts`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const jsonData = await response.json();
      setData(jsonData); // Update the data state with the fetched data
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data only once when the component mounts

  return (
    <ApiContext.Provider value={{ data, loading }}>
      {children}
    </ApiContext.Provider>
  );
}
