import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Router } from "./routes/app.routes";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Router></Router>
          </Suspense>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
