var solicitations = [];

function searchReason(value){
    const motivos = ['demandas ger. manutenção'];
    const itensArea = document.querySelector(`.selectReason`);
    const reasonInput = document.getElementById("motivo");
    itensArea.innerHTML = '';
    function condition(b){
        return b.includes(value);
    }
    var values = motivos.filter(condition);
    if (value==''||value==' '){
        values = '';
    }else{
        values.forEach(element => {
            var item = document.createElement("p");
            item.textContent = element;
            var reasonItem = document.createElement("div");
            reasonItem.classList.add("searchItem","reasonItem");
            reasonItem.id = element;
            reasonItem.onclick = function(){
                reasonInput.value = reasonItem.id;
                itensArea.style.display = "none";
            }
            reasonItem.appendChild(item);
            itensArea.appendChild(reasonItem);
        });
    }
}

function searchVehicle(value){
    const viaturas = ['qsl 9d83','qfa 2i21','pos 1154','poa 2485','pob 3815','rib 8c17'];
    const itensArea = document.querySelector(`.selectVehicle`);
    const vehicleInput = document.getElementById("viatura");
    itensArea.innerHTML = '';
    function condition(b){
        return b.includes(value);
    }
    var values = viaturas.filter(condition);
    if (value==''||value==' '){
        values = '';
    }else{
        values.forEach(element => {
            var item = document.createElement("p");
            item.textContent = element;
            var vehicleItem = document.createElement("div");
            vehicleItem.classList.add("searchItem","vehicleItem");
            vehicleItem.id = element;
            vehicleItem.onclick = function(){
                vehicleInput.value = vehicleItem.id;
                itensArea.style.display = "none";
            }
            vehicleItem.appendChild(item);
            itensArea.appendChild(vehicleItem);
        });
    }
}

function searchDriver(value){
    const motoristas = ['alberto petrolinio de paiva','antonio marcos pereira','francisco veridiano rodrigues dos santos','claudio cardoso machado','raimundo nonato dos santos','joao amilton','jonas de araujo gameleira'];
    const itensArea = document.querySelector(`.selectDriver`);
    const driverInput = document.getElementById("motorista");
    itensArea.innerHTML = '';
    function condition(b){
        return b.includes(value);
    }
    var values = motoristas.filter(condition);
    if (value==''||value==' '){
        values = '';
    }else{
        values.forEach(element => {
            var item = document.createElement("p");
            item.textContent = element;

            var driverItem = document.createElement("div");
            driverItem.classList.add("searchItem","driverItem");
            driverItem.id = element;
            driverItem.onclick = function(){
                driverInput.value = driverItem.id;
                itensArea.style.display = "none";
            }
            driverItem.appendChild(item);
            itensArea.appendChild(driverItem);
        });
    }
}

function addSolicitation(){
    const addButton = document.getElementById("add");
    addButton.parentNode.removeChild(addButton);
    
    const sendButton = document.createElement("button");
    sendButton.id = "send";
    const saveIcon = document.createElement("i");
    saveIcon.classList.add("fa-solid","fa-circle-check");
    sendButton.appendChild(saveIcon);
    sendButton.onclick = function(){
        sendData();
    }
    const cancelButton = document.createElement("button");
    cancelButton.id = "cancel";
    const cancelIcon = document.createElement("i");
    cancelIcon.classList.add("fa-solid","fa-circle-xmark");
    cancelButton.appendChild(cancelIcon);
    cancelButton.onclick = function(){
        cancelSolicitation();
    }

    const footerField = document.querySelector(".rodape");
    footerField.append(sendButton,cancelButton);
    
    const container = document.querySelector(".item");
    var itemContent = document.createElement("div");
    itemContent.classList.add("box", "itemContent");
    
    const reasonInputIcon = document.createElement("i");
    reasonInputIcon.classList.add('fa-solid','fa-bookmark');
    const reasonInput = document.createElement("input");
    reasonInput.type = "text";
    reasonInput.id = "motivo";
    reasonInput.autocomplete = "false";
    reasonInput.placeholder = "Motivo";
    reasonInput.oninput = function(){
        searchReason(this.value);
    };
    const divSelectReason = document.createElement("div");
    divSelectReason.classList.add("box","searchItemField","selectReason");
    const divReasonInput = document.createElement("div");
    divReasonInput.classList.add("inputField");
    divReasonInput.append(reasonInputIcon,reasonInput,divSelectReason);
    
    const vehicleInputIcon = document.createElement("i");
    vehicleInputIcon.classList.add('fa-solid','fa-car');
    const vehicleInput = document.createElement("input");
    vehicleInput.type = "text";
    vehicleInput.id = "viatura";
    vehicleInput.autocomplete = "false";
    vehicleInput.placeholder = "Viatura";
    vehicleInput.oninput = function(){
        searchVehicle(this.value);
    }
    const divSelectVehicle = document.createElement("div");
    divSelectVehicle.classList.add("box","searchItemField","selectVehicle");
    const divVehicleInput = document.createElement("div");
    divVehicleInput.classList.add("inputField");
    divVehicleInput.append(vehicleInputIcon,vehicleInput,divSelectVehicle);
    
    const driverInputIcon = document.createElement("i");
    driverInputIcon.classList.add('fa-solid','fa-user-group');
    const driverInput = document.createElement("input");
    driverInput.type = "text";
    driverInput.id = "motorista";
    driverInput.autocomplete = "false";
    driverInput.placeholder = "Motorista";
    driverInput.oninput = function(){
        searchDriver(this.value);
    }
    const divSelectDriver = document.createElement("div");
    divSelectDriver.classList.add("box","searchItemField","selectDriver");
    const divDriverInput = document.createElement("div");
    divDriverInput.classList.add("inputField");
    divDriverInput.append(driverInputIcon,driverInput,divSelectDriver);
    
    const observationInputIcon = document.createElement("i");
    observationInputIcon.classList.add('fa-solid','fa-file-lines');
    const observationInput = document.createElement("input");
    observationInput.type = "text";
    observationInput.id = "observacao";
    observationInput.autocomplete = "false";
    observationInput.placeholder = "Detalhes";
    const divDetailsInput = document.createElement("div");
    divDetailsInput.classList.add("inputField");
    divDetailsInput.append(observationInputIcon,observationInput);

    itemContent.append(divReasonInput,divVehicleInput,divDriverInput,divDetailsInput);
    container.append(itemContent);
}

