from django.db import models

# Create your models here.

class Contact(models.Model):
    name = models.CharField(max_length= 122)
    age = models.CharField(max_length=122)
    place = models.CharField(max_length= 122)
    ids = models.TextField()
    date = models.DateTimeField()
