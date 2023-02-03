import { createSlice } from "@reduxjs/toolkit";

export const shipmentSlice = createSlice({
  name: "shipment",
  initialState: {
    shipment_no: 0,
  },
  reducers: {},
});

// Action creators are generated for each case reducer function
export const { getShipmentInfo } = counterSlice.actions;

export default shipmentSlice.reducer;
