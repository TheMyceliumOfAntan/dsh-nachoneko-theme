/**
 * dsh-nachoneko-theme — host half (no-op).
 *
 * This plugin is a pure browser theme: everything it ships lives in the
 * `./client` bundle, which injects the theme stylesheet into the document.
 * The host half exists only so the package is a valid Cordis plugin row
 * (`dsh.bundle.patch` inserts the row; `dsh.client` makes the browser half
 * part of the web boot roster).
 */
export const name = "dsh-nachoneko-theme";

export function apply() {
  // Nothing to do on the host side — see client.js for the theme itself.
}
