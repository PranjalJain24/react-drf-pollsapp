# """DrfPoll URL Configuration

# The `urlpatterns` list routes URLs to views. For more information please see:
#     https://docs.djangoproject.com/en/2.2/topics/http/urls/
# Examples:
# Function views
#     1. Add an import:  from my_app import views
#     2. Add a URL to urlpatterns:  path('', views.home, name='home')
# Class-based views
#     1. Add an import:  from other_app.views import Home
#     2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
# Including another URLconf
#     1. Import the include() function: from django.urls import include, path
#     2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
# """

from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from polls import views
from polls.views import QuestionViewSet, ChoiceViewSet
from rest_framework.routers import DefaultRouter
from django.urls import path, include

router = DefaultRouter()
router.register(r'question', QuestionViewSet, basename='question')
router.register(r'choice', ChoiceViewSet, basename='choice')

# urlpatterns = router.urls

urlpatterns = [
    url(r'^api/polls/', include(router.urls)),
    url(r'^admin/',admin.site.urls),  
    url(r'',views.IndexView.as_view()),
    # url(r'^api/questions/',views.questionList.as_view()),
    # url(r'^api/choices/',views.choiceList.as_view()),

    
    # url(r'^api/people/',views.PeopleList.as_view()),
    
    # url(r'^api/choices/',views.choiceList.as_view()),
    # url(r'^api/choices/',views.choiceList.as_view()),
    # url(r'^api/choices/',views.choiceList.as_view()),
    
    #path('admin/', admin.site.urls),
]



# app_name = 'polls'
# urlpatterns = [
#     path('', views.IndexView.as_view(), name='index'),
#     path('<int:pk>/', views.DetailView.as_view(), name='detail'),
#     path('<int:pk>/results/', views.ResultsView.as_view(), name='results'),
#     path('<int:question_id>/vote/', views.vote, name='vote'),

    # # ex: /polls/
    # path('', views.index, name='index'),
    # # ex: /polls/5/
    # path('<int:question_id>/', views.detail, name='detail'),
    # # ex: /polls/5/results/
    # path('<int:question_id>/results/', views.results, name='results'),
    # # ex: /polls/5/vote/
    # path('<int:question_id>/vote/', views.vote, name='vote'),
# ]


# from django.contrib import admin
# from django.urls import path

# urlpatterns = [
#     path('admin/', admin.site.urls),
# ]
