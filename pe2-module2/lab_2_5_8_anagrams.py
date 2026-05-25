def anagrams(strx1, strx2):
    #remove spaces and convert to lowercase
    spc1 = strx1.replace(" ", "").lower()
    spc2 = strx2.replace(" ", "").lower()

    #two empty strings are not anagrams
    if not spc1 or not spc2:
        return False

    # when they match
    return sorted(spc1) == sorted(spc2)

str1 = input("Enter the first text: ")
str2 = input("Enter the second text: ")

if anagrams(str1, str2):
    print("Anagrams")
else:
    print("Not anagrams")
