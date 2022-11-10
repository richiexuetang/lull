"""This module contains channel related models"""
import uuid
from django.db import models
from django.conf import settings


class Channel(models.Model):
    """
    A model to represent a channel.
    """
    id = models.UUIDField(primaryKey=True, default=uuid.uuid4, editable=False)
    members = models.ManyToManyField(settings.AUTH_USER_MODEL)
    name = models.CharField(max_length=100)
    creator = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created_date = models.DateTimeField(auto_now_add=True, blank=True)
