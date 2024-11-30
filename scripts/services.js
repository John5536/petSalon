
document.addEventListener("DOMContentLoaded", function () {
  
  class salonServices {
      constructor(userName, petName, serviceNeeded, appointmentDate) {
          this.userName = userName;
          this.petName = petName;
          this.serviceNeeded = serviceNeeded;
          this.appointmentDate = appointmentDate;
      }
  }

  
  let servicesChosen = JSON.parse(localStorage.getItem('servicekey')) || []; 

  
  function servicesManager() {
      let personName = document.getElementById("userName").value;
      let animalName = document.getElementById("animalNameindex").value;
      let serviceName = document.getElementById("serviceDesired").value;
      let appointmentDate = document.getElementById("aptDate").value;

      
      let newServiceslist = new salonServices(personName, animalName, serviceName, appointmentDate);

      
      servicesChosen.push(newServiceslist);

      
      let servicesString = JSON.stringify(servicesChosen);
      localStorage.setItem('servicekey', servicesString);

      
      console.log(servicesChosen);

      
      displayInhtml();
  }

  
  let serviceButton = document.getElementById("servicesBtn");
  if (serviceButton) {
      serviceButton.addEventListener("click", function() {
          servicesManager(); 
      });
  }

  
  function displayInhtml() {
      
      let storedServices = localStorage.getItem('servicekey');
      let parsedinfo = JSON.parse(storedServices);
      let servicesDisplay2 = document.getElementById("services-Selected-register2");

      
      servicesDisplay2.innerHTML = '';

      
      parsedinfo.forEach(service => {
          servicesDisplay2.innerHTML += `User: ${service.userName}, Pet: ${service.petName}, Service: ${service.serviceNeeded}, Date: ${service.appointmentDate}<br>`;
      });
  }

  
  displayInhtml();
});
