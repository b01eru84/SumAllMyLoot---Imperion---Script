/*
*		SAML - MainClass
*
*
*/

this.metadata = new Object();

metadata.innerTEXT = new String();

metadata.toArray = function(){
	return metadata.innerTEXT.split('\n');
};

metadata.setting = function (name){
	new tmpArray = metadata.toArray();
	for (var i=0;i < tmpArray.length; i++){
		var myReg = new RegExp('\\b' + name + '\\b');
		if (tmpArray[i].match(myReg)){
			return String.trim(tmpArray[i].split('@'+name)[1]);
		}
	}
};

