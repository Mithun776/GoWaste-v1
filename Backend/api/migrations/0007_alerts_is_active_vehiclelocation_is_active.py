# Generated by Django 5.1.3 on 2024-11-24 12:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_routeoptimization_vehicleassignment'),
    ]

    operations = [
        migrations.AddField(
            model_name='alerts',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='vehiclelocation',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
    ]
