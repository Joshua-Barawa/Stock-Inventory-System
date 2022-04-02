from rest_framework.serializers import ModelSerializer
from .models import *


class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = ['name', 'received', 'in_stock', 'status', 'spoiled', 'buying_price', 'selling_price']


class RequestSerializer(ModelSerializer):
    class Meta:
        model = Request
        fields = ['item_name', 's_name', 's_email', 'status', 'quantity']
