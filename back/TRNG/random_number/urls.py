from django.urls import path

from random_number.views import IpView,RandByteView,UserView,oneUserView

urlpatterns = [
    path("ip/",IpView.as_view()),
    path("random_number/",RandByteView.as_view()),
    path("users/",UserView.as_view()),
    path("oneUser/",oneUserView.as_view())
    
]