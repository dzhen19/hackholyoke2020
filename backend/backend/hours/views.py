from rest_framework import viewsets

from .serializers import HourSerializer
from .models import Hour

class HourViewSet(viewsets.ModelViewSet):
    queryset = Hour.objects.all()
    serializer_class = HourSerializer
