from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import ProductSerializer, RequestSerializerPOST, RequestSerializerGET
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
            data['status'] = "Product added successful"
    return Response(data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def paid_products(request):
    data = {}
    try:
        products = Product.objects.filter(status=True)
        s_products = ProductSerializer(products, many=True)
    except ObjectDoesNotExist:
        data['error'] = 'cannot decline request!'
    return Response(s_products.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def unpaid_products(request):
    data = {}
    try:
        products = Product.objects.filter(status=False)
        s_products = ProductSerializer(products, many=True)
    except ObjectDoesNotExist:
        data['error'] = 'cannot decline request!'
    return Response(s_products.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def change_payment_status(request, id):
    data = {}
    user = request.user
    try:
        product = Product.objects.get(name=id)
        if user.is_admin:
            product.status = True
            product.save()
            data['status'] = 'Payment status was changed to paid!'
        else:
            data['authorization'] = 'You have to be an admin to perform this request!'
    except ObjectDoesNotExist:
        data['error'] = 'Request does not exist!'
    return Response(data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def make_request(request):
    data = {}
    user = request.user
    if request.method == 'POST':
        serializer = RequestSerializerPOST(data=request.data)
        if serializer.is_valid():
            product = serializer.save()
            product.clerk = user
            product.save()
            data['status'] = "Product request was sent successful"
    return Response(data)


@api_view(['GET'])
@permission_classes([IsAuthenticated, ])
def view_requests(request):
    requests = Request.objects.all()
    serializer = RequestSerializerGET(requests, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated, ])
def approved_requests(request):
    requests = Request.objects.filter(status=True)
    serializer = RequestSerializerGET(requests, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated, ])
def not_approved_requests(request):
    requests = Request.objects.filter(status=False)
    serializer = RequestSerializerGET(requests, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def approve_request(request, id):
    data = {}
    user = request.user
    try:
        p_request = Request.objects.get(item_name=id)
        if user.is_admin:
            p_request.status = True
            p_request.save()
            data['status'] = 'Product request was approved!'
        else:
            data['authorization'] = 'You have to be an admin to perform this request!'
    except ObjectDoesNotExist:
        data['error'] = 'Request does not exist!'
    return Response(data)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def decline_request(request, id):
    data = {}
    user = request.user
    try:
        if user.is_admin:
            Request.objects.get(item_name=id).delete()
            data['status'] = 'Product request was declined!'
        else:
            data['authorization'] = 'You have to be an admin to perform this request!'
    except ObjectDoesNotExist:
        data['error'] = 'cannot decline request!'
    return Response(data)
