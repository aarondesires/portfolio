import random

answered = False
nums = random.randrange(1, 6)
for i in range(0, 3):
  answ = int(input("Guess the number between 1 and 6: "))
  if answ == nums:
    print("Contragulations. You got the right number.")
    answered = True
    break
  else:
    print("Wrong answer")
    answered = False
    continue

if answered is False:
  print("The right answer was", str(nums))
