#### Vigenere Cipher ####

inp = input("Enter a message to encrypt: ") # computer
key = input("Input a key: ") # abcdefgh

def addLetter(a, b):
  a = ord(a) + (ord(b)-96)
  while a > 122:
    a -= 26
  return chr(a)

while len(key)<len(inp):
  key = key * 2

lst = []

for i in range(len(inp)): # converting to ASCII
  lst.append(addLetter(inp[i], key[i]))
  
print(lst)
