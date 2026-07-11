from django.urls import path
# from .views import views
from . import views

urlpatterns = [
    path('create/', views.create_task, name='create_task'),
    path('get_all_tasks/', views.get_all_tasks, name='get_all_tasks'),
    path('get_task_by_id/<int:id>/' ,views.get_task_by_id, name='get_task_by_id' ),
    path('update_task/<int:id>/', views.update_task, name='update_task'),
    path('delete_task/<int:id>/',views.delete_task, name='delete_task')
]