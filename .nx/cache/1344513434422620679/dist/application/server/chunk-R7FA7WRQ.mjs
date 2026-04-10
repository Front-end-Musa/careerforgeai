import './polyfills.server.mjs';
import {
  Store,
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props
} from "./chunk-CAWULYCF.mjs";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-AU5YAMHR.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TB3YAHZW.mjs";

// src/app/pages/auth/data/auth.actions.ts
var registerUser = createAction("[Users] Register User", props());
var registerUserSuccess = createAction("[Users] Register User Success", props());
var registerUserFailure = createAction("[Users] Register User Failure", props());
var loginUser = createAction("[Users] Login User", props());
var loginUserSuccess = createAction("[Users] Login User Success", props());
var loginUserFailure = createAction("[Users] Login User Failure", props());
var initUser = createAction("[Users] Init User");
var initUserSuccess = createAction("[Users] Init User Success", props());
var initUserFailure = createAction("[Users] Init User Failure", props());
var logout = createAction("[Users] Logout User");
var logoutSuccess = createAction("[Users] Logout User Success");
var logoutFailure = createAction("[Users] Logout User Failure", props());
var authResolvedNoUser = createAction("[Users] Auth Resolved No User");
var deleteAccount = createAction("[Users] Delete Account");
var deleteAccountSuccess = createAction("[Users] Delete Account Success");
var deleteAccountFailure = createAction("[Users] Delete Account Failure", props());

// src/app/pages/auth/data/auth.reducer.ts
var AuthStatus;
(function(AuthStatus2) {
  AuthStatus2["Init"] = "init";
  AuthStatus2["Loading"] = "loading";
  AuthStatus2["Loaded"] = "loaded";
  AuthStatus2["Error"] = "error";
})(AuthStatus || (AuthStatus = {}));
var initialState = {
  user: null,
  status: AuthStatus.Init,
  error: null
};
var authReducer = createReducer(initialState, on(registerUser, (state) => __spreadProps(__spreadValues({}, state), {
  status: AuthStatus.Loading,
  error: null
})), on(registerUserSuccess, (state, { user }) => __spreadProps(__spreadValues({}, state), {
  user,
  status: AuthStatus.Loaded,
  error: null
})), on(registerUserFailure, (state, { error }) => __spreadProps(__spreadValues({}, state), {
  user: null,
  status: AuthStatus.Error,
  error
})), on(loginUser, (state) => __spreadProps(__spreadValues({}, state), {
  user: null,
  status: AuthStatus.Loading,
  error: null
})), on(loginUserSuccess, (state, { user }) => __spreadProps(__spreadValues({}, state), {
  user,
  status: AuthStatus.Loaded,
  error: null
})), on(loginUserFailure, (state, { error }) => __spreadProps(__spreadValues({}, state), {
  user: null,
  status: AuthStatus.Error,
  error
})), on(initUser, (state) => __spreadProps(__spreadValues({}, state), {
  status: AuthStatus.Loading,
  error: null
})), on(initUserSuccess, (state, { user }) => __spreadProps(__spreadValues({}, state), {
  user,
  status: AuthStatus.Loaded,
  error: null
})), on(initUserFailure, (state, { error }) => __spreadProps(__spreadValues({}, state), {
  user: null,
  status: AuthStatus.Error,
  error
})), on(logout, (state) => __spreadProps(__spreadValues({}, state), {
  status: AuthStatus.Loading,
  error: null
})), on(logoutSuccess, () => __spreadProps(__spreadValues({}, initialState), {
  // Reset to initial state on success
  status: AuthStatus.Init
})), on(logoutFailure, (state, { error }) => __spreadProps(__spreadValues({}, state), {
  status: AuthStatus.Error,
  error
})), on(deleteAccount, (state) => __spreadProps(__spreadValues({}, state), {
  status: AuthStatus.Loading,
  error: null
})), on(deleteAccountSuccess, () => __spreadProps(__spreadValues({}, initialState), {
  // Reset to initial state on success
  status: AuthStatus.Init
})), on(deleteAccountFailure, (state, { error }) => __spreadProps(__spreadValues({}, state), {
  status: AuthStatus.Error,
  error
})), on(authResolvedNoUser, (state) => __spreadProps(__spreadValues({}, state), {
  status: AuthStatus.Init,
  user: null
})));
var reducerName = "auth";

// src/app/pages/auth/data/auth.selectors.ts
var selectAuthState = createFeatureSelector(reducerName);
var selectUser = createSelector(selectAuthState, (state) => state.user);
var selectAuthStatus = createSelector(selectAuthState, (state) => state.status);
var selectAuthError = createSelector(selectAuthState, (state) => state.error);

// src/app/pages/auth/data/auth.facade.ts
var AuthFacade = class _AuthFacade {
  store = inject(Store);
  user$ = this.store.select(selectUser);
  status$ = this.store.select(selectAuthStatus);
  error$ = this.store.select(selectAuthError);
  register(user) {
    this.store.dispatch(registerUser({ user }));
  }
  login(user) {
    this.store.dispatch(loginUser({ user }));
  }
  initAuth() {
    this.store.dispatch(initUser());
  }
  logout() {
    this.store.dispatch(logout());
  }
  deleteAccount() {
    this.logout();
    this.store.dispatch(deleteAccount());
  }
  static \u0275fac = function AuthFacade_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthFacade)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthFacade, factory: _AuthFacade.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthFacade, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  registerUser,
  registerUserSuccess,
  registerUserFailure,
  loginUser,
  loginUserSuccess,
  loginUserFailure,
  initUser,
  initUserSuccess,
  initUserFailure,
  logout,
  logoutSuccess,
  logoutFailure,
  authResolvedNoUser,
  deleteAccount,
  deleteAccountSuccess,
  deleteAccountFailure,
  AuthStatus,
  authReducer,
  AuthFacade
};
//# sourceMappingURL=chunk-R7FA7WRQ.mjs.map
