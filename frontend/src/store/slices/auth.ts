import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccountResponse } from "../types";

type AuthState = {
  token: string | null;
  refreshToken: string | null;
  account: AccountResponse | null;
};

const initialState: AuthState = {
  token: null,
  refreshToken: null,
  account: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthTokens(
      state: AuthState,
      action: PayloadAction<{ token: string; refreshToken: string }>,
    ) {
      state.refreshToken = action.payload.refreshToken;
      state.token = action.payload.token;
    },
    setAccount(state: AuthState, action: PayloadAction<AccountResponse>) {
      state.account = action.payload;
    },
    logout(state: AuthState) {
      state.account = null;
      state.refreshToken = null;
      state.token = null;
    },
  },
});

export default authSlice;
