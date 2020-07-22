
var hash = "";
var version = "1.0.0";
var entryPoints = new Array();

function setup() {
    entryPoints.sort();    
}

export function register(entryPoint:string) {
    entryPoints.push(entryPoint);
    hash = hash + '0';
    setup();
}

export function getHash() {
    return hash;
}

export function getVersion() {
    return version;
}

export function setVersion(versn:string) {
    version = versn;
}

export function cached(entryPoint:string) {
    entryPoints.forEach((value,index,array) => {
        if(value == entryPoint) {
            const cipherChars = [...hash]; // convert into array
            cipherChars[index] = '1'; // alter array
            hash = cipherChars.join(""); // convert back into string
            console.log(hash);
        }
    })
}

export function lazyCall(entryPoint:string) {
    var script = entryPoint;
    script += "?";
    script += "v=" + version;
    script += "&";
    script += "hash=" + hash;
    cached(entryPoint);
    return script;
}