/*Objectif : tester la page d'accueil de la documentation officielle de Playwright. Vérifier que le titre Playwright s'affiche bien, vérifier que le lien Get Started fonctionne, et vérifier si à l'intérieur on trouve "Introduction" et le texte adéquat. */
import { test, expect } from '@playwright/test'

test('Mon premier test', async ({page}) => {
    await page.goto('https://playwright.dev/')
    await expect(page).toHaveTitle(/Playwright/)
})