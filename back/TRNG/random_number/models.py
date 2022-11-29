from pyexpat import model
from statistics import mode
from django.db import models

# Create your models here.

class User(models.Model):
    ip = models.CharField(max_length=32,unique=True,primary_key=True)
    quota = models.IntegerField(default=1000)
    first_visit = models.DateTimeField(null=True)
    last_visit = models.DateTimeField(blank=True, null=True)
    visit_num = models.PositiveIntegerField()
    


class RandomBytes (models.Model):
    bytes = models.BinaryField(max_length=1024*1024)
    id = models.BigAutoField(primary_key=True)

class Index(models.Model):
    index = models.BigIntegerField(default=0)

    
class BufferIndex(models.Model):
    index = models.BigIntegerField(default=0)