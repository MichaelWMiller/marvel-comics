MarvelController = function MarvelController() {
    var marvelService = new MarvelService()


    //Private
    function getCharacters() {
        marvelService.getCharacters(drawMarvel)
    }

    function drawMarvel(arr) {
        var template = ''
        var marvelElem = document.getElementById("marvel-characters")
        for (var i = 0; i < arr.length; i++) {
            var char = arr[i]
            char.description = char.description ? char.description : 'No Description Avalable'
            template += `
            <div class="col-s-4">
			<img src="${char.thumbnail.path + '.' + char.thumbnail.extension}" alt="">
			<h4><b>Name:</b> ${char.name}</h4>
			<p><b>Description:</b> ${char.description}</p>
			<p><b>Comic Appearances:</b>${char.comics.available}</p>
			<button class="waves-effect waves-light btn" onclick="app.controllers.marvelCtrl.addToTeam(${char.id})">Add to team</button>
		</div>
            `
        }
        marvelElem.innerHTML = template
    }

    function drawMyTeam(arr) {
        //getMyTeam -- returns array to use here
        var template = ``
        var myTeamElem = document.getElementById("my-team")
        for (var i = 0; i < arr.length; i++) {
            var char = arr[i]
            char.description = char.description ? char.description : 'No Description Available'
            template += `
            <div class="col-s-4">
			<img src="${char.thumbnail.path + '.' + char.thumbnail.extension}" alt="">
			<h4><b>Name:</b> ${char.name}</h4>
			<p><b>Description:</b> ${char.description}</p>
			<p><b>Comic Appearances:</b>${char.comics.available}</p>
            <button class="waves-effect waves-light btn" onclick="app.controllers.marvelCtrl.addToTeam(${char.id})">Add to team</button>
            <button class="waves-effect waves-light btn" onclick="app.controllers.marvelCtrl.removeFromTeam(${char.id})">Remove From Team</button>
		</div>
       `
        }
        myTeamElem.innerHTML = template

    }

    function getMyTeam() {
        // returns array 

    }


    //Public

    this.addToTeam = function addToTeam(id) {
        var myTeamArr = marvelService.addToTeam(id)
        drawMyTeam(myTeamArr)
    }
    this.removeFromTeam = function removeFromTeam(id) {
        var myTeamArr = marvelService.removeFromTeam(id)
        marvelService.removeFromTeam(id)
        drawMyTeam(myTeamArr)
    }




    getCharacters(drawMarvel)
}