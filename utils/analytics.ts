// Declare global window interface
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer?: any[];
  }
}

interface DataLayerEvent {
  event: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export const pushDataLayerEvent = (eventData: DataLayerEvent): void => {
  window.dataLayer?.push(eventData);
};
