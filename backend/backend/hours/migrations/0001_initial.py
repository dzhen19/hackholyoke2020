# Generated by Django 3.1.3 on 2020-11-07 19:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Hour',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('hour', models.IntegerField(blank=True, null=True)),
                ('energy', models.IntegerField(blank=True, null=True)),
            ],
        ),
    ]
