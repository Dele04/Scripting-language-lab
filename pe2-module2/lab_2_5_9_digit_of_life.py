date = input("Enter your birthday date: ")

while len(date) > 1:
    the_sum= 0
    for digit in date:
        if digit.isdigit():
            the_sum += int(digit)
    date = str(the_sum)

print("Your Digit of Life is: "+ date)
