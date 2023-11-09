import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import { property } from 'lit/decorators.js';
import { watch } from '../../internal/watch.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import styles from './my-button.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Short summary of the component's intended use.
 * @documentation https://shoelace.style/components/my-button
 * @status experimental
 * @since 2.0
 *
 * @dependency sl-example
 *
 * @event sl-click - Emitted as an example.
 *
 * @slot - The default slot.
 * @slot example - An example slot.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
export default class SlMyButton extends ShoelaceElement {
  static styles: CSSResultGroup = styles;

  private readonly localize = new LocalizeController(this);

  /** An example attribute. */
  @property() attr = 'example';

  @watch('attr')
  handleExampleChange() {
    // do something
    console.log('handleExampleChange', this.localize)
  }

  private handleClick() {
    console.log('handleClick')
    this.emit('sl-click');
  }

  render() {
    return html`<button @click=${this.handleClick}>${this.attr}</button>`;
  }
}
