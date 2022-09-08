# This file will include a class with instance mthods.
# that will be responsible to interact with our website
# After we have some results, to apply filtrations

from selenium.webdriver.remote.webdriver import WebDriver
from selenium.webdriver.common.by import By

class BookingFiltration:
    def __init__(self, driver:WebDriver) -> None:
        self.driver = driver

    def apply_star_rating(self, *star_value):
        star_filtration_box = self.driver.find_element(
            By.CSS_SELECTOR, 
            'div[data-filters-group="class"]')
        star_filtration_container = star_filtration_box.find_element(
            By.CSS_SELECTOR, 
            f'div[data-filters-item="class:class={star_value}"]'
            )
        star_filtration_element = star_filtration_container.find_element(By.TAG_NAME, 'label')
        star_filtration_element.click()