from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Task
from .serializers import TaskSerializers


@api_view(['POST'])
def create_task(request):
    serializers = TaskSerializers(data = request.data)

    if serializers.is_valid():
        serializers.save()
        return Response({
        "success":True,
        "message":"Task added Successfully",
        "task":serializers.data
        }, status=status.HTTP_201_CREATED)

    return Response({
        "success":False,
        "error":serializers.errors

    }, status = status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_all_tasks(request):
    tasks = Task.objects.all()
    serializers = TaskSerializers(tasks, many=True)

    return Response({
        "success":True,
        "tasks":serializers.data
    })

@api_view(['GET'])
def get_task_by_id(request, id):
    try:
        task = Task.objects.get(id=id)
        serializers = TaskSerializers(task)

        return Response({
            "success":True,
            "task":serializers.data
        })
    except Task.DoesNotExist:
        return Response({
            "success":False,
            "message":"Task not found"
        }, status=status.HTTP_404_NOT_FOUND)


@api_view(['PUT'])
def update_task(request, id):
    try:
        task = Task.objects.get(id=id)

    except Task.DoesNotExist:
        return Response({
            "success":False,
            "message":"Task not found"
        }, status=status.HTTP_404_NOT_FOUND)

    serializers = TaskSerializers(task, data=request.data)

    if serializers.is_valid():
        serializers.save()
        return Response({
            "success":True,
            "message":"Task updated successfully",
            "task":serializers.data
        })
    return Response({
        "success":False,
        "errors":serializers.error
    }, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_task(request, id):
    try:
        task = Task.objects.get(id=id)
        task.delete()
        return Response({
            "success":True,
            "message":"Task deleted Successfully"
        })

    except Task.DoesNotExist:
        return Response({
            "success":False,
            "message":"Task not found"
        }, status=status.HTTP_404_NOT_FOUND)