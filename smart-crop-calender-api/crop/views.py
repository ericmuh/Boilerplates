from django.shortcuts import render

from .models import Crop
from crop.serializers import CropSerializer
from rest_framework import generics


class CropList(generics.ListCreateAPIView):
    queryset = Crop.objects.all()
    serializer_class = CropSerializer


class CropDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Crop.objects.all()
    serializer_class = CropSerializer