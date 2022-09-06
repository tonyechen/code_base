from booking.booking import Booking

with Booking(teardown=False) as bot:
    bot.land_first_page()
    bot.change_currency(currency='USD')
    bot.select_place_to_go('Seattle')
    bot.select_dates('2022-09-17', '2022-09-21')
    bot.select_adults(2)
    bot.click_search()