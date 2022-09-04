import os
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys

## make sure that the path is separated by semi-colons
os.environ['PATH'] += r';C:/SeleniumDrivers;'
# print(os.environ['Path'])
driver = webdriver.Chrome();

## access website
driver.get('https://tonyechen.github.io/')

# implicit wait
# wait for elements to load before throwing exception
# apply to all the elements that we are trying to find in the future
driver.implicitly_wait(3) # not time.sleep()


# access element on a webpage
my_element = driver.find_element('class name', 'main__card__button')
my_element.click()

# Explicit wait, wait for an element to load something
# WebDriverWait(driver, 30).until(
#     ## call the method until True
#     EC.text_to_be_present_in_element(
#         (By.CLASS_NAME, 'navbar__logo__image'), # Element filtration
#         'Complete!' # The expected text
#     )
# )

# Sending Keys
# sum1 = driver.find_element_by_id(' sum1 ')
# sum2 = driver.find_element_by_id(' sum2' )
# sum1.send_keys(Keys.NUMPAD1)
# sum2.send_keys(15)