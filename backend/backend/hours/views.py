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

def get_week(request):
    lst = []
    response = {0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0}
    queryset = Hour.objects.all()
    for i in queryset:
        if i.timestamp.date().isocalendar()[0:2] == datetime.datetime.today().date().isocalendar()[0:2]:
            day_of_week = int(i.timestamp.date().weekday())
            response[day_of_week] += i.energy
        
    response = {k: int(v / 7) for k, v in response.items()}         
            

    serializer = HourSerializer(queryset, many=True)
    return JsonResponse({'week': response}, safe=False, status=status.HTTP_200_OK)

def avg(lst):
    if len(lst) == 0:
        return 0
    return sum(lst)/len(lst)