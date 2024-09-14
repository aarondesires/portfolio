# caesar cipher

inp = input("Enter a message to encrypt: ")
key = int(input("Input a key: "))

lst = []

for i in range(len(inp)):
  lst.append(ord(inp[i]))

for j in range(len(lst)):
  if lst[j]+key > 122:
    lst[j] = (lst[j] + (key%26)) - 26
  elif lst[j]+key < 97:
    lst[j] = (lst[j] - (abs(key)%26)) + 26
  else:
    lst[j] = lst[j] + key
  lst[j] = chr(lst[j])
  
for k in range(len(lst)):
  print(lst[k], end="")
