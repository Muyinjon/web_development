##Muyinjon Turobov
##Monday June 2024
##Intro to Python
import math
import random

print("Welcome to lab 14")

num1=420
num2= -69
sum=num1+num2
print(sum)

fullname="Muyinjon Turobov"
print(fullname)
checkmode = True
print(checkmode)
print(f"Welcome to Python {fullname}. and the sum of {num1} and {num2} is {sum}")



print("Example 1------------------------ calculating the hypotenuse")
height = int(input("Enter your height: "))
width = float(input("Enter your weight: "))
hyp=(height**2+width**2)**0.5
hyp = round(hyp, 3)

print(f"the collected the height is {height} and the weight is {width} and the hypotenuse is {hyp}")

print("Example 2------------------------ Checking the string")
msg = "Hello World"
msglength = len(msg)
check1= "m" in msg
check2= "o" in msg

print(f"the message has {msglength} characters")
print(f"the letter 'm' is in the message: {check1}")  
print(f"the letter 'o' is in the message: {check2}")


print("Example 3------------------------ Control Flow")

age = 19
if age >= 21:
    print("You can Adult")
else:
    print("You can't underage")

print("Example 4------------------------ Control Flow gpa calculator")

grade1 = float(input("What is your grade1: "))
grade2 = float(input("What is your grade2: "))

gpa = (grade1+grade2)/2

if gpa >= 90 and gpa <= 101:
    print(f"Your GPA is {gpa} which is an A")
elif gpa >= 80 and gpa < 90:
    print(f"Your GPA is {gpa} which is a B")
elif gpa >= 70 and gpa < 80:
    print(f"Your GPA is {gpa} which is a C")
elif gpa >= 60 and gpa < 70:
    print(f"Your GPA is {gpa} which is a D")
elif gpa >101:
    print(f"You Cheated and Your GPA is {gpa} which is an F")
else:
    print(f"Your GPA is {gpa} which is an F")


print("Example 5------------------------ Loops")

for x in range(0,5):
    print(x)

print("Example 6------------------------ Loops from -3 to 3")

for x in range(-3,4):   
    print(x)

print("Example 7------------------------ Loops from 9 to 0")

for x in range(9,0,-2):
    print(x)

print("Example 8------------------------ for loop a list")
animals = ["cat", "dog", "fish", "bird", "lizard"]
for x in animals:
    print(x)


print("Example 9------------------------ while loop")
n = 0
while n < 5:
    print(n)
    if n == 3:
        break
    n += 1
else:
    print("End of the program")