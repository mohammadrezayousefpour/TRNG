from django.contrib import admin

from random_number.models import RandomBytes, User,Index,BufferIndex

# Register your models here.

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    pass


@admin.register(RandomBytes)
class RandomByteAdmin(admin.ModelAdmin):
    readonly_fields = ["bytes"]

@admin.register(Index)
class IndexAdmin(admin.ModelAdmin):
    pass

@admin.register(BufferIndex)
class BufferIndexAdmin(admin.ModelAdmin):
    pass


