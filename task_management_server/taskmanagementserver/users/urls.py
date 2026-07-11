from django.urls import path
# from .views import views
from . import views


urlpatterns = [
    path('createUser/', views.create_user, name='create_user'),
     path('get_all_users/', views.get_all_users, name='get_all_users'),
    path('get_user_by_id/<int:id>/', views.get_user_by_id, name='get_user_by_id'),
    path('update_user/<int:id>/', views.update_user, name='update_user'),
    path('delete_user/<int:id>/', views.delete_user, name='delete_user'),

]