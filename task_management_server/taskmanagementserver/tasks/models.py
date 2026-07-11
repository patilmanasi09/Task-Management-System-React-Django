from django.db import models

# Create your models here.
from django.db import models
class Task(models.Model):
    status_choices = [
        ("pending", "Pending"),
        ("in-progress", "In Progress"),
        ("completed", "Completed"),
    ]

    title = models.CharField(max_length=150)
    description = models.TextField()
    startDate = models.DateField()
    endDate = models.DateField()
    status = models.CharField(
        max_length=50,
        choices=status_choices,
        default="pending",
    )

    def __str__(self):
        return self.title


# name, email ,contactNumber, task_id