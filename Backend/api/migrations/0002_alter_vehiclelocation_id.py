# Generated by Django 5.1.2 on 2024-11-02 07:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vehiclelocation',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
