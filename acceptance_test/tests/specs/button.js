// tests/spec/button.js
// Note that when tests are run by webdriver.io, `browser` is a global object.

// "describe" is a wrapper used to group related tests. It makes the output from the
// test reporter much easier to read through.
describe('Toggle Button', () => {
	// As the name suggests, this runs before each test. It is a good place to set
	// up common settings.
	beforeEach(() => {
        // Wait up to 5 seconds for commands to work        
        browser.setTimeout({ 'implicit': 5000 });		
	});

	// It is important that we run each test in isolation. The running of a previous test
	// should not affect the next one. Otherwise, it could end up being very difficult to
	// track down what is causing a test to fail.
	afterEach(async () => {
		//await browser.reloadSession();
	});

	it('should navigate from contact list to detail view', async () => {
		// All of wdio's commands are synchronous, which means we can write them simply
        // one after another.
        const listItem = await $('#ion-item-1');
		await listItem.click();
		const nameLabel = await $('#contactName');
		const labelText = await nameLabel.getText();
		expect(labelText).toBe('David MacCallum');
	});

});