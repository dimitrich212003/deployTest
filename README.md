1. 
Обновляем установщик apt
sudo apt update && sudo apt upgrade

2. Устанавливаем гит и curl
sudo apt install git curl

3. Для установки последней версии node.js установим пространство nodesource
sudo curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

4. Устанавливаем node.js
sudo apt install nodejs

5. Устанавливаем express
npm install express


КАК СОЗДАТЬ СЛУЖБУ

1. cоздаем файл в директории /etc/systemd/system/myapp.service

2. конфигурация службы:
[Unit]
After=network.target

[Service]
ExecStart=/var/www/deployTest/server.js
User=dimi_trich

[Install]
WantedBy=multi-user.target
3. Обязательно указать права на выполнения файла server.js (chmod +x <путь к файлу>)

4. и также указать shebang в файле server.js (в первой строке): #!/usr/bin/env node

5. Выполнить команды:

sudo systemctl daemon-reload
sudo systemctl restart myapp.service


Установка NGNINX

1. sudo apt install nginx

2. Переходим в cd /etc/nginx/sites-available и откроем в nano файл default

3. Конфигурируем дефолт 
server {
        listen 80;

        root /var/www/myapp;

        server_name myapp.conf;

        location / {
                proxy_pass http://localhost:5000;
                proxy_set_header Host $host;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
}

4. с помощью команды sudo cp -r /home/dimi_trich/deployTest /var/www переносим директорию проекта в /var/www

5. Создадим символическую ссылку 
sudo ln -s /etc/nginx/sites-available/myapp /etc/nginx/sites-enabled/

6. Удалим символическую ссылку на default в sites-enabled
sudo rm default

7. Проверим конфигурацию nginx
sudo nginx -t

8. Перезагрузим nginx
sudo systemctl restart nginx




