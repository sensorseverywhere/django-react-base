from rest_framework.viewsets import ModelViewSet

from .serializers import ProjectSerializer, ListSerializer
from .models import Project, List

class ListApi(ModelViewSet):
    queryset=List.objects.all()
    serializer_class=ListSerializer

class ProjectApi(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
