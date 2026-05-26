class Activity:
    """A base class representing a physical activity."""
    def log_workout(self) -> str:
        return "Fitness Tracker"

class Running(Activity):
    """Calculates calories burned based on duration and speed."""
    def __init__(self, duration_mins: int, speed_mph: float):
        self.duration = duration_mins
        self.speed = speed_mph

    def log_workout(self) -> str:
        # Rough estimate formula: duration * speed * factor
        calories = int(self.duration * self.speed * 1.2)
        return super().log_workout() + f"Ran for {self.duration} mins. Burned roughly {calories} calories."

class Weightlifting(Activity):
    """Calculates calories burned based on sets and average weight."""
    def __init__(self, sets: int, avg_weight_lbs: int):
        self.sets = sets
        self.weight = avg_weight_lbs

    def log_workout(self) -> str:
        #formula based on volume
        calories = int(self.sets * (self.weight / 10))
        return super().log_workout() + f"Completed {self.sets} strength sets. Burned roughly {calories} calories."

morning_run = Running(duration_mins=30, speed_mph=6.5)
evening_lift = Weightlifting(sets=12, avg_weight_lbs=150)

print(morning_run.log_workout())
print(evening_lift.log_workout())
print("\n" + "="*50 + "\n")

