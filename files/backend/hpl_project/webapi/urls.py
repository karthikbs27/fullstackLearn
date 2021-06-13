from django.urls import path 
from .views import *

urlpatterns = [
    path('register', registerInfo),
    path('verify', verify),
    path('get/<str:namere>', getdata), 
]