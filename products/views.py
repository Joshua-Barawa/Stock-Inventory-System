from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import ProductSerializer, RequestSerializer
from .models import *
from django.core.exceptions import ObjectDoesNotExist


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_product(request):
    data = {}
    user = request.user
    if request.method == 'POST':
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            product = serializer.save()
            product.clerk = user
            product.save()
            print(product.clerk.admin_name)
            data['status'] = "Product added successful"
    return Response(data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def make_request(request):
    data = {}
    user = request.user
    if request.method == 'POST':
        serializer = RequestSerializer(data=request.data)
        if serializer.is_valid():
            product = serializer.save()
            product.clerk = user
            product.save()
            data['status'] = "Product request was sent successful"
    return Response(data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def approve_request(request, id):
    data = {}
    try:
        p_request = Request.objects.get(id=id)
        if request.method == 'POST':
            p_request.status = True
            p_request.save()
            data['status'] = 'Product request was approved!'
    except ObjectDoesNotExist:
        data['error'] = 'Request does not exist!'
    return Response(data)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def decline_request(request, id):
    data = {}
    try:
        Request.objects.get(id=id).delete()
        data['status'] = 'Product request was declined!'
    except ObjectDoesNotExist:
        data['error'] = 'cannot decline request!'
    return Response(data)
