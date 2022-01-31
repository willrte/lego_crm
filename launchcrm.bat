cd D:\Code\lego_api
call git pull
call npm install
start nodemon index
cd D:\Code\lego_crm
call git pull
call npm install
start npm run serve
timeout /t 8
set url="http://localhost:8080/"
start chrome %url%
exit 0