# main_packages.py
from sys import path

# Step 1: Tell Python where to find the 'packages' directory
# We append the path so Python can find the 'extra' package
# path.append('./packages')

# Step 2: Import using the fully qualified names
import extra.iota
import extra.good.alpha as alpha
from extra.good.best.sigma import FunS

# Step 3: Accessing the functions
print("Accessing top-level module:", extra.iota.FunI())  # Returns "Iota"
print("Accessing sub-package module:", alpha.FunA())     # Returns "Alpha"
print("Accessing deep sub-package:", FunS())             # Returns "Sigma"

# Step 4: Demonstrating the __init__.py requirement
# If you delete an __init__.py file, the import below will fail!
import extra.good.best.tau as tau
print("Deepest module function:", tau.FunT())            # Returns "Tau"