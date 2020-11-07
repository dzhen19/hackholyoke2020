from django.db import models

class Hour(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)
    hour = models.IntegerField(null=True, blank=True)
    energy = models.IntegerField(null=True, blank=True)

