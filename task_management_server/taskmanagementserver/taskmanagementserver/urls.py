from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/tasks/', include('tasks.urls')),
    path('api/users/', include('users.urls'))
]

# http:127.0.0.1:8000/api/users/createUser/ 