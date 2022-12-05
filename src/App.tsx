import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

import 'fonts/font.css';
import { GlobalStyle } from 'styles/globalStyle';
import Main from 'pages/Main';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      suspense: true,
      useErrorBoundary: true,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
