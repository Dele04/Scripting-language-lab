def checkset(digs):
    # Filters out any characters(valid) that aren't digits and also  checks for 1-9 uniqueness
    digits = [char for char in digs if char.isdigit() and char != '0']
    return len(set(digits)) == 9 and len(digits) == 9

rows = []
for r in range(9):
    ok = False
    while not ok:
        row = input("Enter row #" + str(r + 1) + ": ")
        ok = len(row) == 9 or row.isdigit()
        if not ok:
            print("Incorrect row data - 9 digits required")
    rows.append(row)

ok = True

for r in range(9):
    if not checkset(rows[r]):
        ok = False
        break

if ok:
    for c in range(9):
        col = []
        for r in range(9):
            col.append(rows[r][c])
        if not checkset(col):
            ok = False
            break

if ok:
    for r in range(0, 9, 3):
        for c in range(0, 9, 3):
            sqr = ''
            for i in range(3):
                sqr += rows[r + i][c:c + 3]
            if not checkset(list(sqr)):
                ok = False
                break
if ok:
    print("Yes")
else:
    print("No")
