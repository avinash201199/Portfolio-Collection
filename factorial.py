print("Enter the Number: ")
num = int(input())

fact = 1
i = 1
while i<=num:
    fact = fact*i
    i = i+1

print("\nFactorial of ",num,"is =", fact)
