from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .serializers import *
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authtoken.models import Token
from django.contrib.auth import logout, login
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.authtoken.serializers import AuthTokenSerializer
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from .utils import Util


@api_view(['POST'])
@permission_classes([AllowAny, ])
def register_user(request):
    if request.method == 'POST':
        acc_serializer = AccountSerializer(data=request.data)
        if acc_serializer.is_valid(raise_exception=True):
            user = acc_serializer.save()
            token, created = Token.objects.get_or_create(user=user)

            current_site = get_current_site(request).domain
            relativeLink = reverse('email-verify', args=[token.key])

            absL = 'http://' + current_site + relativeLink
            email_body = 'Hi ' + user.username + " please click the link below to verif you email \n" + absL
            data = {"email_body": email_body, "subject": "Verify Account Email", "to_email": user.email}
            Util.send_email(data)
            data['res'] = "Account created successfully.....A link has been sent to your email \n " \
                          "Use it to verify your account"
            data['token'] = token.key
        else:
            data = acc_serializer.errors
    return Response(data)


@api_view(['POST'])
@permission_classes([IsAuthenticated, ])
def register_clerk(request):
    name = request.user.full_name
    if request.method == 'POST':
        acc_serializer = AccountSerializer(data=request.data)
        data = {}
        if acc_serializer.is_valid(raise_exception=True):
            user = acc_serializer.save()
            user.is_active = True
            user.admin_name = name
            user.save()
            data['res'] = "Clerk added successfully"
        else:
            data = acc_serializer.errors
    return Response(data)


@api_view(['GET'])
@permission_classes([AllowAny, ])
def verify_email(request, token_id):
    data = {}
    try:
        user = Account.objects.get(auth_token=token_id)
        user.is_active = True
        user.is_admin = True
        user.is_staff = True
        user.save()

        data['success'] = 'Email verified successfully'
    except ObjectDoesNotExist:
        data['error'] = 'Invalid token'

    return Response(data)


@api_view(["POST"])
@permission_classes([AllowAny])
def login_user(request):
    serializer = AuthTokenSerializer(data=request.data)
    data = {}
    if serializer.is_valid(raise_exception=True):
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        data['username'] = user.username
        data['email'] = user.email
        data['token'] = token.key

    else:
        data['errors'] = "Invalid email or password"
    return Response(data)


@api_view(['GET'])
@permission_classes([IsAuthenticated, ])
def logout_user(request):
    request.user.auth_token.delete()
    logout(request)
    data = "logged out successfully"
    return Response(data)


@api_view(['GET'])
@permission_classes([IsAuthenticated, ])
def view_admins(request):
    admins = Account.objects.all()
    serializer = AccountSerializer(admins, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated, ])
def view_clerks(request):
    name = request.user.full_name
    clerks = Account.objects.filter(admin_name=name)
    serializer = AccountSerializer(clerks, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated, ])
def inactivate_clerk(request, id):
    data = {}
    user = request.user
    try:
        if user.is_admin:
            account = Account.objects.get(email=id)
            account.is_active = False
            account.save()
            data['status'] = 'Clerk was deactivated!'
        else:
            data['authorization'] = 'You have to be an admin to perform this request!'

    except ObjectDoesNotExist:
        data['error'] = 'Clerk does not exist!'
    return Response(data)


@api_view(['POST'])
@permission_classes([IsAuthenticated, ])
def activate_clerk(request, id):
    data = {}
    user = request.user
    try:
        if user.is_admin:
            account = Account.objects.get(email=id)
            if not account.is_active:
                account.is_active = True
                account.save()
                data['status'] = 'Clerk was activated!'
            else:
                data['status'] = 'Clerk is already active!'

        else:
            data['authorization'] = 'You have to be an admin to perform this request!'

    except ObjectDoesNotExist:
        data['error'] = 'Clerk does not exist!'
    return Response(data)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated, ])
def delete_clerk(request, id):
    data = {}
    user = request.user
    try:
        if user.is_admin:
            Account.objects.get(email=id).delete()
            data['status'] = 'Clerk was deleted!'
        else:
            data['authorization'] = 'You have to be an admin to perform this request!'
    except ObjectDoesNotExist:
        data['error'] = 'Clerk does not exist!'
    return Response(data)


@api_view(['POST'])
@permission_classes([IsAuthenticated, ])
def inactivate_admin(request, id):
    data = {}
    user = request.user
    try:
        if user.is_superuser:
            account = Account.objects.get(email=id)
            account.is_active = False
            account.save()
            data['status'] = 'Admin was deactivated!'
        else:
            data['authorization'] = 'You have to be a merchant to perform this request!'

    except ObjectDoesNotExist:
        data['error'] = 'Admin does not exist!'
    return Response(data)


@api_view(['POST'])
@permission_classes([IsAuthenticated, ])
def activate_admin(request, id):
    data = {}
    user = request.user
    try:
        if user.is_superuser:
            account = Account.objects.get(email=id)
            if not account.is_active:
                account.is_active = True
                account.save()
                data['status'] = 'Admin was activated!'
            else:
                data['status'] = 'Admin is already active!'

        else:
            data['authorization'] = 'You have to be a merchant to perform this request!'

    except ObjectDoesNotExist:
        data['error'] = 'Admin does not exist!'
    return Response(data)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated, ])
def delete_admin(request, id):
    data = {}
    user = request.user
    try:
        if user.is_superuser:
            Account.objects.get(email=id).delete()
            data['status'] = 'Admin was deleted!'
        else:
            data['authorization'] = 'You have to be a merchant to perform this request!'
    except ObjectDoesNotExist:
        data['error'] = 'Admin does not exist!'
    return Response(data)