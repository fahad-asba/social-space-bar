import { test, expect } from '@playwright/test';

test('no console errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', err => errors.push(err.message));
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');
  expect(errors).toEqual([]);
});

test('all sections present', async ({ page }) => {
  await page.goto('/');
  const sections = ['hero', 'about', 'services', 'portfolio', 'why-us', 'pricing'];
  for (const id of sections) {
    await expect(page.locator(`#${id}`)).toBeVisible({ timeout: 10000 });
  }
});

test('nav links work', async ({ page }) => {
  await page.goto('/');
  const navLinks = page.locator('.nav-link');
  const count = await navLinks.count();
  expect(count).toBeGreaterThanOrEqual(6);
});

test('hero content visible', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#hero .hero-badge')).toBeVisible();
  await expect(page.locator('#hero .hero-title')).toBeVisible();
  await expect(page.locator('#hero .btn-primary')).toBeVisible();
  await expect(page.locator('#hero .hero-chat-btn')).toBeVisible();
});

test('no broken images', async ({ page }) => {
  const broken: string[] = [];
  page.on('response', resp => {
    if (resp.request().resourceType() === 'image' && resp.status() >= 400) {
      broken.push(resp.url());
    }
  });
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');
  expect(broken).toEqual([]);
});

test('theme toggle switches theme', async ({ page }) => {
  await page.goto('/');
  const html = page.locator('html');
  const initial = await html.getAttribute('data-theme');
  const toggle = page.locator('.theme-toggle').first();
  await toggle.click();
  await page.waitForTimeout(300);
  const after = await html.getAttribute('data-theme');
  expect(after).not.toBe(initial);
});

test('Google Tag Manager scripts present', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');
  const html = await page.content();
  expect(html).toContain('GTM-5GNN3F43');
  expect(html).toContain('googletagmanager.com');
});

test('contact form elements visible', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#hero .hero-form-wrapper')).toBeVisible({ timeout: 10000 });
  await expect(page.locator('#hero form')).toBeAttached();
});

test('pricing section has plan cards', async ({ page }) => {
  await page.goto('/');
  await page.locator('#pricing').scrollIntoViewIfNeeded();
  await expect(page.locator('#pricing .pricing-card').first()).toBeVisible({ timeout: 10000 });
  const cards = await page.locator('#pricing .pricing-card').count();
  expect(cards).toBeGreaterThanOrEqual(3);
});

test('responsive - mobile menu hamburger', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  await expect(page.locator('.hamburger-btn')).toBeVisible();
  await page.locator('.hamburger-btn').click({ force: true });
  await page.waitForTimeout(500);
  await expect(page.locator('.mobile-menu-open')).toBeVisible();
});

test('footer is present', async ({ page }) => {
  await page.goto('/');
  const footer = page.locator('footer');
  await expect(footer).toBeVisible();
});
