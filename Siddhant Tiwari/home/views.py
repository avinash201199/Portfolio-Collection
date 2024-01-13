from django.shortcuts import render
from datetime import datetime
from home.models import Contact
# Create your views here.

def index(request):
    if request.method == "POST":
        name = request.POST.get("name")
        age = request.POST.get("age")
        place = request.POST.get("place")
        ids = request.POST.get("ids")

        contact = Contact(name = name, age = age, place = place, ids = ids, date = datetime.today())
        contact.save()
    
    return render(request, "index.html")

def projects(request):
    return render(request, "projects.html")

def socials(request):
    return render(request, "socials.html")