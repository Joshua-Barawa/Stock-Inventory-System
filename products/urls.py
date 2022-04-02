from django.urls import path
from .views import *

urlpatterns = [
    path('add/', add_product, name='add-product'),
    path('request/', make_request, name='request-product'),
    path('request/approve/<str:id>', approve_request, name='approve-request'),
    path('request/decline/<str:id>', decline_request, name='decline-request'),
]
