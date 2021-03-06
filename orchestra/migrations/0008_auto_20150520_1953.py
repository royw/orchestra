# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import jsonfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('orchestra', '0008_auto_20150521_2011'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='project_data',
            field=jsonfield.fields.JSONField(default={}),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='task',
            name='step_slug',
            field=models.CharField(max_length=200, choices=[
                                   ('copy_pass', 'Copy Pass'), ('content_extraction', ' Content Extraction')]),
            preserve_default=True,
        ),
        migrations.AlterUniqueTogether(
            name='taskassignment',
            unique_together=set([('task', 'assignment_counter')]),
        ),
    ]
