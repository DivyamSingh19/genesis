from django.http import HttpResponse
from django.shortcuts import render




def signup(request):
    return render(request,'signup.html')

def user_login(request):
    return render(request,'login.html')
def about(request):
    return HttpResponse("hello about welocome")