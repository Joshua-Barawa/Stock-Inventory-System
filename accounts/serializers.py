from rest_framework import serializers
from .models import *


class AccountSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = Account
        fields = ['full_name', 'username', 'email', 'business', 'avatar', 'password', 'password2']
        read_only_fields = ('password2',)

    def save(self):
        account = Account(email=self.validated_data['email'], username=self.validated_data['username'],
                          full_name=self.validated_data['full_name'], business=self.validated_data['business'],
                          avatar=self.validated_data['avatar'])

        password = self.validated_data['password']
        password2 = self.validated_data['password2']

        if password != password2:
            raise serializers.ValidationError({'password': "Passwords don't match!!"})
        account.set_password(password)
        account.save()
        return account

