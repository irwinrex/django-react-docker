from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class HomeView(APIView):
    def post(self, request):
        print(request)
        return Response({'message': 'Chill Dude! Have a Blessed Day'}, status=200)

    def get(self, request):
        return Response({'message': 'Django Welcomes'}, status=200)