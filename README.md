# Chrome Extension: URL Saver

## Overview

URL Saver is a Chrome extension that allows users to save the URL of the current webpage with a single click and view all the saved URLs in one place. This extension is built using Manifest V3, Node.js, Next.js, and Firebase for the backend.

## Features

1. **Save Current Page URL:** Users can save the URL of the page they are currently on with a single click.
2. **View Saved URLs:** Users can view all the URLs they have saved on a dedicated page.

## Technologies Used

- **Frontend:**
  - HTML, CSS, JavaScript
  - Manifest V3 (for Chrome extension development)
  - Next.js (deployed on Vercel)
- **Backend:**
  - Firebase Database
  -Node.js
## Installation

To install the Chrome extension, follow these steps:

1. Clone this repository to your local machine.
2. Open Google Chrome.
3. Go to `chrome://extensions/`.
4. Enable Developer mode (toggle on the top right).
5. Click on "Load unpacked" and select the cloned directory.

## Usage

Once installed, use the extension as follows:

1. Click on the extension icon in the Chrome toolbar.
2. To save the URL of the current page, click on the "Save URL" button.
3. To view all saved URLs, click on the "View Saved URLs" option in the The Next.js app .

NOTE:
In popup.js url data is posted to save to firebase database , we cant directly integrate firebase api to chrome extension ,
we have to make separate node.js app for api and deployed at render
You can access it's code  [here](https://github.com/thisIsOwais/chromeExtension-firebase-api/tree/master).

## Deployed App

The Next.js app for viewing saved URLs is deployed on Vercel. You can access it [here](https://next-js-url-from-extension-hxamk44wg-mohd-owaiss-projects.vercel.app/).

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/new-feature`).
6. Create a new Pull Request.

## live demo here
-[video link](https://www.loom.com/share/f1fc31dfb6dd490692a1847fbd88e534?sid=99f306b2-3f56-48de-8094-767cc534328a)

## Authors

- [MOHD OWAIS ANSARI](https://github.com/thisIsOwais)

## Acknowledgments

Special thanks to [Organization/Person Name] for their contributions and support.
