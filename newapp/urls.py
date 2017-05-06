from django.conf.urls import url,include
from newapp import views



urlpatterns=[

	url(r'^$', views.new),
	url(r'^search', views.search_page),
    url(r'^result', views.results),
    url(r'^again', views.again),
    url(r'^doctors', views.alldoctors),
    
    url(r'^save', views.save),

]
