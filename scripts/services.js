class salonServices{
  constructor(userName, petName , serviceNeeded, appointmentDate){
    this.userName = userName;
    this.petName = petName;
    this.serviceNeeded = serviceNeeded;
    this.appointmentDate =appointmentDate;
  }
}

let servicesChosen = [];

function sericesManager(){
  let personName = document.getElementById("userName").value;
  let animalName = document.getElementById("animalNameindex").value;
  let serviceName = document.getElementById("serviceDesired").value;
  let appointmentName = document.getElementById("aptDate").value;

  let newServiceslist = new salonServices(personName,animalName,serviceName,appointmentName);

  servicesChosen.push(newServiceslist);

  let servicesString =JSON.stringify(servicesChosen);

  localStorage.setItem('servicekey',servicesString);

  console.log(servicesChosen);

}

function displayInhtml (){
  let storedServices = localStorage.getItem('servicekey');
  let parsedinfo = JSON.parse(storedServices);
  let servicesDisplay2 = document.getElementById("servicesDisplay");

  servicesDisplay2.innerHTML = parsedinfo;
}

let serviceButton = document.getElementById("servicesBtn");

serviceButton.addEventListener("click", function(){
  sericesManager();
})
