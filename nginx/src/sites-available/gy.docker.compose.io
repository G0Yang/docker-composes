server {
	listen 12301;
	server_name gy.docker.container.io;

	location /
	{
        proxy_redirect off;
        proxy_pass http://172.18.0.3:5001/webui;
    }
}

server {
	listen 12302;
	server_name gy.docker.container.io;

	location /
	{
        proxy_redirect off;
        proxy_pass http://172.18.0.2:80;
    }
}

