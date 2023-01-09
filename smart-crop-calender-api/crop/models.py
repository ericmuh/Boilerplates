from django.db import models

# Create your models here.
class Crop(models.Model):
    name = models.CharField(max_length=100)
    agro_ecological_zone = models.CharField(max_length=100)
    season = models.CharField(max_length=100)
    early_sowing_month = models.PositiveBigIntegerField()
    late_sowing_month = models.PositiveBigIntegerField()
    sowing_value = models.CharField(max_length=100)
    sowing_unit = models.CharField(max_length=100)
    growing_period = models.CharField(max_length=100)
    water_needed = models.CharField(max_length=100, null=True, blank=True)
    challenges = models.TextField()

    def __str__(self):
        return self.name