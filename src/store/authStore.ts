import { useSyncExternalStore } from "react";

type AuthUser = {
  name?: string;
  email?: string;
};

type LoginPayload = {
  token?: string | null;
  user?: AuthUser | null;
};

type AuthState = {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (payload?: LoginPayload) => void;
  logout: () => void;
};

type Selector<T> = (state: AuthState) => T;

let state: Omit<AuthState, "login" | "logout"> = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((listener) => listener());
}

function login(payload?: LoginPayload) {
  state = {
    user: payload?.user ?? null,
    token: payload?.token ?? null,
    isAuthenticated: true,
  };
  notify();
}

function logout() {
  state = {
    user: null,
    token: null,
    isAuthenticated: false,
  };
  notify();
}

function getSnapshot(): AuthState {
  return {
    ...state,
    login,
    logout,
  };
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useAuthStore<T>(selector: Selector<T>): T {
  return useSyncExternalStore(subscribe, () => selector(getSnapshot()));
}
