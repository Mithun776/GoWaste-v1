# Generated by Django 5.1.2 on 2024-11-02 10:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_vehiclelocation_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='RecordedData',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('item_id', models.IntegerField()),
                ('item_type', models.CharField()),
                ('vehicle_registration', models.CharField(max_length=20, null=True)),
                ('latitude', models.DecimalField(decimal_places=6, max_digits=10)),
                ('longitude', models.DecimalField(decimal_places=6, max_digits=10)),
                ('timestamp', models.DateTimeField()),
            ],
        ),
    ]
