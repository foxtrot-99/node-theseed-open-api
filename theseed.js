if(!Array.prototype.includes) {
    Array.prototype.includes = (function(fnd) {
        for(var item of this) {
            if(item == fnd) return 1;
        }
        
        return 0;
    });
}

function Theseed(wiki, token) {
	if(typeof wiki == 'string') wiki = wiki.toLowerCase();
	if(this instanceof Theseed) {
		if(['awiki', 'alphawiki', 'alpha', 'a', 2].includes(wiki)) {
			this.host = 'awiki.theseed.io';
		} else 
		if(['theseedwiki', 'theseed', 't', 3].includes(wiki)) {
			this.host = 'theseed.io';
		} else
		if(['namu', 'namuwiki', 'n', 1].includes(wiki)) {
			this.host = 'namu.wiki';
		} else this.host = wiki;
		
		this._token = token || null;
	} else return new Theseed(wiki);
}

  Theseed.prototype.login
= Theseed.prototype.token
= Theseed.prototype.setToken
= Theseed.prototype.settoken
= function login(token) {
	this._token = token;
}

module.exports = Theseed;
