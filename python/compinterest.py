# this simple project will calculate compound interest

p = int(input("Enter original amount: "))
n = int(input("How many times a year is the principal compounded? "))
t = int(input("How many years will the principal be compounded for? "))
r = int(input("Enter interest rate: "))

print("The final amount is: ", p*(1+(r/100)/n)**(n*t))
