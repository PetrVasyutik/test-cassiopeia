document.querySelectorAll('[data-variant-trigger]').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const id = trigger.dataset.variantTrigger;
    const panel = document.querySelector(`[data-variant-panel="${id}"]`);
    if (!panel) {return;}

    const isOpen = !panel.hidden;

    document.querySelectorAll('[data-variant-panel]').forEach((p) => {
      p.hidden = true;
    });
    document.querySelectorAll('[data-variant-trigger]').forEach((t) => {
      t.setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      panel.hidden = false;
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') {return;}

  const openPanel = document.querySelector('[data-variant-panel]:not([hidden])');
  if (!openPanel) {return;}

  const id = openPanel.dataset.variantPanel;
  const trigger = document.querySelector(`[data-variant-trigger="${id}"]`);

  openPanel.hidden = true;
  if (trigger) {
    trigger.setAttribute('aria-expanded', 'false');
    trigger.focus();
  }
});
