__counter = 0

def suml(the_list):
    global __counter
    __counter += 1
    return sum(the_list)

# This block runs ONLY if the file is executed directly
if __name__ == "__main__":
    print("Self-test: sum of [1, 2, 3] is 6?", suml([1, 2, 3]) == 6)