"""User Serializer"""
from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    """
    User Serializer
    """
    class Meta:
        """
        User Serializer Meta class
        """
        model = User
        fields = '__all__'
        read_only_field = ['is_active', 'date_joined']
