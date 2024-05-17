<h1 dir="auto"><a class="anchor" aria-hidden="true" href="https://playwright.dev/"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd"></path></svg></a><g-emoji class="g-emoji" alias="performing_arts" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3ad.png">🎭</g-emoji> Playwright</h1>

# Test project on Playwright

### General requirements

- Install a git client such as [git bash](https://git-scm.com/downloads)

Download and install

- Latest version of [Node.js](https://nodejs.org/es/download/)
- Lasest version of [Docker](https://www.docker.com/products/docker-desktop/) (Required for using Docker image)

### Installation of the testing framework

#### **Clone the repository:**

    git clone https://github.com/vadymchaika/unicsoft_test_project.git

#### **Install dependencies.**

    npm install

#### **To run the tests go to the root of the project and run (headless mode)**

    npm run test

#### **To run the tests go to the root of the project and run (headed mode)**

    npm run test_headed

#### **To open Playwright's unified Html report of test results**

    npm run play-report

#### **IMPORTANT**

After each upgrade of **Playwright**, the project must be restarted locally with the command:

    npm run reinstall

To download the latest versions of the Browsers.

### Using Docker

#### **To create the Docker image go to the root of the project and run**

    docker build -t <image_name> .

#### **After creating the Docker image run**

    docker run <image_name>
