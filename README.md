# E2E-Playwright-POM

# WARNING:
    -   view cart button

    while adding a product to cart it is little strange to desing locator to click on add cart

    due to hover issue sometimes it works sometimes it not

    -   open url

        other minor issue is while goto url

        it takes time to go to url due to network delay
         
## installation

1 - for playwright it is required to install the node js so, first install that

-   Go to https://nodejs.org and download the LTS version.

-   after download install the node js

2 - now you need node modules

    -   execute the following commands

    npm install

3 - install playwright

    -   execute the following commands
    
    npx playwright install


## run tests

-   to run tests use the following command for headless mode

    npx playwright test 

## report 

-   run below command to open the report in browser

     npx playwright show-report
