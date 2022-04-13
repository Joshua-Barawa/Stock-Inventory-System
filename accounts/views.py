from django.http import HttpResponse


def register_user(request):
    return HttpResponse("This is the register page!!!")