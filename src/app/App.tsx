import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateCustomerContainer from "../features/customers/create-customer/CreateCustomerContainer";
import applicationReducer from "../hooks/useStore/ApplicationReducer";
import { defaultApplicationState } from "../hooks/useStore/ApplicationState";
import { AppContext } from "../hooks/useStore/ApplicationStore";
import useCreateStore from "../hooks/useStore/CreateStore";

const App: React.FC = () => {
  const store = useCreateStore(defaultApplicationState(), applicationReducer);

  return (
    <AppContext.Provider value={store}>
      <Routes>
        <Route path={"/"} element={<CreateCustomerContainer />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
