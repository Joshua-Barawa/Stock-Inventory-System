import datetime
from django.db import models
import datetime
from accounts.models import Account


class Product(models.Model):
    name = models.CharField(max_length=300, blank=True, null=True, )
    received = models.IntegerField()
    in_stock = models.IntegerField()
    status = models.BooleanField(default=False)
    spoiled = models.IntegerField()
    buying_price = models.IntegerField()
    selling_price = models.IntegerField()
    date = models.DateField(auto_now=datetime.date.today)
    clerk = models.ForeignKey(Account, blank=True, null=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Request(models.Model):
    item_name = models.CharField(max_length=300, blank=True, null=True)
    s_name = models.CharField(max_length=300, blank=True, null=True)
    s_email = models.EmailField(blank=True, null=True)
    status = models.BooleanField(default=False)
    quantity = models.IntegerField()
    date = models.DateField(auto_now=datetime.date.today)
    clerk = models.ForeignKey(Account, blank=True, null=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.item_name
