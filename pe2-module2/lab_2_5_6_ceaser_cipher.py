text = input("Enter message to be encrypted: ")
while True:
    shift_input = input("Enter shift: ")
    if shift_input.isdigit():
        shift = int(shift_input)
    #check correct range
    if 1 <= shift <= 25:
     break
    print("Incorrect shift entered")
cipher = ""
for char in text:
    # Is it a letter?
    if char.isalpha():
        # Shift its code.
        code = ord(char) + shift
        # Find the code of the first letter (upper- or lower-case)
        if char.isupper():
            first = ord('A')
        else:
            first = ord('a')
        # Make correction.
        code -= first
        code %= 26
        # convert bact to character
        cipher += chr(first + code)
    else:
        # if not a letter leave it untouched
        cipher += char

print(cipher)






