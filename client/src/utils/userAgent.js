import Bowser from 'bowser';

export const isBrowserSafari = () => {
  const parser = Bowser.getParser(window.navigator.userAgent);
  const browserName = parser.getBrowserName();
  return browserName === 'Safari';
};
