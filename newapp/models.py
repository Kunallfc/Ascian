# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Doctors(models.Model):

   name = models.CharField(max_length = 50,null=False)
   location = models.CharField(max_length = 50,null=False)
   speciality = models.CharField(max_length = 50)
   s_timings = models.CharField(max_length = 50,null=False)
   e_timings = models.CharField(max_length = 50,null=False)