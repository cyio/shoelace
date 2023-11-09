import SlMyButton from './my-button.component.js';

export * from './my-button.component.js';
export default SlMyButton;

SlMyButton.define('sl-my-button');

declare global {
  interface HTMLElementTagNameMap {
    'sl-my-button': SlMyButton;
  }
}
