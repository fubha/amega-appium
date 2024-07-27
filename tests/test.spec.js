import { remote } from 'webdriverio';
import { expect } from 'expect-webdriverio';
import { config } from '../config/wdio.conf.js';
import { locators } from '../screenObjects/locators.js';
import { data } from '../fixtures/data.js';

async function login() {
    const signInLink = await driver.$(locators.signInLink);
    await signInLink.click();

    const signInHeading = await driver.$(locators.signInHeading);
    await expect(signInHeading).toHaveText(data.signInHeading);

    const signInSubheading = await driver.$(locators.signInSubheading);
    await expect(signInSubheading).toHaveText(data.signInSubheading);

    const email = await driver.$(locators.email);
    await email.setValue(data.email);

    const password = await driver.$(locators.password);
    await password.setValue(data.password);

    const signInButton = await driver.$(locators.signInButton);
    await signInButton.click();
    driver.acceptAlert();
}

async function openPosition() {
    const investmentIdeas = await driver.$(locators.investmentIdeas);
    await expect(investmentIdeas).toBeDisplayed;

    const tradingSignals = await driver.$(locators.tradingSignals);
    await expect(tradingSignals).toBeDisplayed;

    const portfolio = await driver.$(locators.portfolio);
    await portfolio.click();

    const overview = await driver.$(locators.overview);
    await overview.click();
}

async function logout() {
    const userIcon = await driver.$(locators.userIcon);
    await userIcon.click();

    const logout = await driver.$(locators.logout);
    await logout.click();
}

async function runTests() {
    try {
        await login();
        await openPosition();
        await logout();
    } finally {
        await driver.pause(3000);
        await driver.deleteSession();
    }
}

const driver = await remote(config);
runTests().catch(console.error);