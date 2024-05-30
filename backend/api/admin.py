from django.contrib import admin
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin

from api.models import Post

# Register your models here.


class PostAdmin(admin.ModelAdmin):
    fields = ["title", "content", "created_at", "author"]
    list_display = ["title", "content", "created_at", "author"]
    readonly_fields = ["created_at", "author"]


class CustomUserAdmin(UserAdmin):
    list_display = [
        "id",
        "username",
        "email",
        "is_staff",
        "is_superuser",
    ]
    fieldsets = (
        (None, {"fields": ("username", "password")}),
        ("Personal info", {"fields": ("email",)}),
        (
            "Permissions",
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                )
            },
        ),
        ("Important dates", {"fields": ("last_login", "date_joined")}),
    )
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": (
                    "username",
                    "password1",
                    "password2",
                    "email",
                    "is_staff",
                    "is_superuser",
                ),
            },
        ),
    )


admin.site.unregister(User)  # Unregister default UserAdmin
admin.site.register(User, CustomUserAdmin)  # UserAdmin with custom configuration

admin.site.register(Post, PostAdmin)
