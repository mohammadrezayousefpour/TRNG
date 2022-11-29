from random import Random, random
from datetime import datetime
import numpy as np


def handleInteger(property):
    if property == "160":
        return [2,0]
    elif property == "161":
        return [2,1]
        
    elif property == "320":
        return [4,0]
        
    elif property == "321":
        return [4,1]
        
    elif property == "640":
        return [8,0]
        
    else:
        return [8,1]
        


def getIp(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    print(x_forwarded_for)
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    
    return ip
    

def generateIntegers(array,numberOfBytesAndSign,number):

    ansList=[]
    for byte in array:
        ansList.append(bin(int(byte,base=16))[2:])

    output=[] 
    counter = 0
    answer = ""
    for i in range(number):
        
        output.append(ansList[counter: counter+ numberOfBytesAndSign[0]])
        counter +=numberOfBytesAndSign[0]
    finaloutput=[]
    randomSign = [0,1]
    for arr in output:
        for byte in arr:
            answer +=byte
        outNumber = int(answer,2)
        if numberOfBytesAndSign[1] == 1:
            sign = np.random.choice(randomSign)
            if sign ==1:
                finaloutput.append(-1*outNumber)
            else :
                finaloutput.append(outNumber)
        else:
            finaloutput.append(outNumber)

        answer = ""

    return finaloutput    
def handleRawBytes(array,model):
    if model == "Decimal" or model == "Hexa":
        ansList=[]
        for byte in array:
            ansList.append(byte.decode("utf-8"))
        return ansList        

    if model == "Binary":
        ansList=[]
        for byte in array:
            ansList.append(bin(int(byte,base=16))[2:])

        return ansList

def changeNumberToString(array):
    numbers=[]
    for byte in array:
        print(byte)
        print(byte.decode("utf-8"))
        # binary = bin(int(byte,base=16))[2:]
        print(int(byte))
        # numbers.append(binary.decode("utf-8"))
    # print(type (numbers[0]))
    # for number in numbers:
        # print(chr(int(number)))    


def calculateDifferenceTime(later,first):
    now = str(later).split(".")[0]
    userTime = str(first).split(".")[0]

    start = datetime.strptime(userTime, "%Y-%m-%d %H:%M:%S")
    end =   datetime.strptime(now, "%Y-%m-%d %H:%M:%S")
    return int((end-start).total_seconds())
    

