#Imagine that your computer program loves these plants. Whenever it receives an input in the form of the word Spathiphyllum, it involuntarily shouts to the console the following string: "Spathiphyllum is the best plant ever!"
n = (input("Enter a name: "))
if n == "Spathiphyllum":
    print("Yes - Spathiphyllum is the best")
elif n == "spathiphyllum":
    print("No, I want a big Spathiphyllum!")
else:
    print("Spathiphyllum! Not ", n + "! ")

