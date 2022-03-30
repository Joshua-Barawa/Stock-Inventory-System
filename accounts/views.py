
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .serializers import *
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authtoken.models import Token


@api_view(['POST'])
@permission_classes([AllowAny, ])
def register_user(request):
    if request.method == 'POST':
        acc_serializer = AccountSerializer(data=request.data)
        data = {}
        if acc_serializer.is_valid(raise_exception=True):
            user = acc_serializer.save()
            token, created = Token.objects.get_or_create(user=user)
            data['res'] = "Account created successfully"
            data['token'] = token.key
        else:
            data = acc_serializer.errors
    return Response(data)
