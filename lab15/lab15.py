""""
Muyinjon Turobov
Tuesday June 25

"""

#defining a function
def addition(x,y):
    return x+y

#calling the function
result = addition(2,5)
print(result)
print(addition(2,5))

def arearectangle(length,width):
    area = length*width
    return area

#calling the function arearectangle
print(f"The area of rectangle is {arearectangle(3,5)}")

#define a function to check if a number is positive, negative, or zero
n = int(input("Enter a vaule: "))
def check(x):
    try:
        if x<0:
            print(f"the vaule {x} is negative")
        elif x>0:
            print(f"the vaule {x} is postive")
        elif x==0:
            print(f"the vaule {x} is zero")
        else:
            print(f"the vaule {x} is undefined. ")
    except:
        print("Error")

check(n)


name = "peter"
print(f"The number is {check(name)}")

#define a function that check if a number is even numbeer%2 ==0

def iseven(num):
    check1 = num % 2
    try:
        if check1 == 0:
            print("\nEven")
        else:
            print("\nODD")
    except:
        print("Error")
iseven(int(input("Check the Number=   ")))



print("\n====================== CLASS ======================")

class MyClass:
    i=12345
    
    def testing(self):
        return "Hello World"

#Calling my Class

#Step 1 - create the instance of the class
newclas =  MyClass()

#step 2- calling the instance property
isinstanceproperty=newclas.i

# Step 3- Call the instance method
instancemethod = newclas.testing()

#print results

print(f"Instance class property {isinstanceproperty}")
print(f"Instance class method {instancemethod}")

class car:
    def __init__(self,make,model,year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0
    def get_descriptive_name(self):
        return f"{self.year} {self.make} {self.model}"
    
newcar = car("jeep","wrangler",2021)

car_description = newcar.get_descriptive_name()
print(car_description)