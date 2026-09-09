// Minimal thin-stroke icon set (24x24, stroke=currentColor).
// Kept as raw SVG strings so they can be dropped in with v-html and
// inherit color via CSS `color` on the wrapping element.

const stroke = (inner) =>
  `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${inner}</g></svg>`;

export const icons = {
  moon: stroke(`<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"/>`),
  flame: stroke(`<path d="M12 2.5c1 2.5-3 4-3 8a3 3 0 0 0 6 0c1 0 2 1 2 2.8A5 5 0 0 1 12 21a5.3 5.3 0 0 1-5.2-6.4C7.3 11.5 10 10 12 2.5Z"/>`),
  sparkle: stroke(`<path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M6 18l2-2M16 8l2-2"/><circle cx="12" cy="12" r="2.4"/>`),
  cup: stroke(`<path d="M6 8h11l-1 9.5A2 2 0 0 1 14 19.5H9a2 2 0 0 1-2-2.1L6 8Z"/><path d="M9 8V6.5A3 3 0 0 1 12 3.5a3 3 0 0 1 3 2.5M9.5 11v4M12 11v4M14.5 11v4"/>`),
  link: stroke(`<path d="M10 14a4.2 4.2 0 0 1 0-6l2-2a4.2 4.2 0 0 1 6 6l-1 1"/><path d="M14 10a4.2 4.2 0 0 1 0 6l-2 2a4.2 4.2 0 0 1-6-6l1-1"/>`),
  hearts: stroke(`<path d="M9.2 5.4c1.5 0 2.6 1 2.8 2.3.2-1.3 1.3-2.3 2.8-2.3 1.7 0 3 1.4 3 3.1 0 3-3.4 5.6-5.8 7.4-2.4-1.8-5.8-4.4-5.8-7.4 0-1.7 1.3-3.1 3-3.1Z"/>`),
  trophy: stroke(`<path d="M7 4h10v4a5 5 0 0 1-10 0V4Z"/><path d="M7 5H4.5A1.5 1.5 0 0 0 3 6.5 3.5 3.5 0 0 0 6.5 10M17 5h2.5A1.5 1.5 0 0 1 21 6.5 3.5 3.5 0 0 1 17.5 10M12 13v3M9 20h6M10 16.5h4v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2Z"/>`),
  party: stroke(`<path d="M4 20 14 10M14 10l6 1-1-6-9 5Z"/><path d="M6 5l1 1M11 3l.6 1.4M18 8.5l1.4.6"/>`),
  gift: stroke(`<rect x="4" y="9" width="16" height="11" rx="1.2"/><path d="M4 9h16v3H4z"/><path d="M12 9v11M12 9C9.5 9 8 7.6 8 6.2 8 5 9 4 10.2 4 11.5 4 12 6 12 9ZM12 9c2.5 0 4-1.4 4-2.8C16 5 15 4 13.8 4 12.5 4 12 6 12 9Z"/>`),
  eye: stroke(`<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="2.5"/>`),
  pin: stroke(`<path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.2"/>`),
  phone: stroke(`<path d="M6.5 3.5h3L11 8l-2 1.5a11 11 0 0 0 5.5 5.5L16 13l4.5 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z"/>`),
  widget: stroke(`<rect x="3.5" y="3.5" width="7" height="7" rx="1.2"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.2"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.2"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.2"/>`),
  cake: stroke(`<path d="M4 21v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M4 21h16M4 17h16M9 13V9M15 13V9M12 13V7M9 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM12 4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM15 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>`),
  cameraOff: stroke(`<path d="M3 3l18 18M9 5h1.5L12 3h0l1.5 2H15a2 2 0 0 1 2 2v.5M21 9v8a2 2 0 0 1-2 2H7.5M5 8.2A2 2 0 0 0 3 10v7a2 2 0 0 0 2 2h9.8"/><circle cx="12" cy="13" r="3"/>`),
  ban: stroke(`<circle cx="12" cy="12" r="8.5"/><path d="M6.3 6.3l11.4 11.4"/>`),
  calendar: stroke(`<rect x="3.5" y="5" width="17" height="15.5" rx="1.5"/><path d="M3.5 9.5h17M8 3v3.5M16 3v3.5"/>`),
  users: stroke(`<circle cx="8.5" cy="9" r="3"/><circle cx="16" cy="10.2" r="2.4"/><path d="M3 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5M14.5 14.5c2.4.2 4 1.8 4 4.5"/>`),
  heartHandshake: stroke(`<circle cx="12" cy="9" r="4.3"/><path d="M9.3 12.6 6.5 20l5.5-2.7 5.5 2.7-2.8-7.4"/>`),
  crown: stroke(`<path d="M4 8l4 3 4-5 4 5 4-3-1.5 9.5h-13L4 8Z"/><path d="M6.5 20.5h11"/>`),
  bell: stroke(`<path d="M6 10a6 6 0 0 1 12 0c0 4 1.5 5.5 1.5 5.5H4.5S6 14 6 10Z"/><path d="M10.3 19a1.8 1.8 0 0 0 3.4 0"/>`),
  flameSlash: stroke(`<path d="M3 3l18 18"/><path d="M12 2.5c.7 1.8-1.2 3.2-2.4 5.4M14.9 9.5c.6.9.9 1.9.9 2.9a3 3 0 0 1-.4 1.5M7.4 9c-.3 1.3-.6 2.5-.6 3.5A5.3 5.3 0 0 0 12 17.8a5.3 5.3 0 0 0 3.4-1.2"/>`),
};

export default icons;
