import math

# Our own function and variable with the same names as in the math module
def sin(x):
    if 2 * x == pi:
        return 0.99999999
    else:
        return None

pi = 3.14

print("My local sin:", sin(pi/2))
print("Official Math sin:", math.sin(math.pi/2))