/**
 * Scrolling helpers that survive being embedded in a Wix "Embed a Site" iframe.
 *
 * When the portal is embedded at its full height, the iframe document itself has
 * nothing to scroll: the host page owns the scrollbar. `window.scrollTo` inside
 * the frame is then a no-op, which is why the chapter/section buttons appear
 * dead. In that case we ask the browser to bring the element into view (which
 * bubbles up through the frame) and also tell the host page where we want to go,
 * so Velo code on the Wix side can scroll the outer page precisely.
 */

export const SCROLL_MESSAGE = 'gen-portal-scroll';
export const HEIGHT_MESSAGE = 'gen-portal-height';

const isEmbedded = () => {
  try {
    return window.parent !== window;
  } catch {
    return true;
  }
};

/** True when this document has its own scrollbar (standalone, or a short iframe). */
const canScrollSelf = () =>
  document.documentElement.scrollHeight - window.innerHeight > 4;

const postToHost = (message: Record<string, unknown>) => {
  if (!isEmbedded()) {
    return;
  }

  try {
    window.parent.postMessage(message, '*');
  } catch {
    /* host frame not reachable; nothing else we can do from here */
  }
};

/**
 * Scroll so that `target` sits `offset` pixels below the top of the viewport.
 * `top` is the absolute document position we would scroll to on our own.
 */
export function scrollToTarget(target: Element, offset = 0) {
  const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

  if (canScrollSelf()) {
    window.scrollTo({ top, behavior: 'smooth' });
    return;
  }

  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  postToHost({ type: SCROLL_MESSAGE, top: Math.max(0, Math.round(top)), offset });
}

/** Scroll back to the top of the portal, embedded or not. */
export function scrollToTop() {
  if (canScrollSelf()) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
  postToHost({ type: SCROLL_MESSAGE, top: 0, offset: 0 });
}

/**
 * Report our rendered height to the host page so a Wix embed can size its
 * iframe to the whole portal instead of clipping it. Returns a cleanup function.
 */
export function reportHeightToHost() {
  if (!isEmbedded() || typeof ResizeObserver === 'undefined') {
    return () => {};
  }

  let lastHeight = 0;

  const send = () => {
    const height = Math.ceil(
      Math.max(document.documentElement.scrollHeight, document.body.scrollHeight),
    );

    if (Math.abs(height - lastHeight) < 2) {
      return;
    }

    lastHeight = height;
    postToHost({ type: HEIGHT_MESSAGE, height });
  };

  const observer = new ResizeObserver(send);
  observer.observe(document.body);
  window.addEventListener('load', send);
  send();

  return () => {
    observer.disconnect();
    window.removeEventListener('load', send);
  };
}
