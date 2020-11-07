from django.db import models

class Hour(models.Model):
    name = models.CharField(max_length=100)
