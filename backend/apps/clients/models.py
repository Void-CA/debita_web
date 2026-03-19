from django.db import models

# Create your models here.
class Client(models.Model):
    name = models.CharField(max_length=255)
    ruc = models.CharField(max_length=20, blank=True, null=True)
    contact = models.CharField(max_length=255, blank=True, null=True)
    active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name