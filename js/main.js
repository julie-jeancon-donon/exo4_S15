let xhttp = new XMLHttpRequest();
xhttp.open("GET", "infos.json", true);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     let myObject = JSON.parse(this.responseText)
     // infoSite.getInfos(myObject)
     // htmlManager.setTitle(infoSite)
     // htmlManager.setSubtitle(infoSite)
     // htmlManager.setAuthor(infoSite)
     console.log(myObject.users[1].name)
    }
  }
  xhttp.send();
