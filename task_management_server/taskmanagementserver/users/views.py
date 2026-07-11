from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import User
from .serializers import UserSerializers

@api_view(["POST"])
def create_user(request):
    serializers = UserSerializers(data = request.data)

    if serializers.is_valid():
        serializers.save()

        return Response({
            "success":True,
            "Message":"User added successfully",
            "user": serializers.data
        }, status = status.HTTP_201_CREATED)

    return Response({
        "success":False,
        "Message":"User not added",
        "errors": serializers.errors,
    }, status = status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
def get_all_users(request):
    users = User.objects.all()
    serializers = UserSerializers(users, many=True)

    return Response({
        "success":True,
        "users":serializers.data
    })

@api_view(["GET"])
def get_user_by_id(request, id):
    try:
        user = User.objects.get(id=id)
        serializers = UserSerializers(user)

        return Response({
            "success":True,
            "user":serializers.data
        })

    except User.DoesNotExist:
        return Response({
            "success":False,
            "message":"User not found"
        }, status=status.HTTP_404_NOT_FOUND)


@api_view(["PUT"])
def update_user(request, id):
    try:
        user = User.objects.get(id=id)

    except User.DoesNotExist:
        return Response({
            "success":False,
            "message":"User not found"
        }, status=status.HTTP_404_NOT_FOUND)

    serializers = UserSerializers(user, data=request.data)

    if serializers.is_valid():
        serializers.save()
        return Response({
            "success":True,
            "message":"User updated successfully",
            "user":serializers.data
        })
    return Response({
        "success":False,
        "error":serializers.error
    }, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def delete_user(request,id):
    try:
        user = User.objects.get(id=id)
        user.delete()
        return Response({
            "success":True,
            "message":"User deleted Successfully"
        })

    except User.DoesNotExist:
        return Response({
            "success":False,
            "message":"User not found"
        }, status=status.HTTP_404_NOT_FOUND)