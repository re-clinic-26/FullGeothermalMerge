# Embedding the learning portal in Wix

The portal is a single long-scrolling page. Inside a Wix **Embed a Site / HTML
iframe** element it loses control of the scrollbar: if the iframe is sized to the
full page, the *Wix* page scrolls and `window.scrollTo` inside the iframe does
nothing. That is why the 1.2 / 1.3 section buttons looked dead.

The portal now handles this in `learning-portal/src/lib/embedScroll.ts`:

- If the iframe has its own scrollbar, it scrolls itself (unchanged behaviour).
- If it does not, it calls `scrollIntoView` (which bubbles to the host page) and
  posts a message to the parent window so Velo can scroll precisely.
- It also posts its rendered height, so the iframe can be resized to fit.

Messages sent to the parent window:

| message | payload | meaning |
| --- | --- | --- |
| `gen-portal-scroll` | `{ top, offset }` | scroll so that pixel `top` of the portal is at the top of the viewport |
| `gen-portal-height` | `{ height }` | the portal's full rendered height in px |

## Velo code for the Wix page

Turn on Dev Mode, select the embed element (its ID is usually `#html1`), and add
this to the page's code file:

```js
import wixWindow from 'wix-window';

$w.onReady(() => {
  const frame = $w('#html1');

  frame.onMessage((event) => {
    const data = event.data || {};

    if (data.type === 'gen-portal-height' && data.height) {
      // Grow the iframe so the whole portal is rendered; the Wix page scrolls.
      frame.height = Math.ceil(data.height);
    }

    if (data.type === 'gen-portal-scroll') {
      // frame.y is the element's position on the Wix page.
      const target = Math.max(0, frame.y + data.top - (data.offset || 0));
      wixWindow.scrollTo(0, target);
    }
  });
});
```

Notes:

- The embed element must be a **Wix HTML iframe / Embed a Site** element for
  `onMessage` to be available.
- Without this Velo code the buttons still work in most browsers via
  `scrollIntoView`, but the landing position is not offset-corrected and the
  sticky chapter bar will not track the host page's scroll.
- Because the iframe is cross-origin, the portal's own scroll spy cannot see the
  Wix page scrolling, so section highlighting updates on click rather than
  continuously while scrolling.
