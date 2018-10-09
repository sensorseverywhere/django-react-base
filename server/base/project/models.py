from django.db import models

class List(models.Model):
    name=models.CharField(max_length=100)
    created=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "List: {}".format(self.name)

# Create your models here.
class Project(models.Model):
    title=models.CharField(max_length=100)
    description=models.TextField(blank=True)
    list=models.ForeignKey(List, on_delete=models.CASCADE)

    def __str__(self):
        return "Project: {}".format(self.title)
