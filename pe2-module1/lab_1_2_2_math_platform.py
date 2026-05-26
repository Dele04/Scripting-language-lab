import math
import platform

# Displaying all functions available in the math module
print("Entities available in the math module:")
print(dir(math))

# Calculations and environment checking
print("\nHypotenuse of a triangle (3, 4) is:", math.hypot(3, 4))
print("Operating System:", platform.system())
print("Python Implementation:", platform.python_implementation())
print("Python Version:", platform.python_version())