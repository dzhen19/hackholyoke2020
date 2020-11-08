import datetime
from rest_framework import viewsets

from .serializers import HourSerializer
from .models import Hour
from rest_framework import status

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.core.exceptions import ObjectDoesNotExist

class HourViewSet(viewsets.ModelViewSet):
    queryset = Hour.objects.all()
    serializer_class = HourSerializer

def get_avg(request):
    lst = []
    for j in range(8, 18):
        queryset = Hour.objects.all().filter(hour=j)
        response = {}
        sum = 0
        for i in queryset:
            sum = sum + i.energy
        response['hour'] = j
        if (len(queryset)==0):
            response['energy'] = 0
            continue
        response['energy'] = int(sum/len(queryset))
        lst.append(response)
    serializer = HourSerializer(queryset, many=True)
    return JsonResponse({'average': lst}, safe=False, status=status.HTTP_200_OK)

def get_today(request):
    lst = []
    
    queryset = Hour.objects.all()
    for i in queryset:
        response = {}
        if i.timestamp.date() == datetime.datetime.today().date():
            response["hour"] = i.hour
            response["energy"] =i.energy
            lst.append(response)

    serializer = HourSerializer(queryset, many=True)
    return JsonResponse({'today': lst}, safe=False, status=status.HTTP_200_OK)
