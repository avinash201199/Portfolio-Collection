from django.contrib import admin
from django.urls import path,include
from home import views

urlpatterns = [
    path("", views.index, name = 'index1'),
    path("index", views.index, name = 'index'),
    path("projects", views.projects, name = 'projects'),
    path("socials", views.socials, name = 'socials')
]