### How do I run this?
Assuming you have `docker` and `docker-compose` set up, run `docker-compose up -d`.

### What's happening?

A docker image should be treated as a completely separate machine, so a call to `localhost:5000` on your machine is not the same as a call to `localhost:5000` in your container. 

Your two options to contact other services over localhost are:
1. Don't do that, and use the service's alias instead. For example, a call to `localhost:5000` becomes `server:5000` when you service is named `server`. This works because `docker-compose` creates a default network over which your containers can communicate.
2. Specify the `network_mode` as `host` for the client container. A `host` network mode will make sure that your container is using the same networking stack as your host machine. In other words, `localhost:5000` on your laptop becomes `localhost:5000` in the client container. This is not recommended, because it means that your ports are exposed on the host machine and could network with unintended services. 
