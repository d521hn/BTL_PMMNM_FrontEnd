import React from "react";
import { Provider } from "react-redux";
// import ReduxToastr from "react-redux-toastr";

import store from "./redux/store/index";
import AppRoutes from "./routes/Routes";

const App = () => (
  <Provider store={store}>
    <AppRoutes />
    {/* <ReduxToastr
      timeOut={5000}
      newestOnTop={true} 
      position="top-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastrClick
    /> */}
  </Provider>
);

export default App;
