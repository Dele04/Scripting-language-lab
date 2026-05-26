class WeekDayError(Exception):
    pass

class Weeker:
    __days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

    def __init__(self, day):
        try:
            self.__current_idx = self.__days.index(day)
        except ValueError:
            raise WeekDayError

    def __str__(self):
        return self.__days[self.__current_idx]

    def add_days(self, n):
        self.__current_idx = (self.__current_idx + n) % 7

    def subtract_days(self, n):
        self.__current_idx = (self.__current_idx - n) % 7

try:
    weekday = Weeker('Mon')
    print(weekday)
    weekday.add_days(15)
    print(weekday)
    weekday.subtract_days(23)
    print(weekday)
    weekday = Weeker('Monday')
except WeekDayError:
    print("Sorry, I can't serve your request.")
