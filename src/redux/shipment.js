import { createSlice } from "@reduxjs/toolkit";

export const shipmentSlice = createSlice({
  name: "shipment",
  initialState: {
    shipment_no: 0,
  },
  reducers: {
    new_value: (state, action) => {
      state.shipment_no = action.payload;
    },
  },
});

export const get_shipment = (state) => {
  return state.shipment.shipment_no;
};

export const { new_value } = shipmentSlice.actions;

export default shipmentSlice.reducer;
