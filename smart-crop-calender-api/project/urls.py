from django.contrib import admin
from django.urls import path, include

# from rest_framework import permissions
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.schemas import get_schema_view

from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions

schema_view = get_schema_view(
    openapi.Info(
        title="Project_name API",
        default_version="v2",
        description="Api for the Project_name App",
        terms_of_service="https://www.SmartcropCalender.com/policies/terms/",
        contact=openapi.Contact(email="muhwezi1000@gmail.com"),
        license=openapi.License(name="UnLicensed"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/crops/", include("crop.urls")),
    path("", schema_view.with_ui("swagger", cache_timeout=0), name="schema-swagger-ui"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
admin.site.site_header = "Project_name Administration"
