if [ "all" == $2 ]; then
  list=$(ls -l |grep "^d"|awk '{print $9}')
  for value in $list
  do
    cd $value
    if [ "stop" == $1 ] || [ "restart" == $1 ]; then
      docker-compose down
    fi
    if [ "start" == $1 ] || [ "restart" == $1 ]; then
      docker-compose up -d
    fi
    cd ../
  done
else
  cd $2
  if [ "stop" == $1 ] || [ "restart" == $1 ]; then
    docker-compose down
  fi
  if [ "start" == $1 ] || [ "restart" == $1 ]; then
    docker-compose up -d
  fi
fi
