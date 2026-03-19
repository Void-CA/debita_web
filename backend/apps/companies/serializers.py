# apps/companies/serializers.py
from rest_framework import serializers
from .models import Company

class CompanySerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(read_only=True)

    class Meta:
        model = Company
        fields = ['name', 'ruc', 'created_at']