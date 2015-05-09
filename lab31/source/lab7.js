var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
var vowels = ['a', 'e', 'i', 'o', 'u'];

var no_vowel="";
for(var i = 0; i < chars.length; i++){
	var is_vowel = false;
	for(var j = 0; j < vowels.length; j++){
		if(chars[i] === vowels[j]){
			vowel = 'si es vocal: ' + chars[i];
			is_vowel = true;
		}
	}
	if(!is_vowel){
		no_vowel += chars[i];
	}
}

alert("Las consonantes del abecedario son: " + no_vowel);