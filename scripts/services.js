document.addEventListener("DOMContentLoaded", function () {
  
    class SalonServices {
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
  
        
        if (!personName || !animalName || !serviceName || !appointmentDate) {
            alert("Please fill in all fields.");
            return;
        }
  
      
        let newService = new SalonServices(personName, animalName, serviceName, appointmentDate);
  
       
        servicesChosen.push(newService);
        localStorage.setItem('servicekey', JSON.stringify(servicesChosen));
  
        console.log(servicesChosen);
  
        
        displayInServicesPage();
    }
  
 
    let serviceButton = document.getElementById("servicesBtn");
    if (serviceButton) {
        serviceButton.addEventListener("click", function () {
            servicesManager(); 
        });
    }
  
    
    function displayInServicesPage() {
        let servicesDisplay = document.getElementById("services-Selected-register2");
        if (!servicesDisplay) return;
  
        let storedServices = localStorage.getItem('servicekey');
        let parsedServices = JSON.parse(storedServices) || [];
  
     
        servicesDisplay.innerHTML = '';
  
       
        parsedServices.forEach(service => {
            servicesDisplay.innerHTML += `
                <p>
                    <strong>User:</strong> ${service.userName}, 
                    <strong>Pet:</strong> ${service.petName}, 
                    <strong>Service:</strong> ${service.serviceNeeded}, 
                    <strong>Date:</strong> ${service.appointmentDate}
                </p>`;
        });
    }
    
    function displayInRegisterPage() {
        let registerDisplay = document.getElementById("services-Selected-register2");
        if (!registerDisplay) return;
  
        let storedServices = localStorage.getItem('servicekey');
        let parsedServices = JSON.parse(storedServices) || [];
  
        
        registerDisplay.innerHTML = '';
  
        
        parsedServices.forEach(service => {
            registerDisplay.innerHTML += `
                <p>
                    <strong>User:</strong> ${service.userName}, 
                    <strong>Pet:</strong> ${service.petName}, 
                    <strong>Service:</strong> ${service.serviceNeeded}, 
                    <strong>Date:</strong> ${service.appointmentDate}
                </p>`;
        });
    }
  
    displayInServicesPage();
    displayInRegisterPage();
  });
  