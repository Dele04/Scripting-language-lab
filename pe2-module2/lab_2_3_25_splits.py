def mysplit(strng):
    if not strng or strng.isspace():
        return []

    result = []
    word = ""
    in_word = False

    for char in strng:
        if not char.isspace():
            word += char
            in_word = True
        elif in_word:
            result.append(word)
            word = ""
            in_word = False

    if in_word:
        result.append(word)

    return result

print(mysplit("To be or not to be, that is the question"))
print(mysplit("To be or not to be,that is the question"))
print(mysplit("   "))
print(mysplit(" abc "))
print(mysplit(""))
