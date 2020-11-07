from rest_framework import serializers
from .models import Hour
from rest_framework import viewsets

class HourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hour
        fields = ('id', 'timestamp', 'hour', 'energy')