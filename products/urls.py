from django.urls import path
from .views import *

urlpatterns = [
    path('add/', add_product, name='add-product'),
    path('status/paid/', paid_products, name='paid-products'),
    path('status/unpaid/', unpaid_products, name='unpaid-products'),
    path('status/change/<str:id>/', change_payment_status, name='change-payment-status'),
    path('request/', make_request, name='request-product'),
    path('view-requests/', view_requests, name='view-requests'),
    path('view-requests/approved', approved_requests, name='approved-requests'),
    path('view-requests/declined', declined_requests, name='declined-requests'),
    path('request/approve/<str:id>/', approve_request, name='approve-request'),
    path('request/decline/<str:id>/', decline_request, name='decline-request'),
]
