from django.urls import path, include
from cars import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_cars),
    path('all/', views.get_all_cars),
]



# Question: 
#How does the url get appended? For IE if this request is specifically for a video's
#page, with it is appended, how does it get posted to that specific url.