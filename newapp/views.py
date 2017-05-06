# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, render_to_response, redirect
from django.http import HttpResponse
from newapp.models import Doctors
import json
# Create your views here.
def welcome(request):
	return HttpResponse("hey")




def search_page(request):
	return render(request,"search_page.html")




def results(request):

    res = request.GET.get('search')
    print res
    b = Doctors.objects.filter(name=res)
    c=[]
    for x in b:
    	t={}
    	t['name'] = x.name
    	t['location'] = x.location 
    	c.append(t)
        
    
    return HttpResponse(json.dumps({'data':c}))






def again(request):

    res = request.GET.get('search')
    
    b = Doctors.objects.filter(location=res)
    print (b)
    c=[]
    for x in b:
    	t={}
    	t['name'] = x.name
    	t['location'] = x.location 
    	c.append(t)
        
    
    return HttpResponse(json.dumps({'data':c}))



def alldoctors(request):
    x = Doctors.objects.all()
    
    
    return render(request,'all_doc.html',{'all_data':x })




def new(request):
    return render(request,'adddoctors.html')
 



def save(request):
    name = request.GET.get('name');
    location = request.GET.get('location');
    spec = request.GET.get('specialization');
    s_time = request.GET.get('time');
    e_time = request.GET.get('end');
    b=Doctors(name=name,location=location,speciality=spec,s_timings=s_time,e_timings=e_time)
    b.save()
    
    return HttpResponse("saved")


