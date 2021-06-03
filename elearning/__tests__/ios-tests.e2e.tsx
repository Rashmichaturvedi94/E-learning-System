import wd from 'wd';
import path from 'path';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const config = {
  platformName: 'iOS',
  platformVersion: '14.5',
  deviceName: 'iPhone 12',
  app: path.join(process.cwd(), 'ios/build/Build/Products/Debug-iphonesimulator/elearning.app')
};
const driver = wd.promiseChainRemote('localhost', PORT);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(5000);
}) // Sometime for the app to load

afterAll(async function() {
  await driver.quit();
});

test('login screen displayed', async () => {
  await driver.sleep(3000);
  
  expect(await driver.hasElementByAccessibilityId('login')).toBe(true);
});

test('logged in test', async () => {
  await driver.sleep(3000);
  const email = 'test7@gmail.com';
  const password = '123456';
  expect(await driver.hasElementByAccessibilityId('email')).toBe(true);
  await driver.elementByAccessibilityId('email')
    .type(email);

  expect(await driver.hasElementByAccessibilityId('password')).toBe(true);
  await driver.elementByAccessibilityId('password')
    .type(password);
  
  expect(await driver.hasElementByAccessibilityId('loginButton')).toBe(true);
  await driver.elementByAccessibilityId('loginButton')
    .click()
  await driver.sleep(1000);
  expect(await driver.hasElementByAccessibilityId('featured')).toBe(true);
});
