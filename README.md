# Acceptance Testing Ionic Apps

I am exploring the options available for automatic acceptance testing of mobile apps. At Centbee we use Ionic for our app development so I thought I would start here.

I used Appium and webdriver.io as the testing framework. It is important to take the time to understand [Appium](http://appium.io/) (and [Selenium](https://selenium.dev/)) before you start. Appium is a tool that allows you to "drive" a mobile app through scripts. This allows you to simulate a human tester and create automated acceptance tests. Selenium is the predecessor of Appium and does the same job for web apps. 

Appium has a client/server architecture. The Appium server listens for requests from the client (ie your test script). For example, the client might send a request to click a button on your app or get the text value of a label on your app. The Appium server uses a driver to communicate with the mobile device (iOS or Android) and perform the action. 

![Appium has a client/server architecture](https://docs.google.com/drawings/d/e/2PACX-1vRjDI27d9zUUxCdILeGzhFw9a2I9-CDxfRS_OyC4KSIHvIfH7hgsLNr-b35TZCJ45QnJfLK7xpdFZyl/pub?w=826&h=331)

This decoupled design means that you can write your Appium tests in [the language of your choice](http://appium.io/docs/en/about-appium/appium-clients/index.html) and Appium can test [multiple platforms](http://appium.io/docs/en/about-appium/getting-started/?lang=en#driver-specific-setup). It also means Appium is a little tricky to get started with. Firstly, you need to understand the client/server nature of it. Then you have to install the correct client library for your test scripts and driver for your platform ([Appium-doctor](https://www.npmjs.com/package/appium-doctor) is a useful tool to help you check your setup). Lastly you have to connect your test script to the server using the correct hostname and port.

Another important benefit of the client/server design of Appium is that you can use a hosted Appium service, for example, AWS Device Farm. In this case, your tests scripts will connect to the hostname and port of the hosted Appium server. Hosted Appium servers have the benefit of being able to run your tests in parallel (on a "Test Grid") across multiple devices. This speeds things up. Appium tests are much slower to run than unit tests.

# How to run me

First clone the project.

```bash
git clone git@github.com:davidjohnmaccallum/Acceptance-Testing-Ionic-Apps.git
cd Acceptance-Testing-Ionic-Apps
```

Then build the address book ionic app.

```bash
cd address_book
npm install
ionic cordova build android
```

Now lets get the tests working. I have my Android phone connected to my laptop with a USB cable and developer mode enabled. If I run `adb list` I can see my phone in the list.

```bash
cd ../acceptance_test
npm install
npx appium-doctor  # All required dependencies must exist
npx appium # This will start a server so run it in its own terminal window.
npm test
```

If that works first time for you you are very lucky! It should open the app, select a contact from the contact list and then close.

It is more likely that you will hit several snags with your setup before the test works. I have included my full terminal output in terminal_output.txt and appium_server_output.txt to help you debug.
