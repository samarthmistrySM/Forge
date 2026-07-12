declare module 'react' {
  export type ReactNode = any;
  export type FC<P = {}> = (props: P) => any;
  export type Dispatch<A> = (value: A) => void;

  export function useMemo<T>(factory: () => T, deps: readonly unknown[]): T;
  export function useState<S>(initialState: S | (() => S)): [S, Dispatch<S | ((prevState: S) => S)>];
  export function useEffect(effect: () => void | (() => void), deps?: readonly unknown[]): void;

  const React: any;
  export default React;
}

declare module 'react/jsx-runtime' {
  export function jsx(type: any, props: any, key?: any): any;
  export const jsxs: typeof jsx;
  export const Fragment: any;
}

declare module 'react/jsx-dev-runtime' {
  export function jsx(type: any, props: any, key?: any): any;
  export const jsxs: typeof jsx;
  export const Fragment: any;
}
