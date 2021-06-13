from django.db import models

# Create your models here.

class  putdata(models.Model):
    name = models.CharField(max_length=200, blank=False, null=True)
    age = models.IntegerField(blank=False, null=True)
    year = models.IntegerField(blank=False, null=True)
    room = models.CharField(max_length=6, blank=False, null=True)
    phone = models.CharField(max_length = 14, blank=True, null=True)
    email = models.EmailField(blank=False, null=True)
    password = models.CharField(blank = False, null=True, max_length = 30)

    def __str__(self):
        return self.name
