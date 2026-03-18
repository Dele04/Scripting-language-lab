#Your task is to write a tax calculator
#It should accept one floating-point value: the income.
#Next, it should print the calculated tax, rounded to full thalers. There's a function named round() which will do the rounding

n = float(input("Enter an income: "))
if n < 85528:
    tax = 0.18 * n - 556.02
else:
    tax = 14839.02 + 0.32 * (n - 85528)
if tax < 0:
	tax = 0.0 #tax is 0
tax = round(tax, 0)
print("The tax is:", tax , "thalers")
