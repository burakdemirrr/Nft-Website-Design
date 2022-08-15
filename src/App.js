import  React,{ Suspense } from 'react';
import './App.css';

const LazyHome = React.lazy(() => import("./components/Home"))

function App() {

  return (
    <div className="App">
      <Suspense fallback="loading">
        <LazyHome />
      </Suspense>
    </div>
  );
}

export default App;
