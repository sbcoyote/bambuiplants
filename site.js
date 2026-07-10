const measurementId = 'G-WN4MCL9LML';

window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function gtag() {
  window.dataLayer.push(arguments);
};
window.gtag('js', new Date());
window.gtag('config', measurementId);

const analyticsScript = document.createElement('script');
analyticsScript.async = true;
analyticsScript.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
document.head.appendChild(analyticsScript);

document.querySelectorAll('a[href]').forEach((link) => {
  const destination = new URL(link.href, window.location.href);
  const marketplace = destination.hostname.includes('etsy.com')
    ? 'etsy'
    : destination.hostname.includes('ebay.com') || destination.hostname === 'ebay.us'
      ? 'ebay'
      : null;

  if (!marketplace) return;

  link.addEventListener('click', () => {
    const product = link.closest('article')?.querySelector('h2, h3')?.textContent?.trim() || 'storefront';
    window.gtag('event', 'marketplace_click', {
      marketplace,
      product,
      link_text: link.textContent.trim(),
    });
  });
});

const menuButton = document.querySelector('[data-menu-button]');
const navigation = document.querySelector('[data-site-nav]');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.dataset.open === 'true';
    navigation.dataset.open = String(!isOpen);
    menuButton.setAttribute('aria-expanded', String(!isOpen));
  });
}
document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});
