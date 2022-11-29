import math
import sys
import redis 
from django.conf import settings
from random_number.models import RandomBytes
from random_number.models import Index
from django.db.models import F


 

class Redis():
    KEY = "TRNG"

    def __init__(self):
        self.redis_instance = redis.Redis(host=settings.REDIS_SETTING["host"],port=settings.REDIS_SETTING["port"])
    
    def get_bytes_redis(self,number):

        self.check()
        print(self.redis_instance.llen(Redis.KEY))
        random_bytes = self.redis_instance.lpop(Redis.KEY,number)

        print(random_bytes)
           #to binary
        # print(format(bin(int(random_bytes[0],base=16)),"#032"))
        

        # print( bin(random_bytes[0]).replace("0b", ""))
        # for randByte in random_bytes:
        #     print(randByte.decode("utf-8"))
        # print(random_bytes.decode("utf-8"))
        return random_bytes
        

    def read_from_data_base(self,capacity):
        last_index = Index.objects.last()
        if last_index is None:
            Index.objects.create(index = 0)
        current_index = last_index.index
        # current_index = last_index.index
        randombytes = list(RandomBytes.objects.filter(id__gt= current_index)[:capacity].values_list("bytes",flat=True))
        # randombytes = list(RandomBytes.objects.filter(id__gt= current_index)[:capacity].values_list("binary",flat=False))



        # listOfBytes = []
        # for rnd_byte in randombytes:
        #     for i in range(0,len(rnd_byte.bytes),8):
        #         listOfBytes.append(rnd_byte.bytes[i:i+8])

        last_index.index = F("index") + capacity
        last_index.save()
        return randombytes


    def check(self):
        if(self.redis_instance.llen(Redis.KEY) <= settings.REDIS_SETTING["min_capacity"]):
            for bytes in self.read_from_data_base(settings.REDIS_SETTING["capacity"]):
                self.redis_instance.rpush(self.KEY,*bytes)
            return
        
            

