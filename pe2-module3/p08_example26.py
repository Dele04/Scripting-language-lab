class AgeRestrictionError(Exception):
    """Raised when a user does not meet the minimum age requirement."""
    pass

def purchase_ticket(user_age):
    minimum_age = 18
    if user_age < minimum_age:
        raise AgeRestrictionError(f"Access denied. Must be at least {minimum_age} years old.")
    print("Ticket purchased successfully!")

# Usage
try:
    purchase_ticket(16)
except AgeRestrictionError as e:
    print(e)
