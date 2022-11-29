import os
import django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'TRNG.settings')
django.setup()

from random_number.models import RandomBytes,Index,BufferIndex


def save_in_db(pathname): 
    # b = bytearray()   
    with open(pathname,'rb') as f: 
        for chunk in iter(lambda: f.read(1024*1024), b''):
            # b += chunk   

            RandomBytes.objects.create(bytes =(chunk))
        
        first_random_byte = RandomBytes.objects.order_by("id").first()
        # print(type(first_random_byte.bytes))
        # print(first_random_byte.bytes)
        first_index = 0
        if first_random_byte is None:
            first_index = 0
        else:
            first_index  = first_random_byte.id - 1    
        Index.objects.create(index = first_index)
        BufferIndex.objects.create(index = 0)
            

if __name__ == "__main__":
    save_in_db("./random_number/rand_file.bin")            