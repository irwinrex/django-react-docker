from playcode.settings import get_secret
from rest_framework.views import APIView
from rest_framework.response import Response


class HomeView(APIView):
    """API for health Check"""
    #authentication_classes = [EquipoJWTAuthenticationClass]
    #permission_classes = (IsAuthenticated,)
    def get(self, request):
        return Response('Django Welcome You', status=200)

class loginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        secret_username = get_secret('username')
        secret_password = get_secret('password')

        if username != secret_username or password != secret_password:
            return Response('Unauthorized', status=401)

        return Response('Authorized', status=200)