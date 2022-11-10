# lull/routers.py
from rest_framework.routers import SimpleRouter
from users.viewsets import UserViewSet
from auth.viewsets import LoginViewSet, RegistrationViewSet, RefreshViewSet


router = SimpleRouter()

# AUTHENTICATION
router.register(r'login', LoginViewSet, basename='auth-login')
router.register(r'register', RegistrationViewSet, basename='auth-register')
router.register(r'refresh', RefreshViewSet, basename='auth-refresh')

# USER
router.register(r'user', UserViewSet, basename='user')

urlpatterns = [
    *router.urls
]