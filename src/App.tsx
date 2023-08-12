import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout } from './components/Layouts/Layout';
import { MainPage } from './pages/MainPage/MainPage';

function App() {
  return (
    <Layout>
      <MainPage />
    </Layout>
  );
}

export default App;
