class Animal:
    def __init__(self, name):
        self.name = name

    def make_sound(self):
        return "Some generic animal sound"

    def __str__(self):
        return f"Animal Name: {self.name}"


class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)
        self.breed = breed

    def make_sound(self):
        return "Woof!"

    def __str__(self):
        return f"{self.name} is a {self.breed}"


class ServiceDog(Dog):
    def __init__(self, name, breed, task):
        super().__init__(name, breed)
        self.task = task

    def get_info(self):
        # Uses super() to get the string from Dog and adds the task
        return f"{super().__str__()} and is trained for: {self.task}"

pet1 = Dog("Buddy", "Bull dog")
pet2 = Dog("Buddy", "German Shepherd")
helper = ServiceDog("Max", "Labrador", "Guiding")


print(pet1)
print(pet1.make_sound())
print(helper.get_info())

print(isinstance(helper, Animal))
print(pet1 is pet2)