function sendData(){
    const reason = document.getElementById("motivo");
    const vehicle = document.getElementById("viatura");
    const driver = document.getElementById("motorista");
    const observation = document.getElementById("observacao");

    solicitations.push([reason.value,vehicle.value,driver.value,observation.value]);
    console.log(solicitations);

    const container = document.querySelector(".header");
    const actualItem = document.querySelector(".itemContent");
    const sendButton = document.getElementById("send");
    const cancelButton = document.getElementById("cancel");
    const addButtom = document.createElement("button");
    addButtom.id = "add";
    addButtom.onclick = function(){
        addSolicitation();
    }
    const addIcon = document.createElement("i");
    addIcon.classList.add('fa-solid','fa-square-plus');
    addButtom.appendChild(addIcon);
    container.append(addButtom);
    actualItem.parentNode.removeChild(actualItem);
    sendButton.parentNode.removeChild(sendButton);
    cancelButton.parentNode.removeChild(cancelButton);

    showSavedSolicitations();
}

function cancelSolicitation(){
    const container = document.querySelector(".header");
    const actualItem = document.querySelector(".itemContent");
    const sendButton = document.getElementById("send");
    const cancelButton = document.getElementById("cancel");
    const addButtom = document.createElement("button");
    addButtom.id = "add";
    addButtom.onclick = function(){
        addSolicitation();
    }
    const addIcon = document.createElement("i");
    addIcon.classList.add('fa-solid','fa-square-plus');
    addButtom.appendChild(addIcon);
    container.append(addButtom);
    actualItem.parentNode.removeChild(actualItem);
    sendButton.parentNode.removeChild(sendButton);
    cancelButton.parentNode.removeChild(cancelButton);
}

function showSavedSolicitations(){
    const savedField = document.querySelector(".saved");
    const savedItem = document.createElement("div");
    savedItem.classList.add("savedItem");

    const svReason = document.createElement("p");
    const svVehicle = document.createElement("p");
    const svDriver = document.createElement("p");
    const svObservation = document.createElement("p");
    const deleteSI = document.createElement("button");
    for(var i=0;i<solicitations.length;i++){
        const motivo = solicitations[i][0];
        const viatura = solicitations[i][1];
        const motorista = solicitations[i][2];
        const obs = solicitations[i][3];
        
        svReason.textContent = motivo; 
        svVehicle.textContent = viatura; 
        svDriver.textContent = motorista; 
        svObservation.textContent = obs;
        deleteSI.textContent = "-";
        deleteSI.onclick = function(){
            console.log(`Motivo: ${motivo}. Viatura: ${viatura}. Motorista: ${motorista}. Observação: ${obs}.`)
        };

    }
    savedItem.append(svReason,svVehicle,svDriver,svObservation,deleteSI);
    savedField.append(savedItem);
}