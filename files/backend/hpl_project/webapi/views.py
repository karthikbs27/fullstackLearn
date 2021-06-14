from django.http import response
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import json
from .models import *
import smtplib
import random
import os

EMAIL_PASS = os.getenv("EMAIL_PASS")
EMAIL_ID = os.environ.get('EMAIL_ID')
otp = 0


# Create your views here.



def registerInfo(request):
    global otp
    if request.method == 'POST':
        request_payload = json.loads(request.POST['data'])
        print(request_payload)
        
        if request_payload['otp'] == otp:
            mem = putdata.objects.create(
                name = request_payload['name'],
                age = request_payload['age'],
                year = request_payload['year'],
                room = request_payload['roomNo'],
                phone = request_payload['phoneNo'],
                email = request_payload['email'],
                password = request_payload['password']
            )
        
            # user = {'name':mem.name,'age':mem.age, 'year':mem.year, 'room':mem.room, 'phone': mem.phone, 'email': mem.email}
            return JsonResponse({'data' : True })
        else:
            return JsonResponse({'data': False})

def verify(request):
    global otp
    request_payload = json.loads(request.POST['data'])
    sendotp(request_payload['email'])
    return JsonResponse({'data' : "true"})

def shish(request):
    response = JsonResponse({"working": "yes"})
    print('walla its working')
    return response

def getdata(request, namere):
    response = putdata.objects.get(name = namere)
    print(response.name + str(response.age))
    return JsonResponse({'shish': 'you'})

def sendotp(receiver):
    global otp
    s = smtplib.SMTP('smtp.gmail.com', 587)
    s.starttls()
    s.login(EMAIL_ID, EMAIL_PASS)
    otp = random.randint(100000, 999999)
    otp = str(otp)
    sub = "The one time password for varification"
    body = "The one time password for hpl varification is " + otp
    msg = f'Subject: {sub}\n\n{body}'
    s.sendmail('noonecan9686@mail.com', receiver, msg)
    print('OTP sent')
    s.quit()
    

