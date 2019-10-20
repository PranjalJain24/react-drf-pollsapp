from rest_framework import serializers
from .models import Questions, Choice

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Questions
        fields ='__all__'

class ChoiceSerializer(serializers.ModelSerializer):
    question = QuestionSerializer
    
    class Meta:
        model = Choice
        fields ='__all__'





# from rest_framework import serializers
# from .models import employees

# class employeeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = employees
#         # fields = ('firstname','lastname')
#         fields ='__all__'