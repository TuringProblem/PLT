
# Author: { @Override }

colors=("\x1b[1;31m", "\x1b[1;32m", "\x1b[1;33m", "\x1b[1;34m", "\x1b[1;35m", "\x1b[1;36m", "\x1b[1;37m", "\x1b[0m")
if [[ $1 == "" ]]; then
    echo "No arguments supplied - Please try <./mover -l> to see 'list'"
    exit 1
fi

red=${colors[0]} #Why tf do you have to assing the array to a variable in order to use it?
green=${colors[1]} 
orange=${colors[2]} 
blue=${colors[3]} 
purple=${colors[4]} 
cyan=${colors[5]} 
white=${colors[6]} 
reset=${colors[7]} 


getColor() {
  case $1 in
    red) echo "${red}" ;;
    green) echo "${green}" ;;
    orange) echo "${orange}" ;;
    blue) echo "${blue}" ;;
    purple) echo "${purple}" ;;
    cyan) echo "${cyan}" ;;
    white) echo "${white}" ;;
    reset) echo "${reset}" ;;
  esac
}

color() {
  actual=$(getColor $1)
  echo "${actual}$2${reset}"
}


showList() {
    color "red" "hello world"
    exit 1
}

if [[ $1 == "-l" ]]; then
    showList
fi
