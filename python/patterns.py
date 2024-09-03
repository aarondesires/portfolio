# pattern 1

n = 12
print("#" * n)
subind = (n//2)-1
j = 2
while subind != 0:
    while j <= (n - 2):
        print("#" * subind, end="")
        print(" " * j, end="")
        print("#" * subind)
        subind = subind - 1
        j = j + 2 # increasing space between the characters (#)

######################################
# pattern 2

n = 2

for i in range(0, 4):
    for j in range(0, 2):
        print("#" * n)
    n = n + 2

#####################################
# pattern 3

n = 1

for i in range(0, 6):
    print("#" * n)
    n += 2
