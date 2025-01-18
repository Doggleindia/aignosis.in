import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'; // Import ChakraProvider
import { Provider } from './components/ui/provider'; // Your custom provider
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider> {/* Wrap with ChakraProvider */}
      <Provider>
        <App />
      </Provider>
    </ChakraProvider>
  </StrictMode>
);
