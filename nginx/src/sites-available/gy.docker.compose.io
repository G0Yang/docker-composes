server {
	listen 80;
	server_name gy.docker.container.io;


	location /
	{
        proxy_redirect off;
        proxy_pass http://ipfs:5001/webui;
    }
}

