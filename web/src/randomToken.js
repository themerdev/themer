export default function randomToken() {
  const arr = new Uint8Array(16);
  window.crypto.getRandomValues(arr);
  return [...arr].map((n) => n.toString(16).padStart(2, '0')).join('');
}
