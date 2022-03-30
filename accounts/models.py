from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


class AccountManager(BaseUserManager):
    def create_superuser(self, email, username, password, **other_fields):
        other_fields.setdefault('is_active', True)
        other_fields.setdefault('is_admin', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_staff', True)
        return self.create_user(email, username, password,  full_name=None, business=None, **other_fields)

    def create_user(self, email, username, password, full_name, business, **other_fields):
        if not email:
            raise ValueError("Please provide email!!")
        account = self.model(username=username, full_name=full_name, email=self.normalize_email(email),
                             business=business, password=password, **other_fields)
        account.set_password(password)
        account.save()
        return account


class Account(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=100)
    full_name = models.CharField(max_length=100, blank=True, null=True)
    email = models.EmailField(max_length=200, unique=True, blank=False, null=False)
    business = models.CharField(max_length=250, blank=True, null=True)
    password = models.CharField(max_length=300)
    is_active = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    objects = AccountManager()

    def __str__(self):
        return str(self.username)

