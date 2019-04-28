declare module '*.png' {
  const content: string;
  export default content;
}

declare module 'lit-element' {
  // noinspection TsLint
  export const LitElement: any;
  export const html: any;
}

declare module 'workbox-window' {
  // noinspection TsLint
  export const Workbox: any;
}

declare module 'lazysizes' {
  // noinspection TsLint
  const content: any;
  export default content;
}

declare module WebComponents {
  export const ready: boolean;
  export const waitFor: (callback: () => Promise<any>) => void;
}
