#!/bin/bash
docker image build -t taskapp .
docker image tag taskapp:latest engiball/taskapp:0.0.2
docker push engiball/taskapp:0.0.2