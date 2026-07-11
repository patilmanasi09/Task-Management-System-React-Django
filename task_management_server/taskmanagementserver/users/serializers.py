from rest_framework import serializers
from .models import User
from tasks.models import Task
from tasks.serializers import TaskSerializers

class UserSerializers(serializers.ModelSerializer):

    taskTitle = serializers.CharField(
        source = 'task_id.title',
        read_only = True
    )

    class Meta:
        model = User
        fields = [
            'id',
            'name',
            'email',
            'contactNumber',
            'task_id',
            'taskTitle'
        ]