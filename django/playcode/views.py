from playcode.settings import get_secret
from rest_framework.views import APIView
from rest_framework.response import Response


class HomeView(APIView):
    """API for health Check"""
    #authentication_classes = [EquipoJWTAuthenticationClass]
    #permission_classes = (IsAuthenticated,)
    def get(self, request):
        return Response('Django Welcome You', status=200)