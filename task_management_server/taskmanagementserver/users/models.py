from django.db import models
from tasks.models import Task

class User(models.Model):
    name = models.CharField(max_length = 100)
    email = models.CharField(max_length = 150)
    contactNumber = models.CharField(max_length = 100)
    task_id = models.ForeignKey(Task, on_delete= models.CASCADE , related_name = 'users')

def __str__(self):
    return self.name