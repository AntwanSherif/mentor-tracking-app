import { configureStore } from "@reduxjs/toolkit";
import shipmentReducer from "./shipment";

export default configureStore({
  reducer: {
    shipment: shipmentReducer,
  },
});
