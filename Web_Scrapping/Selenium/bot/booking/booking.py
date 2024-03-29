import os
from time import sleep
import booking.constants as const

from selenium import webdriver
from selenium.webdriver.common.by import By
from booking.booking_filtration import BookingFiltration
from booking.booking_report import BookingReport
class Booking(webdriver.Chrome):
    def __init__(self, driver_path=r';C:/SeleniumDrivers;', teardown=False):
        self.driver_path = driver_path
        self.teardown = teardown
        os.environ['PATH'] += self.driver_path

        # instantiating the webdriver
        super().__init__()

        self.implicitly_wait(15)
        self.maximize_window()
    
    def __exit__(self, exc_type, exc, traceback):
        if self.teardown:
            self.quit()

    def land_first_page(self):
        self.get(const.BASE_URL)

    def change_currency(self, currency=None):
        currency_element = self.find_element(By.CSS_SELECTOR, 'button[data-tooltip-text="Choose your currency"]')
        currency_element.click()

        selected_currency_element = self.find_element(
            By.CSS_SELECTOR, f'a[data-modal-header-async-url-param*="selected_currency={currency}"]')
        selected_currency_element.click();

    def select_place_to_go(self, place_to_go):
        search_field = self.find_element(By.ID, 'ss')
        search_field.clear()
        search_field.send_keys(place_to_go)

        first_result = self.find_element(By.CSS_SELECTOR, 'li[data-i="0"]')
        first_result.click()

    def select_dates(self, check_in_date, check_out_date):
        check_in_element = self.find_element(By.CSS_SELECTOR, f'td[data-date="{check_in_date}"]')
        check_in_element.click()

        check_out_element = self.find_element(By.CSS_SELECTOR, f'td[data-date="{check_out_date}"]')
        check_out_element.click()
    
    def select_adults(self, count=1):
        selection_element = self.find_element(By.ID, 'xp__guests__toggle')
        selection_element.click()

        while True:
            decrease_adult_element = self.find_element(By.CSS_SELECTOR, 'button[aria-label="Decrease number of Adults"]')
            decrease_adult_element.click()
            
            # if the value of adults decrease to 1, we are going to exit out of the loop
            adults_value_element = self.find_element(By.ID, 'group_adults')
            # get the adults count
            adults_count = adults_value_element.get_attribute('value'); 

            if int(adults_count) == 1:
                break

        inc_adults_count_element = self.find_element(
            By.CSS_SELECTOR, 'button[aria-label="Increase number of Adults"]')

        for _ in range (count - 1):
            inc_adults_count_element.click()

    def click_search(self):
        search_button = self.find_element(By.CSS_SELECTOR, 'button[type="submit"] ')
        search_button.click()

    def apply_filtration(self):
        filtration = BookingFiltration(driver=self)
        filtration.apply_star_rating(5, 4, 3)
        # wait for star rating to apply
        sleep(2)
        filtration.sort_price_lowest_first()

    def report_results(self):
        hotel_boxes = self.find_element(By.CSS_SELECTOR, 'div[data-arp-properties-list="1"')
        report = BookingReport(hotel_boxes)
        report.pull_deal_box_attributes()
