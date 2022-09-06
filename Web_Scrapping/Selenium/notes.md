## Installing Selenium:
```
pip install selenium
```

## What is a webdriver?
WebDriver is an open source tool for automated testing of webapps across many browsers. It provides capabilities for navigating to web pages, user input, JavaScript execution, and more.

## How to set up webdriver?
Download the driver for the appropriate browser and configure PATH to the location of where the driver.exe file is stored

## Context Manager
---
Context managers allow you to allocate and release resources precisely when you want to. The most widely used example of context managers is the **with** statement. Suppose you have two related operations which you’d like to execute as a pair, with a block of code in between. Context managers allow you to do specifically that. At the very least a context manager has an *\_\_enter\_\_* and *\_\_exit\_\_* method defined.

## Implicit Waiting
Some webpages will take time to load. Implicit Wait directs the Selenium WebDriver to wait for a certain measure of time before throwing an exception. Once this time is set, WebDriver will wait for the element before the exception occurs. Once the command is in place, Implicit Wait stays in place for the entire duration for which the browser is open.
````python
driver.implicitly_wait(3)
````

## Explicit Waiting
Custom waiting time for individual elements. By using the Explicit Wait command, the WebDriver is directed to wait until a certain condition occurs before proceeding with executing the code. Setting Explicit Wait is important in cases where there are certain elements that naturally take more time to load.
````python
# Explicit wait, wait for an element to load something
WebDriverWait(driver, 30).until(
    ## call the method until True
    EC.text_to_be_present_in_element(
        (By.CLASS_NAME, 'navbar__logo__image'), # Element filtration
        'Complete!' # The expected text
    )
)
````

## Find element
---
````python
element = driver.find_element(BY.type, "<name>")
````
BY class can be imported from Selenium and has the following types:
- ID = "id"
- NAME = "name"
- XPATH = "xpath"
- LINK_TEXT = "link text"
- PARTIAL_LINK_TEXT = "partial link text"
- TAG_NAME = "tag name"
- CLASS_NAME = "class name"
- CSS_SELECTOR = "css selector"

### Find by CSS selector
reference: https://www.w3schools.com/cssref/css_selectors.asp

## Sending Keys:
---
This simulates typing into the element:
````python
element.send_keys('hello world!')
````
Can import the KEY class from Selenium to input non letter keys like 'Ctrl', 'BACKSPACE', etc

## Getting value of attributes of an element
````python
element.get_attributes("<attribute_name>")
````


