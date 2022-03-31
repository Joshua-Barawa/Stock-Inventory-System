from django.urls import path
from .views import *

urlpatterns = [
    path('register/', register_user, name='register-user'),
    path('login/', login_user, name='login-user'),
    path('logout/', logout_user, name='logout-user'),
    path('email-verify/<str:token_id>/', verify_email, name='email-verify'),
]
