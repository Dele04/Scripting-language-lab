#guess the no by using while
secret_number = 777
number = int(input("Enter a number: "))
while number != secret_number:
    print("Ha ha! You're stuck in my loop!")
    number = int(input("Enter a number: "))
    if number == secret_number:
        print("Well done, muggle! You are free now.")
