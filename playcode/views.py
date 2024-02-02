from playcode.settings import get_secret
from rest_framework.views import APIView
from rest_framework.response import Response
from . import constant


class HomeView(APIView):
    """API for health Check"""
    def post(self, request):
        data=request.data
        username=data.get('username')
        password=data.get('password')
        if username==constant.username and password==constant.password:
            return Response('Chill Dude ! Have a Blessed Day', status=200)
        else:
            return Response('Sorry you are in a wrong place', status=401)
        
    def get(self, request):
        return Response('Django Welcome You and ' + get_secret('secrets'), status=200)

    