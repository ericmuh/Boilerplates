from django.urls import path
from . import views
urlpatterns = [
path("", views.CropList.as_view()),
path("<int:pk>/", views.CropDetail.as_view())

]