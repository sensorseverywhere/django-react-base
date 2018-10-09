from rest_framework import serializers
from .models import Project, List

class ListSerializer(serializers.ModelSerializer):
    class Meta:
        model=List
        fields='__all__'

    def create(self, validated_data):
        return List.objects.create(**validated_data)

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model=Project
        fields='__all__'

    def create(self, validated_data):
        return Project.objects.create(**validated_data)
