from datetime import datetime

from rest_framework.response import Response 
from rest_framework import status
from rest_framework.views import APIView
from random_number.Functions import handleInteger,calculateDifferenceTime,handleRawBytes,generateIntegers,changeNumberToString,getIp

from random_number.models import User
from random_number.redis import Redis
# from rest_framework import 


# Create your views here.


class IpView(APIView):

    def post(self,request):
        
        ip = getIp(request)

        if ip is None:
            return Response({
                "data": "error"  
            },status=status.HTTP_400_BAD_REQUEST)
        else:
            print("here2")

            user = User.objects.filter(ip = ip)
            if user.exists():
                user = user.first()

                now = datetime.now()
                if calculateDifferenceTime(now , user.last_visit) > 600 :
                    user.last_visit = now
                    user.visit_num +=1
                else:
                    pass    
                user.save()

                return Response({
                    "data" : "user already exist"
                },status = status.HTTP_200_OK) 
            else : 
                now = datetime.now()
                user = User.objects.create(ip = ip , quota = 10000 , visit_num = 1,first_visit = now,last_visit = now )
                return Response({
                    "data": "CREATED"
                },status=status.HTTP_200_OK)

    def get(self,request):
        ip = request.GET.get("ip")

        if ip is None:
            return Response({
                "data": "error"  
            },status=status.HTTP_400_BAD_REQUEST)
        else:
            try:
                user = User.objects.get(ip=ip) 
            except User.DoesNotExist:
                return Response({
                    'data':"user not found"
                },status = status.HTTP_400_BAD_REQUEST)
            return Response({
                "data": user.quota
            },status=status.HTTP_200_OK)

class UserView(APIView):
    def get(self,request):
 

        allUser = User.objects.all()
        print(allUser)
        answerList = []
        for user in allUser:
            oneuser =  {
                'ip': user.ip,
                'quota': user.quota,
                'visit_num': user.visit_num,
                "first_visit":user.first_visit,
                "last_visit" : user.last_visit
            }
            answerList.append(oneuser)
        # answerDict = {}
        return Response({
            "data" : answerList
        },status = status.HTTP_200_OK)


class oneUserView(APIView):
      def get(self,request):
        ip = getIp(request)

        if ip is None:
            return Response({
                "data": "error"  
            },status=status.HTTP_400_BAD_REQUEST)
        else:
            answerList =[]
            user = User.objects.filter(ip = ip)
            oneuser = {}
            if user.exists():
                
                user = user.first()
                oneuser =  {
                'ip': user.ip,
                'quota': user.quota,
                'visit_num': user.visit_num,
                "first_visit":user.first_visit,
                "last_visit" : user.last_visit
            }
            
                answerList.append(oneuser)
                    
                return Response({
                        "data" : oneuser
                    },status = status.HTTP_200_OK) 
            else : 
                now = datetime.now()
                user = User.objects.create(ip = ip , quota = 10000 , visit_num = 1,first_visit = now,last_visit = now )
                return Response({
                    "data": "CREATED"
                },status=status.HTTP_200_OK)


class RandByteView(APIView):
    
    def get(self,request):
        type = request.GET.get("type")
        number = request.GET.get("number")
        ip = getIp(request)
        if ip is None:
            return Response({
                "data": "error"  
            },status=status.HTTP_400_BAD_REQUEST)
        else:
            print("here2")
            user = User.objects.filter(ip = ip)
            if user.exists():
                user = user.first()
                user.quota -=int(number)
                user.save()


        redis = Redis()
        if type == "raw_bytes":
            model = request.GET.get("model")
            array = redis.get_bytes_redis(number)

            answer = handleRawBytes(array,model)
            
            return Response({
                "data": answer
            },status=status.HTTP_200_OK)
        elif type == "rnd_str":
            model = request.GET.get("model")

            numberFlag = False
            lowerFlag =  False
            upperFlag = False
            specialFlag = False
            if model[0] =="1":
                numberFlag = True
            if model[1] == "1":
                lowerFlag = True
            if model[2] == "1":
                upperFlag = True
            if model[3] == "1":
                specialFlag = True
           
            counter = 0
            answer = []

            while(counter !=int(number)):
                array = redis.get_bytes_redis(int(number)-counter)
                for byte in array:
                    newByte = byte.decode("utf-8")
                    newNumber = int(newByte)

                    if numberFlag:
                        if(newNumber >= 48 and newNumber <= 57):
                            answer.append(chr(newNumber))
                            counter +=1
                        else:
                            pass    
                    elif lowerFlag :
                        if(newNumber >=97 and newNumber <=122):
                            answer.append(chr(newNumber))
                            counter +=1
                    elif upperFlag :
                        if(newNumber >= 65 and newNumber <=90):
                            answer.append(chr(newNumber))
                            counter +=1
                    elif specialFlag:
                        if((newNumber >= 32 and newNumber <=47) or (newNumber >= 58 and newNumber <= 64) or  (newNumber >= 91 and newNumber <= 96) or (newNumber >= 123 and newNumber <= 126) ):
                            answer.append(chr(newNumber))
                            counter +=1


            return Response({
                "data": answer
            },status=status.HTTP_200_OK)
        elif type == "integers":
            model = request.GET.get("model")
            numberOfBytesAndSign = handleInteger(model)
     
            array = redis.get_bytes_redis(int(numberOfBytesAndSign[0]) * int(number))
           

            totalAnswer = generateIntegers(array,numberOfBytesAndSign,int(number))

            return Response({
                "data": totalAnswer
            },status=status.HTTP_200_OK)

        elif type == "uniform":
            pass

    
    

        