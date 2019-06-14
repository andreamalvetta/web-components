declare module '*.png' {
  const content: string;
  export default content;
}

declare module 'lit-element' {
  export const LitElement: any;
  export const html: any;
  export const css: any;
  export const customElement: any;
  export const property: any;
}

declare module 'workbox-window' {
  export const Workbox: any;
}

declare module 'lazysizes' {
  const content: any;
  export default content;
}

declare module '@open-wc/testing' {
  export const html: any;
  export const fixture: any;
  export const expect: any;
}

declare module '@storybook/polymer' {
  export const storiesOf: any;
}

declare module '@storybook/addon-actions' {
  export const action: any;
  export const configureActions: any;
}

declare namespace WebComponents {
  export const ready: boolean;
  export const waitFor: (callback: () => Promise<any>) => void;
}
