MarvelService = function MarvelService() {
    var key = '?apikey=e44062bbc76b37176b08325d5265a0f3';
    var baseUrl = 'http://gateway.marvel.com/v1/public/'

    var marvelCharacters = []
    var myTeam = []


    this.getMyTeam = function() {}

    this.removeFromTeam = function(id) {
        var charArray = marvelCharacters
        var teamArray = myTeam
        for (var i = 0; i < teamArray.length; i++) {
            if (id == teamArray[i]['id']) {
                teamArray.pop(teamArray[i])
                return teamArray
            }
        }
    }

    this.addToTeam = function(id) {
        var charArray = marvelCharacters
        var teamArray = myTeam
        for (var i = 0; i < charArray.length; i++) {
            if (id == charArray[i]['id']) {
                teamArray.push(charArray[i])
                return teamArray
            }
        }
    }

    this.getCharacters = function(callWhenDone) {
        var data = localStorage.getItem('MarvelData')
        if (data) {
            marvelCharacters = JSON.parse(data);
            return callWhenDone(marvelCharacters)
        }
        $.get(baseUrl + 'characters' + key, function(response) {
            localStorage.setItem('MarvelData', JSON.stringify(response.data.results))
            marvelCharacters = response.data.results;
            callWhenDone(marvelCharacters)
        })
    }

}