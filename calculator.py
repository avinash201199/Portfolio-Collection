num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

print("Operation: +, -, *, /")
select = input("Select operations: ")


if select == "+":
    print(num1, "+", num2, "=", num1+num2)

elif select == "-":
    print(num1, "-", num2, "=", num1-num2)


elif select == "*":
    print(num1, "*", num2, "=", num1*num2)


elif select == "/":
    print(num1, "/", num2, "=", num1/num2)

else:
    print("Invalid input")
