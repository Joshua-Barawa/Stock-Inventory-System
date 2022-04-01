from django.urls import path
from .views import *

urlpatterns = [
    path('register/', register_user, name='register-user'),
    path('register-clerk/', register_clerk, name='register-clerk'),
    path('login/', login_user, name='login-user'),
    path('logout/', logout_user, name='logout-user'),
    path('email-verify/<str:token_id>/', verify_email, name='email-verify'),

    path('view-clerks/', view_clerks, name='view-clerks'),
]
