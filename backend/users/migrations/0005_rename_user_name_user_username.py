# Generated by Django 4.1.3 on 2022-11-10 00:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_user_is_active_user_is_staff_alter_user_is_superuser'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='user_name',
            new_name='username',
        ),
    ]