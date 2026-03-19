# apps/companies/serializers.py
from rest_framework import serializers
from .models import Client

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = "__all__"